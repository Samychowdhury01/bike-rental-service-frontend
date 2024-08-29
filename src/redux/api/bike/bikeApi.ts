import { baseApi } from "../api";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (query) => {
        const params = new URLSearchParams()
        if(query){
          Object.keys(query).forEach(key => {
            params.append(key, query[key])
            })
        }
        return {
          url: "/bikes",
          method: "GET",
          params: params
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
        const {id, ...data} = payload
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
} = bikeApi;
