import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

const dummyProducts = [
  {
    id: 1,
    title: "Black Mini Dress",
    price: 349,
    block: "Block C",
    clean: "Hand Washed",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 2,
    title: "Ethnic Kurti",
    price: 249,
    block: "Block A",
    clean: "Steam Cleaned",
    image: "https://images.unsplash.com/photo-1618354691321-6c5a52b63f7a"
  },
  {
    id: 3,
    title: "Pink Party Dress",
    price: 299,
    block: "Block B",
    clean: "Steam Cleaned",
    image: "https://images.unsplash.com/photo-1593032465171-8c8f2d0a8f35"
  }
];

function ProductGrid() {
  return (
    <section className="product-section">
      <h2>Discover nearby closets ✨</h2>

      <div className="product-grid">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
