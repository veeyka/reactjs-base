
interface IArticle {
  id: number
  userId:number
  title: string
  body: string
}
  
type IArticleState = {
  articles: IArticle[]
  error:string
  loading:boolean
}
  

type TArticleActions = {type: string, payload?: IArticle[], errorMessage?: string};
type TArticleDispatch = (args: TArticleActions) => TArticleActions;


  