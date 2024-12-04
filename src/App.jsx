import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
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
    path: "/register",
    element: (
        <Register />
    ),
  },
  {
    path: "/login",
    element: (
        <Login />
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout>
          <Home />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Layout_2>
          <Dashboard/>
        </Layout_2>
      </ProtectedRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <Layout_2>
          <Users/>
        </Layout_2>
      </ProtectedRoute>
    ),
  },
  {
    path: "/news",
    element: (
      <ProtectedRoute>
        <Layout_2>
          <News />
        </Layout_2>
      </ProtectedRoute>
    ),
  },
  {
    path: "/setting",
    element: (
      <ProtectedRoute>
        <Layout_2>
          <Setting/>
        </Layout_2>
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
