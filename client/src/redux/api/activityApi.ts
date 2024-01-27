import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Activity } from "../../utils/Activity";
const BASE_URL = "http://localhost:3001";

export const activityApi = createApi({
  reducerPath: "activityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getActivity: builder.query<Activity[], null>({
      query: () => "activity",
    }),
  }),
});

export const {} = activityApi;
