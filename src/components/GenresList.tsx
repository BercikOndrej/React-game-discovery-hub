import useGenres, { Genre } from "@/hooks/useGenres";
import { Spinner } from "@/components/ui/spinner";
import getCroppedImage from "@/services/image-url";

interface Props {
  activeGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ activeGenre, onSelectGenre: onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const style =
    "duration-500 transform ease-linear group hover:cursor-pointer p-2 rounded-lg hover:font-bold hover:bg-gray-700 hover:text-gray-50 hover:dark:bg-gray-50 hover:dark:text-gray-700 ";
  const activeStyle =
    style +
    "ring-2 ring-gray-700 bg-gray-50 font-bold dark:bg-gray-700 dark:ring-gray-50";

  return (
    <>
      {error && <p className="text-4xl">{error}</p>}
      {isLoading && <Spinner size="medium" />}

      <ul className="flex flex-col gap-1 pt-4 ps-4">
        {data.map((genre) => (
          <li
            key={genre.id}
            onClick={() => onSelectGenre(genre)}
            className={genre.id === activeGenre?.id ? activeStyle : style}
          >
            <div className="group flex flex-row gap-4 items-center">
              <img
                src={getCroppedImage(genre.image_background)}
                className="w-[32px] h-[32px] rounded-lg"
              />
              <p className="text-xl flex-grow">{genre.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
