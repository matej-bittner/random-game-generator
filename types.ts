import { UseFormReturn } from "react-hook-form";

export type Genre = {
  id: number;
  name: string;
  slug: string;
};

export type SingleGame = {
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
  genres: number[];
  error?: string;
};

export type FilterFormProps = {
  onSubmit: (values: {
    genre?: number;
    goodRated: boolean;
    releaseFrom: number;
    releaseTo: number;
  }) => void;
  error?: string;
  isPending: boolean;
  genres?: Genre[];
  form: UseFormReturn<{
    genre?: number;
    goodRated: boolean;
    releaseFrom: number;
    releaseTo: number;
  }>;
};
