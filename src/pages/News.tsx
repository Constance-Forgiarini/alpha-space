import CardsGrid from "@/components/CardsGrid";
import Filters from "@/components/Filters";
import Overview from "@/components/Overview";
import Title from "@/components/Title";
import { snapiCustomFetch } from "@/utils/customFetch";
import {
  FiltersParams,
  NewsResponse,
  NewsResponseWithParams,
} from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 20,
  ordering: "-published_at",
};

export const newsPageLoader: LoaderFunction = async ({
  request,
}): Promise<NewsResponseWithParams | null> => {
  try {
    const params: FiltersParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const formattedParams = {
      search: params.term ? params.term : "",
      ...newsParams,
    };
    const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: formattedParams,
    });
    return { response: response.data, params };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const News = () => {
  const data = useLoaderData() as NewsResponseWithParams;
  const { response, params } = data;
  console.log(response);

  return (
    <section className="section">
      <Title text="All news" />
      <Filters term={params.term} mode="news" key={params.term} />
      <Overview objects={data} />
      <CardsGrid objects={response} mode="news-page" />
    </section>
  );
};

export default News;
