import { Platform } from "@/hooks/usePlatforms";
import DynamicalIcon from "@/components/DynamicalPlatformIcon";

interface Props {
  platforms: Platform[];
}

const PlatformsIconList = ({ platforms }: Props) => {
  return (
    <div className="flex flex-row gap-1">
      {platforms.map((platform) => (
        <div
          key={platform.id}
          className=" text-gray-700 dark:text-gray-50 group-hover:text-gray-100 group-hover:dark:text-gray-900"
        >
          <DynamicalIcon platformSlug={platform.slug} />
        </div>
      ))}
    </div>
  );
};

export default PlatformsIconList;
