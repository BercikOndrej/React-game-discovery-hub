import DynamicalIcon from '@/components/DynamicalPlatformIcon';
import { Platform } from '@/entities/Platform';

interface Props {
  platforms: Platform[];
}

const PlatformsIconList = ({ platforms }: Props) => {
  return (
    <div className='flex flex-row gap-1'>
      {platforms.map((platform) => (
        <div
          key={platform.id}
          className=' text-gray-700 dark:text-white group-hover:text-gray-100 group-hover:dark:text-gray-900'
        >
          <DynamicalIcon platformSlug={platform.slug} />
        </div>
      ))}
    </div>
  );
};

export default PlatformsIconList;
