import ProductList from "@/components/shared/product/product-list";
import { getLatestProduct } from "@/lib/product/product.actions";


const HomePage = async() => {
  const latestProducts = await getLatestProduct();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
