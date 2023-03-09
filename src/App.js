import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductCard from "./components/productCard";
import Slider from "./components/slider";
import Footer from "./layout/global/footer";
import Header from "./layout/global/header";
import AdminHeader from "./components/adminHeader";
import LoginPage from "./pages/login";
import ProductsList from "./pages/productsList";
import OrdersList from "./pages/ordersList";
import ErrorPage from "./pages/errorPage";
import HomePage from "./pages/homePage";
import CategoryPage from "./pages/categoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/bracelet",
    element: (
      <>
        <Header />
        <CategoryPage cat={"انگشتر"} />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/necklace",
    element: (
      <>
        <Header />
        <div>necklace page</div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/earings",
    element: (
      <>
        <Header />
        <div>earing page</div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/rings",
    element: (
      <>
        <Header />
        <div>ring page</div>
      </>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: (
      <>
        <Header />
        <LoginPage />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminHeader />,

    children: [
      {
        path: "/admin/productslist",
        element: <ProductsList />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/admin/orderslist",
        element: <OrdersList />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  ,
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Footer />
    </>
  );
}

export default App;
