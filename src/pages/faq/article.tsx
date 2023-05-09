import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  article: IArticle
  // removeArticleAction: (article: ArticleType) => void
}

export const Article: React.FC<Props> = ({ article,
  //  removeArticleAction
   }) => {
  const dispatch: Dispatch<any> = useDispatch()

  // const deleteArticle = React.useCallback(
  //   (article: ArticleType) => dispatch(removeArticleAction(article)),
  //   [dispatch, removeArticleAction]
  // )

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button
      //  onClick={() => deleteArticle(article)}
       >Delete</button>
    </div>
  )
}