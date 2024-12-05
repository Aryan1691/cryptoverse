import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'x-rapidapi-key': '9dd6ae7a9amsh162a658e145e51ep17e52cjsn9048605d5c37',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};

const baseURL = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const CryptoApi = createApi({
  reducerPath: "CryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
      
    }),
  }),
});

export const { useGetCryptosQuery } = CryptoApi;
