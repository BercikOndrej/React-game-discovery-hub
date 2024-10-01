import useData from "./useData";

const ENPOINT = "/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  image: string;
}

const usePlatforms = () => useData<Platform>(ENPOINT);

export default usePlatforms;
