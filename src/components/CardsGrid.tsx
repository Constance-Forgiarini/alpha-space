import { HubbleImagesResponse, NewsResponse } from "@/utils/types";
import { ReactNode } from "react";
import NewsPageCard from "./NewsPageCard";

const CardsGrid = ({
  objects,
  mode,
}: {
  objects: NewsResponse | HubbleImagesResponse;
  mode: string;
}): ReactNode => {
  console.log(mode);

  if (mode === "hubble-page") {
    return (
      <div className="">
        {objects.results.map((item, index) => (
          <div className="test"></div>
        ))}
      </div>
    );
  } else if (mode === "news-page") {
    return (
      <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
        {objects.results.map((item, index) => (
          <NewsPageCard news={item} key={index} />
        ))}
      </div>
    );
  }
};

export default CardsGrid;
