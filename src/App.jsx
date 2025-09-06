import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Layout from './Layout' 
import Home from './pages/homepage/homepage'
import Login from './pages/login/login'
import Register from './pages/register/register'

function App() {

   const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login  />} />
        <Route path="/register" element={<Register  />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
        </Route>
      </>
    )
  );
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
