"use server";
import * as z from "zod";
import { SearchSchema } from "@/schemas";
import { FetchApi, timestampToYear, yearToTimestamp } from "@/lib/utils";

export const FindGame = async (values: z.infer<typeof SearchSchema>) => {
  const validatedFields = SearchSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Something Went Wrong!" };
  }

  const { releaseFrom, releaseTo, goodRated, genre } = validatedFields.data;

  if (releaseFrom > releaseTo) {
    return { error: "Release from cannot be bigger than release to!" };
  }

  // const fetchDB = async (body: string, cover?: boolean) => {
  //   let url = "https://api.igdb.com/v4/games";
  //   if (cover) {
  //     url = "https://api.igdb.com/v4/covers";
  //   }
  //
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Client-ID": `${process.env.API_CLIENT_ID}`,
  //       Authorization: `Bearer ${process.env.API_TOKEN}`,
  //     },
  //     next: {
  //       revalidate: 60 * 60 * 24, //24 hours
  //     },
  //     body: body,
  //   };
  //   const response = await fetch(url, options);
  //
  //   const data = await response.json();
  //   return data;
  // };

  const fromYearTimestamp = yearToTimestamp(releaseFrom, true);
  const toYearTimestamp = yearToTimestamp(releaseTo);

  let mainBody = `fields id;where first_release_date > ${fromYearTimestamp} & first_release_date < ${toYearTimestamp} ${genre ? `& genres=(${genre})` : ""} & cover!=null &  ${goodRated ? "total_rating > 85" : "total_rating!=null"} &total_rating_count > 50 ;limit 100;`;
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
