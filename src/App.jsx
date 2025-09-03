import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Layout from './Layout' 
import Home from './pages/homepage/homepage'

function App() {

   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
       
      </Route> 
    )
  );
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
