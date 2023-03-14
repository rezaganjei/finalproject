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
import PhoneRegistration from "./pages/phoneRegistrationPage";
import Cart from "./pages/cart";
import UserInfo from "./pages/userInfoPage";
import UserPanel from "./pages/userPanel";
import FinalizeOrder from "./pages/finalizeOrder";
import SuccessfullPayment from "./pages/succecfulpay";
import UnsuccessfullPayment from "./pages/unsuccessfullPage";

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
    path: "/products/:id",
    element: (
      <>
        <Header />
        <SingleProduct />
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
    path: "/phone",
    element: (
      <>
        <Header />
        <PhoneRegistration />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/userinfo",
    element: (
      <>
        <Header />
        <UserInfo />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/userpanel",
    element: (
      <>
        <Header />
        <UserPanel />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/finalizeorder",
    element: (
      <>
        <Header />
        <FinalizeOrder />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/paymentsuccess",
    element: (
      <>
        <Header />
        <SuccessfullPayment />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/paymentunsuccess",
    element: (
      <>
        <Header />
        <UnsuccessfullPayment />
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
