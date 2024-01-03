import PageContent from "./page-content";
import Main from "./main";
import NavBar from "./navbar";
import ProductCard from "./product-card";

function HomePage(): JSX.Element {
  return (
    <Main>
      <NavBar />
      <PageContent>
        <div
          className="gap-4 p-4 bg-blue-100 
        flex flex-wrap overflow-auto 
        justify-center  w-full"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </PageContent>
    </Main>
  );
}

export default HomePage;
