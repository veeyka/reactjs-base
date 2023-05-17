
import { HttpClinet } from "../../service";
import actionTypes from "./actionTypes";
import { Dispatch } from 'redux';




export const getAllAlbumsAction = ():(dispatch: Dispatch<TAlbumsAction>) => void => {
    return (dispatch :Dispatch<TAlbumsAction>)=>{
        dispatch(fetchAlbumsPending());
    

        // API.get("posts").then(data=>{
        //     dispatch(fetchProductSuccess(data.data));
        // }).catch(err=>{
        //     dispatch(fetchProductFailed(JSON.stringify(err)));
        // });
    }
}
const fetchAlbumsPending = ()=>({
    type:actionTypes.GET_ALL_ALBUMS_PENDING,
});
const fetchAlbumsSuccess = (data:IArticle[])=>({
    type:actionTypes.GET_ALL_ALBUMS_SUCCESS,
    payload:data
});
const fetchAlbumsFailed = (err:string)=>({
    type:actionTypes.GET_ALL_ALBUMS_PENDING,
    error:err,
});
