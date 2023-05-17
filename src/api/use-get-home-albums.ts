import { HttpClinet, useReactQuery } from "../service";
import { HomeResponse } from "../types/models/home-posts";

export default function useGetHomeAlbums(){
    
    const fetchHomeAlbums = async ()=>{
        const response =  await HttpClinet.get<HomeResponse>("albums");
        return response;
    }
    return useReactQuery<HomeResponse>("GET_ALL_ALBUMS_SUCCESS" , fetchHomeAlbums);
}