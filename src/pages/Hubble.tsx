import { CardsGrid, Filters, Overview, Title } from "@/components";
import { datastroCustomFetch } from "@/utils/customFetch";
import {
  FiltersParams,
  HubbleImagesResponse,
  HubbleImagesResponseWithParams,
} from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const hubbleParams = {
  oreder_by: "photo_date_taken desc",
  limit: 24,
};

export const hubblePageLoader: LoaderFunction = async ({
  request,
}): Promise<HubbleImagesResponseWithParams | null> => {
  try {
    const params: FiltersParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const formattedParams = {
      where: params.term ? `photo_title like "${params.term}"` : "",
      ...hubbleParams,
    };
    const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {
      params: formattedParams,
    });
    return { response: response.data, params };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Hubble = () => {
  const data = useLoaderData() as HubbleImagesResponseWithParams;
  const { response, params } = data;
  console.log(data);

  return (
    <section className="section">
      <Title text="Hubble telescope photos" />
      <Filters term={params.term} mode="hubble" key={params.term} />
      <Overview objects={response} />
      <CardsGrid objects={response} mode="hubble-page" />
    </section>
  );
};

export default Hubble;
