import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const yearToTimestamp = (year: number, start?: boolean) => {
  let restOfDate;
  if (start) {
    restOfDate = "-01-01T00:00:00.000Z";
  } else {
    restOfDate = "-12-31T23:59:59.999Z";
  }

  const date = new Date(year + restOfDate.toString());
  const timestampInMilliseconds = date.getTime();
  const timestamp = Math.floor(timestampInMilliseconds / 1000);

  return timestamp;
};

export const timestampToYear = (timestamp: number) => {
  const dateFromTimestamp = new Date(timestamp * 1000);
  const yearFromTimestamp = dateFromTimestamp.getFullYear();

  return yearFromTimestamp;
};

export const FetchApi = async (body: string, url: string) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": `${process.env.API_CLIENT_ID}`,
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: {
      revalidate: 60 * 60 * 24, //24 hours
    },
    body: body,
  };
  const response = await fetch(url, options);

  const data = await response.json();
  return data;
};
