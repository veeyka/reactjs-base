import actionTypes from "../actions/actionTypes";


const initialState: IArticleState = {
  articles: [],
  error:"",
  loading:false,
}

const ArticleReducer = (state: IArticleState = initialState,action:TArticleActions): IArticleState => {
    switch (action.type) {

      case actionTypes.GET_ALL_ARTICLES_PENDING:
        return {
          articles: [],
          error: "",
          loading: true,
        };

      case actionTypes.GET_ALL_ARTICLES_SUCCESS:
        return {
          articles: action.payload ?action.payload:[],
          error: "",
          loading: false,
        };

      case actionTypes.GET_ALL_ARTICLES_FAILED:
        return {
          articles: [],
          error: action.errorMessage?action.errorMessage:"",
          loading: false,
        };

      default: return state;
    }
    
  }
  
  export default ArticleReducer;