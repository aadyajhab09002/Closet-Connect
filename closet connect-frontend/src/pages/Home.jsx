import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import UnlockNotice from "../components/UnlockNotice";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Banner />

        <UnlockNotice />

        <ProductGrid />
      </main>
    </>
  );
}

export default Home;
