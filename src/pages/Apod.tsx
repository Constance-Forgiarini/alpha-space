import { Title } from "@/components";
import ApodPlayer from "@/components/ApodPlayer";
import { nasaCustomFetch } from "@/utils/customFetch";
import { numberToDate } from "@/utils/function";
import { ApodType } from "@/utils/types";
import { useEffect, useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const apodPageLoader: LoaderFunction =
  async (): Promise<ApodType | null> => {
    try {
      const response = await nasaCustomFetch.get<ApodType>("");
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

const Apod = () => {
  const defaultApod = useLoaderData() as ApodType;
  const [data, setData] = useState<ApodType>(defaultApod);
  const [day, setDay] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(defaultApod);

  const fetchApod = async (day: number): Promise<void | null> => {
    setIsLoading(true);
    try {
      const params = { date: numberToDate(day) };
      const response = await nasaCustomFetch.get("", { params });
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    fetchApod(day);
  }, [day]);

  return (
    <section className="section">
      <Title text="Nasa's astronomy picture of the day" />
      <ApodPlayer apod={data} day={day} setDay={setDay} isLoading={isLoading} />
    </section>
  );
};

export default Apod;
