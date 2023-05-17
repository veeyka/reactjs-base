"use strict"
import React, { useCallback, useRef } from 'react';
import { CheckBox } from '../components';
import { useQuery, useQueryClient,useMutation, } from 'react-query';
import axios from 'axios';
import { useSelector ,useDispatch} from 'react-redux';
import { Dispatch } from 'react';
import { getAllArticlesAction } from '../redux/actions/articleActions';
import { RootStates } from '../redux/reducers';
import { useAppDispatch } from '../redux/hooks';
import TextInput from '../components/unites/TextInput/TextInput';
import { time } from 'console';
import Button from './Button';
import { HttpClinet } from '../service';
import { HomeResponse } from '../types/models/home-posts';
import useGetHomeAlbums from '../api/use-get-home-albums';
import { ls } from '../tools';
import { Link } from 'react-router-dom';


const Home = ()=>{
  // const httpClient = new HttpClinet();
  // const handleHttp = async ()=>{
  //   const res = await httpClient.get<HomeResponse>("posts")
  //   // const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //   console.log(res);
  // }
  // handleHttp()
  // const {status, data, isLoading,refetch } = useGetHomeAlbums();
  // console.log(data,status)
  // console.log(isLoading,refetch)

  const doIt = ()=>{
    // refetch()
  }

  return (
      <>
        <div className='w-full h-96 mt-20 flex flex-col '>
            <button onClick={doIt}>sda</button>
            <br />
            <a href='/contactus'>contact us11</a><br />

            <br />

            <Link to="/contactus">sddsdsdsdsdsd</Link>
        </div>
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