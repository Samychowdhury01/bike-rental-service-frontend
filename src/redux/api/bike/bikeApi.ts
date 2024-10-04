import { baseApi } from "../api";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        console.log('from line 8 api', query);
        if (query) {
          Object.keys(query).forEach((key) => {
            params.append(key, query[key]);
          });
        }
        console.log('from line 14 api', params);
        return {
          url: "/bikes",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["bike"],
    }),
    getSingleBike: builder.query({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "GET",
        };
      },
      providesTags: ["bike"],
    }),
    addBike: builder.mutation({
      query: (data) => {
        return {
          url: "/bikes",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["bike"],
    }),
    updateBike: builder.mutation({
      query: (payload) => {
        const { id, ...data } = payload;
        return {
          url: `/bikes/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["bike"],
    }),
    deleteBike: builder.mutation({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["bike"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useAddBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
  useGetSingleBikeQuery
} = bikeApi;
