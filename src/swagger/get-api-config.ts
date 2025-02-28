import { Configuration } from "@spores/launchpad-common";
import { API_URL } from "../env";
import { configurableFetch } from "../utils";

export const getApiConfig = (accessToken?: string): Configuration | any => {
  return {
    basePath: API_URL,
    fetchMethod: configurableFetch,
    ...(accessToken
      ? {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      : {}),
  };
};
