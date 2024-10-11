import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Spinner } from '@/components/ui/spinner';
import useGameQueryStore from '@/gameQueryStore';
import usePlatforms from '@/hooks/usePlatforms';

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  const setPlatformId = useGameQueryStore((store) => store.setPlatformId);

  if (error) return null;

  return (
    <Select
      onValueChange={(id) => {
        setPlatformId(Number(id));
      }}
    >
      <SelectTrigger className='w-40'>
        <SelectValue placeholder='Select a platform' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Platforms</SelectLabel>
          {isLoading && <Spinner />}
          {data?.results.map((platform) => (
            <SelectItem key={platform.id} value={platform.id.toString()}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
