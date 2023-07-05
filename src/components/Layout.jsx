// Layout.js
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchConfiguration } from '../redux/slices/configurationSlice';

const Layout = () => {
    const dispatch = useDispatch()
    const config = useSelector(state=>state.configuration?.configuration)

    console.log(config)

    useEffect(()=>{
        dispatch(fetchConfiguration())  
    }, [dispatch])

  return (
    <>
    {config && <div className='bg-gray-100'>
      <Navbar />
      <div className='container mx-auto p-3'>
        <Outlet />
      </div>
    </div>
}
    
    </>
    
  );
};

export default Layout;
