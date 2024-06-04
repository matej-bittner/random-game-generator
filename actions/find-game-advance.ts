"use server";
import * as z from "zod";
import { AdvanceSearchSchema, SearchSchema } from "@/schemas";
import { FetchApi, timestampToYear, yearToTimestamp } from "@/lib/utils";

export const FindGameAdvance = async (
  values: z.infer<typeof AdvanceSearchSchema>,
) => {
  const validatedFields = AdvanceSearchSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Something Went Wrong!" };
  }

  const { mood, platform, release, rating, game_mode, sequels } =
    validatedFields.data;

  let year = 0;
  let mainBody = `fields id;where cover!=null & total_rating > ${rating} &total_rating_count > 0 & game_modes=(${game_mode}) & platforms = (${platform}) ${sequels === 1 ? "& collection!=null" : ""};limit 150;`;
  let fromYearTimestamp;

  if (release === 0) {
    year = 2020;
    fromYearTimestamp = yearToTimestamp(year, true);
    mainBody = `fields id;where cover!=null & total_rating > ${rating} &total_rating_count > 0 & first_release_date > ${fromYearTimestamp} & game_modes=(${game_mode}) & platforms = (${platform}) ${sequels === 1 ? "& collection!=null" : ""};limit 150;`;
  }
  if (release === 1) {
    year = 2008;
    fromYearTimestamp = yearToTimestamp(year);
    mainBody = `fields id;where cover!=null & total_rating > ${rating} &total_rating_count > 0 & first_release_date < ${fromYearTimestamp} & game_modes=(${game_mode}) & platforms = (${platform}) ${sequels === 1 ? "& collection!=null" : ""};limit 150;`;
  }

  const data = await FetchApi(mainBody, "https://api.igdb.com/v4/games");

  if (data.length <= 0) {
    return { error: "No games were found!" };
  }

  const randomIndex = Math.floor(Math.random() * data.length); // Get a random index
  const randomId = data[randomIndex].id; // Access the ID from the object

  let singleGameBody = `fields cover,genres,name,platforms,slug,storyline,summary,total_rating,total_rating_count,first_release_date,aggregated_rating,total_rating,total_rating_count;where id=${randomId};`;

  const singleGameData = await FetchApi(
    singleGameBody,
    "https://api.igdb.com/v4/games",
  );
  const singleGameObject = singleGameData[0];

  const releaseYear = timestampToYear(singleGameObject.first_release_date);
  const imageBody = `fields url;where game=${singleGameObject.id};`;

  const image = await FetchApi(imageBody, "https://api.igdb.com/v4/covers");

  const imageUrl = "https:" + image[0].url.replace("t_thumb", "t_cover_big");

  const gameData = Object.assign(
    {},
    singleGameObject,
    { releaseYear },
    { imageUrl },
  );

  return gameData;
};
