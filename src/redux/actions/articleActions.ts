import actionTypes from "./actionTypes";
import { Dispatch } from 'redux';
import API from '../../address/api';



export function getAllArticlesAction():(dispatch: Dispatch<TArticleActions>) => void{
    return (dispatch :Dispatch<TArticleActions>)=>{
        dispatch(fetchProductPending());
        API.get("posts").then(data=>{
            dispatch(fetchProductSuccess(data.data));
        }).catch(err=>{
            dispatch(fetchProductFailed(JSON.stringify(err)));
        });
    }
}
const fetchProductPending = ()=>({
    type:actionTypes.GET_ALL_ARTICLES_PENDING
})
const fetchProductSuccess = (data:IArticle[])=>({
    type:actionTypes.GET_ALL_ARTICLES_SUCCESS,
    payload:data
})
const fetchProductFailed = (err:string)=>({
    type:actionTypes.GET_ALL_ARTICLES_FAILED,
    errorMessage:err
})
