import { CardsGrid, Overview, Title } from "@/components";
import { datastroCustomFetch } from "@/utils/customFetch";
import { HubbleImage, HubbleImagesResponse } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const hubbleParams = {
  oreder_by: "photo_date_taken desc",
  limit: 24,
};

export const hubblePageLoader: LoaderFunction =
  async (): Promise<HubbleImagesResponse | null> => {
    try {
      const formattedParams = {
        ...hubbleParams,
      };
      const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {
        params: formattedParams,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

const Hubble = () => {
  const data = useLoaderData() as HubbleImagesResponse;
  console.log(data);

  return (
    <section className="section">
      <Title text="Hubble telescope photos" />
      <Overview objects={data} />
      <CardsGrid objects={data} mode="hubble-page" />
    </section>
  );
};

export default Hubble;
