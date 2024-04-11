import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './landing_page/Landing'
import Admin from './admin_page/Admin'
import Login from './sign_page/Login'
import Dashboard from './admin_page/Dashboard/Dashboard';
import Poster from './admin_page/About_Posts/Poster';
import Uuser from './admin_page/About_Users/Uuser';
import NewPost from './admin_page/Create_Post/NewPost';
import Home from './main_page/Home';
import Blog from './main_page/Front/Blog';
import Favour from './main_page/Favour';
import Near from './main_page/Near';
import Gener from './main_page/Gener/Gener';
import Content from './main_page/Content';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
    children: [
      {
        path: "/admin/",
        element: <Dashboard/>,
      },
      {
        path: "/admin/users",
        element: <Uuser/>,
      },
      {
        path: "/admin/posts",
        element: <Poster/>,
      },
      {
        path: "/admin/newpost",
        element: <NewPost/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/blog",
    element: <Home/>,
    children: [
      {
        path: "/blog/",
        element: <Blog/>,
      },
      {
        path: "/blog/favourite",
        element: <Favour/>,
      },
      {
        path: "/blog/recent",
        element: <Near/>,
      },
      {
        path: "/blog/gener",
        element: <Gener/>,
      },
      {
        path: "/blog/content",
        element: <Content/>,
      },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
