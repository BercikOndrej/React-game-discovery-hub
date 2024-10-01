import { Badge } from "@/components/ui/badge";

interface Props {
  score: number;
}
const CriticScoreBadge = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "gray";
  let style = "hover:dark:text-black hover:text-white dark:opacity-70 ";

  switch (color) {
    case "green": {
      style += "bg-green-100 text-green-700";
      break;
    }
    case "yellow": {
      style += "bg-yellow-100 text-yellow-700";
      break;
    }
    case "gray": {
      style += "bg-gray-100 text-gray-700";
      break;
    }
  }

  return <Badge className={style}>{score}</Badge>;
};

export default CriticScoreBadge;
