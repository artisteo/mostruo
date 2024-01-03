import PageContent from "./page-content";
import Main from "./main";
import NavBar from "./navbar";
import ProductCard from "./product-card";
import Container from "./container";

function HomePage(): JSX.Element {
  return (
    <Main>
      <NavBar />
      <PageContent>
        <div
          className="bg-blue-100 
        flex flex-wrap overflow-auto 
        justify-center  w-full"
        >
          <Container>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Container>
        </div>
      </PageContent>
    </Main>
  );
}

export default HomePage;
