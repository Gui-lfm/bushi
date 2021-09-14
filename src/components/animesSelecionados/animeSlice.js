import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeSlice = createApi({
    reducerPath: 'ListaAnimesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://graphql.datocms.com/",
        prepareHeaders: headers => {

            const token = 'c7fc33e59b6ccd9a8af3051472d531'
            if (token) {

                headers.set('authorization', `${token}`)
            }
            return headers
        }
    }),
    endpoints: builder => ({
        getAnime: builder.query({
            query: () => ({
                url: '/teste',
                method: 'POST',
                body: JSON.stringify({

                    'query': `query{
                        allAnimes {
                          id
                          title
                          animationStudio
                          animeStatus
                          imageUrl
                          rating
                          releaseYear
                          animeCreator
                          createdAt
                          episodes
                          genres
                          synopsis
                          source 
                        }
                      }`
                })
            })
        })
    })
})

export const { useGetAnimeQuery } = animeSlice