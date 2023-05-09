import React from 'react';
import "./public/styles/App.css";
import {RouterProvider } from "react-router-dom";
import { Routes } from './routes/routes';
import { QueryClientProvider } from 'react-query';
import { reactQueryClient } from './constant';



const App : React.FC = ()=> {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <RouterProvider router={Routes} />
    </QueryClientProvider>
      
  );
}

export default App;
