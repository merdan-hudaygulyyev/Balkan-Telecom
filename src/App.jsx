import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from './pages/Login/Login'
import Layout from "./components/Layout/Layout";
import Layout_2 from "./components/Layout/Layout_2";
import Dashboard from "./pages/adminPages/Dashboard/Dashboard";
import Users from "./pages/adminPages/Users/Users";
import News from "./pages/adminPages/News/News";
import Setting from "./pages/adminPages/Setting/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Layout_2>
        <Dashboard/>
      </Layout_2>
    ),
  },
  {
    path: "/users",
    element: (
      <Layout_2>
        <Users/>
      </Layout_2>
    ),
  },
  {
    path: "/news",
    element: (
      <Layout_2>
        <News />
      </Layout_2>
    ),
  },
  {
    path: "/setting",
    element: (
      <Layout_2>
        <Setting/>
      </Layout_2>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
