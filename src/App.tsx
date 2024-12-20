import "./App.css";
import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
  // Render
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <div className="container">
      <div className="border-2 border-red-500 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
    </div>
  );
};

export default App;
