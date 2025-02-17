import { NewsResponse } from "@/utils/types";
import { ReactNode } from "react";
import NewsPageCard from "./NewsPageCard";

const CardsGrid = ({
  objects,
  mode,
}: {
  objects: NewsResponse;
  mode: string;
}): ReactNode => {
  console.log(mode);

  return (
    <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-">
      {objects.results.map((item, index) => (
        <NewsPageCard news={item} key={index} />
      ))}
    </div>
  );
};

export default CardsGrid;
