import './App.css'
// import { Button } from '@mui/material/Button'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import { Provider } from 'react-redux'
import {store} from './store'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>
      </Route>
  )
)

 function App() {
   return <>
   <Provider store={store}>
     <RouterProvider router={router}/>;
    </Provider>
   </> 
}

export default App;
