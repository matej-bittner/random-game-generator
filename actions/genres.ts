"use server";

import { FetchApi } from "@/lib/utils";

export const getAllGenres = async () => {
  const data = await FetchApi(
    "fields name,slug,id;limit 30;",
    "https://api.igdb.com/v4/genres",
  );

  return data;
};
