import ProductCard from "./components/productCard";
import Footer from "./layout/global/footer";
import Header from "./layout/global/header";

function App() {
  return (
    <>
      <Header />
      <ProductCard />
      <div className="h-screen mb-48"></div>
      <Footer />
    </>
  );
}

export default App;
