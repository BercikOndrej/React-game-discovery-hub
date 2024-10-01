import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  onSelectOrdering: (value: string) => void;
}

const SORT_POSIBILITIES = [
  { value: " ", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Released date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

const SortSelector = ({ onSelectOrdering }: Props) => {
  return (
    <Select onValueChange={(value) => onSelectOrdering(value)}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Order by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Posibilities</SelectLabel>
          {SORT_POSIBILITIES.map((posibility) => (
            <SelectItem key={posibility.value} value={posibility.value}>
              {posibility.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
