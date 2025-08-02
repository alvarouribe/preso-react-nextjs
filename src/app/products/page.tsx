import ProductLink from '@/components/ProductLink';

async function getProducts() {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  if (!response.ok) {
    return null; // Product not found
  }
  return response.json();
}

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export default async function Products() {
  const products = await getProducts();
  console.log('Products:', products); // Log the products for debugging
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Products</h2>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <ProductLink id={product.id} title={product.title} />
          </li>
        ))}
      </ul>
    </>
  );
}
