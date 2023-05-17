import React from 'react';

// import { Dispatch } from "redux";
// import { useSelector, shallowEqual, useDispatch } from "react-redux";
// import {getAllArticlesAction} from "../../store/actions/articleActions";
interface pageProps{
    
}
const ContactUs :React.FC<pageProps> = ():JSX.Element=>{
  const x = window.location.search.replace("?","");

//        const articles: ArticleStateType = useSelector(
//       (state: any) => state.article, shallowEqual)

//   const dispatch: Dispatch<any> = useDispatch();

//   const saveArticle = React.useCallback(
//     (article: ArticleType) => dispatch(AddArticleAction(article)),
//     [dispatch]
//   )

    return (
              <div>
                contact us
        {/* {articles.loading?<div>loading ....</div>:null}
        {articles.error?<div>{articles.error}</div>:null}
        <h1>My Articles</h1>
          <AddArticle
           saveArticle={saveArticle}
            />
          {(articles.articles&&articles.articles.length)?articles.articles.map((article: ArticleType) => (
            <Article
              key={article.id}
              article={article}
              removeArticleAction={RemoveArticleAction}
            />
          )):null}
          <div onClick={()=>dispatch(getAllArticlesAction(1))}>sdfsdfsdfsd</div> */}
      </div>
    )
}


export default ContactUs;