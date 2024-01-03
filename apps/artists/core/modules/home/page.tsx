import NavBar from "./navbar";
import ProductCard from "./product-card";

function HomePage(): JSX.Element {
  return (
    <>
      <NavBar />
      <main
        className="relative pt-[80px] h-full"
      >
        <div className="h-full flex gap-4 flex-wrap content-center justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* <ProductCard /> */}
          {/* <ProductCard /> */}

          {/* <ProductCard /> */}
          {/* <ProductCard /> */}
        </div>
      </main>
    </>
  );
}

export default HomePage;
