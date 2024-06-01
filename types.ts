export type Genre = {
  checksum: string;
  created_at: number;
  id: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
};

export type singleGame = {
  category: number;
  cover: number;
  first_release_date: number;
  id: number;
  name: string;
  platforms: number | number[];
  releaseYear: number;
  slug: string;
  storyline: string;
  summary: string;
  total_rating: number;
  total_rating_count: number;
  imageUrl: string;
};
