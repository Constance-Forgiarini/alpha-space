import { HubbleImagesResponse, News, NewsResponse } from "@/utils/types";
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
      <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {objects.results.map((item, index) => (
          <div className="test"></div>
        ))}
      </div>
    );
  } else if (mode === "news^page") {
    return (
      <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-">
        {objects.results.map((item, index) => (
          <NewsPageCard news={item as News} key={index} />
        ))}
      </div>
    );
  }
};

export default CardsGrid;
