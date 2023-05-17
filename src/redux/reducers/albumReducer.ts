import actionTypes from "../actions/actionTypes";


const initialState: TAlbumsState = {
  albums: [],
  error:"",
  loading:false,
}

const AlbumReducer = (state: TAlbumsState = initialState,action:TAlbumsAction): TAlbumsState => {
    console.log("albumreducer" + state , action)
    switch (action.type) {
      case actionTypes.GET_ALL_ALBUMS_PENDING:
        return {
          albums: [],
          error: "",
          loading: true,
        };

      case actionTypes.GET_ALL_ALBUMS_SUCCESS:
        return {
          albums: action.payload? action.payload: [],
          error: "",
          loading: false,
        };

      case actionTypes.GET_ALL_ALBUMS_FAILED:
        return {
          albums: [],
          error: action.error?action.error:"",
          loading: false,
        };

      default: return state;
    }
    
  }
  
  export default AlbumReducer;