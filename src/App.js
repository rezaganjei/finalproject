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
import SingleProduct from "./pages/singleProduct";

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
        <CategoryPage cat={"دستبند"} />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/necklace",
    element: (
      <>
        <Header />
        <div className="h-[50vh] text-center p-48">هیچ محصولی یافت نشد</div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/earings",
    element: (
      <>
        <Header />
        <CategoryPage cat={"گوشواره"} />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/rings",
    element: (
      <>
        <Header />
        <CategoryPage cat={"انگشتر"} />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: (
      <>
        <Header />
        <SingleProduct id={9} />
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
