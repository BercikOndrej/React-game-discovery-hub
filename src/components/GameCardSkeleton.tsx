import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card className="max-w-[600px] w-[100%] mx-auto rounded-t-xl">
      <Skeleton className="w-full min-h-[200px] rounded-b-none rounded-t-lg" />
      <CardHeader className="gap-2">
        <div className="flex flex-row justify-between">
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-10 h-5" />
        </div>
        <Skeleton className="w-full h-2" />
        <Skeleton className="w-1/2 h-2" />
      </CardHeader>
    </Card>
  );
};

export default GameCardSkeleton;
