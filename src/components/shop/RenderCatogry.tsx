import { CategoryItemsProps } from "../../constants/constants";

interface RenderCatogryProps extends CategoryItemsProps {
  setInputValue: (value: string) => void;
}

export default function RenderCatogry({
  amount,
  image,
  title,
  setInputValue,
}: RenderCatogryProps) {
  return (
    <div className="flex w-[25%] gap-x-2 items-center">
      {image}
      <div>
        <h1
          onClick={() => setInputValue(title)}
          className="cursor-pointer font-bold"
        >
          {title.replaceAll("-", " ")}
        </h1>
        <p>{amount} products</p>
      </div>
    </div>
  );
}
