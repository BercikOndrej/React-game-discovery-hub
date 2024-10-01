import useData from "./useData";

const ENDPOINT = "/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

const useGenres = () => useData<Genre>(ENDPOINT);
export default useGenres;
