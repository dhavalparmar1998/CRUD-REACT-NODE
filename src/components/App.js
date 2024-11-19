import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import { ToastContainer } from 'react-toastify';
export default function App() {
  return (
    <>
    <ToastContainer />
    <Menu/>
    <Outlet/>
    </>
  )
}
