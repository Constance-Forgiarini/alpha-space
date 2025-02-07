import CardsGrid from "@/components/CardsGrid";
import Filters from "@/components/Filters";
import Overview from "@/components/Overview";
import Title from "@/components/Title";
import { snapiCustomFetch } from "@/utils/customFetch";
import { NewsResponse } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 20,
  ordering: "-published_at",
};

export const newsPageLoader: LoaderFunction =
  async (): Promise<NewsResponse | null> => {
    try {
      const formattedParams = {
        ...newsParams,
      };
      const response = await snapiCustomFetch.get<NewsResponse>("", {
        params: formattedParams,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

const News = () => {
  const data = useLoaderData() as NewsResponse;
  const { results } = data;
  console.log(results);

  return (
    <section className="section">
      <Title text="All news" />
      <Filters term="term" mode="news" />
      <Overview objects={data} />
      <CardsGrid objects={results} mode="news-page" />
    </section>
  );
};

export default News;
