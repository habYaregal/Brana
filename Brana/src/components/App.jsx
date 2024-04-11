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
