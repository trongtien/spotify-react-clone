import axios, { AxiosResponse } from "axios";
import { PATH_API } from "./path";

const getBase64 = () => {
  const spotifyClientId = process.env["SPOTIFY_CLIENT_ID"] || "";
  const spotifyClientSecret = process.env["SPOTIFY_CLIENT_SECRET"] || "";

  console.log("spotifyClientId", spotifyClientId)
  console.log("spotifyClientSecret", spotifyClientSecret)

  const bufferParse = new (Buffer.from(
    spotifyClientId + ":" + spotifyClientSecret
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as unknown as any)();

  return bufferParse.toString("base64") as string;
};

interface AxiosConfigProps {
  headerProp?: Record<string, string>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const axiosConfig = ({ headerProp }: AxiosConfigProps) => {
  let headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: "Basic " + getBase64(),
  };

  if (headerProp) {
    headers = Object.assign(headers, headerProp);
  }

  const request = axios.create({
    baseURL: PATH_API.DOMAIN,
    timeout: 10000,
    headers: headers,
  });

  request.interceptors.response.use(
    (response: AxiosResponse) => {
      return Promise.resolve(response);
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return request;
};

export default axiosConfig;
