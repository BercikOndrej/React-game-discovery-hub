import { Badge } from '@/components/ui/badge';

interface Props {
  score: number;
}
const CriticScoreBadge = ({ score }: Props) => {
  const color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'gray';
  let style =
    'group-hover:dark:text-black hover:text-green w-10 dark:opacity-70 ';

  switch (color) {
    case 'green': {
      style +=
        'bg-green-100 text-green-700 dark:bg-green-100 dark:text-green-700';
      break;
    }
    case 'yellow': {
      style +=
        'bg-yellow-100 text-yellow-700 dark:bg-yellow-100 dark:text-yellow-700';
      break;
    }
    case 'gray': {
      style += 'bg-gray-100 text-gray-700 dark:bg-gray-100 dark:text-gray-700';
      break;
    }
  }

  return <Badge className={style}>{score}</Badge>;
};

export default CriticScoreBadge;
