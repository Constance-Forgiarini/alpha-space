import { NewsResponseWithParams } from "@/utils/types";
import { ReactNode } from "react";

const Overview = ({
  objects,
}: {
  objects: NewsResponseWithParams;
}): ReactNode => {
  const number: number = objects.response.count;
  return <div className="my-6 text-xl">{number} matches</div>;
};
export default Overview;
