"use server";

export const getAllGenres = async () => {
  const url = "https://api.igdb.com/v4/genres";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": `${process.env.API_CLIENT_ID}`,
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: "fields name,slug,id;limit 30;",
    next: {
      revalidate: 60 * 60 * 24, //24 hours
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
