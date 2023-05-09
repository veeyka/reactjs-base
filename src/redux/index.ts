import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import reducers, { RootStates } from './reducers/index';


const store: Store<RootStates> & {dispatch: TArticleDispatch} = 
  createStore(reducers, applyMiddleware(thunk));


export default store;