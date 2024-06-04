"use server";

import { FetchApi, timestampToYear } from "@/lib/utils";

export const RandomGame = async () => {
  let mainBody = `fields id;where cover!=null & genres!=null & total_rating!=null & total_rating_count > 0 ;limit 100;`;
  const data = await FetchApi(mainBody, "https://api.igdb.com/v4/games");

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
