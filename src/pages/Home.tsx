import React, { useCallback } from 'react';
import { CheckBox } from '../components';
import { useQuery, useQueryClient,useMutation, } from 'react-query';
import axios from 'axios';
import { useSelector ,useDispatch} from 'react-redux';
import { Dispatch } from 'react';
import { getAllArticlesAction } from '../redux/actions/articleActions';
import { RootStates } from '../redux/reducers';
import { useAppDispatch } from '../redux/hooks';


interface pageProps{
    
}

const Home :React.FC<pageProps>  = ():JSX.Element=>{
  const [x , setX] = React.useState(12);
  const dataApi = async ({queryKey}:any)=>{
    // console.log("yellow", queryKey[0])
    const data =  await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data.data

  }
  const queryClient = useQueryClient();
  const {data,isLoading,error,refetch} = useQuery("posts",dataApi,{enabled:false});

  const xxx = ()=>{
    console.log("ee" , data?.data)
  }

  const useXx2 = ()=>{
    
    refetch();
    setX(Math.random())
    
  }
  React.useEffect(()=>{
    console.log("effect")
  },[data])

    const delPost = (id:number)=>{
      const posts:any = queryClient.getQueriesData("posts")[0][1];
      const postsFiltered = posts.filter((post:any)=>post.id !== id)
      queryClient.setQueriesData("posts", postsFiltered)
      
    }
    return (
        <>



      <p onClick={xxx}>sdsd</p><br />
      <p onClick={useXx2}>sdsd</p>
      {x}


        {/* <div>
            {loading?<p>loading data from server .....</p>:null}
            {articles?<ul>{articles.map((data,i)=><li key={i}>{data.body}</li>)}</ul>:null}
            {error?<p>ended with error error</p>:null}
        </div> */}

              <div className="App">
               
                {error?<div>Something went wrong ...</div>:null}
          
                {isLoading ? 
                  <div>Retrieving Luke Skywalker Information ...</div>
                 : 
                  
                  <ul style={{direction:"ltr"}}>
                      {data?data.map((data:any,index:number)=><li key={index}>
                        {data.id + "-----"}{data.title}
                        <button onClick={()=>delPost(data.id)}>del</button>
                      </li>):null}
                  </ul>
                }
              </div>
        </>
    )
}


export default Home;