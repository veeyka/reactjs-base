"use strict"
import React, { useCallback, useRef } from 'react';

import Loading from '../components/unites/Loading/Loading';
import { HttpClinet } from '../service';
import { makeUuid } from '../util';



const Home = (props:any)=>{
  const {children} = props;

  console.log(makeUuid())


  return (
      <>
        
      </>
    )
  }

export default Home;

// const queryClient = useQueryClient();
// const {data,isLoading,error,refetch} = useQuery("posts",dataApi,{enabled:false});

// const dataApi = async ({queryKey}:any)=>{
//   const data =  await axios.get('https://jsonplaceholder.typicode.com/posts')
//   return data.data

// }

// const delPost = (id:number)=>{
//   const posts:any = queryClient.getQueriesData("posts")[0][1];
//   const postsFiltered = posts.filter((post:any)=>post.id !== id)
//   queryClient.setQueriesData("posts", postsFiltered)
  
// }