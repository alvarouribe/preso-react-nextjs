import ProductLink from '@/components/ProductLink';
import { getRandomProducts } from '@/lib/api';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  images: string[];
  net_price: number;
  taxes: number;
  price: number;
  categories: string[];
  tags: string[];
};

export const revalidate = 3600; // seconds (1 hour) — page is static & revalidated

export default async function Products() {
  const products = await getRandomProducts(5);
  console.log('Products:', products); // Log the products for debugging
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Random Products</h2>
      <p className="mt-2 mb-4">
        The following API returns random products everytime
      </p>
      <ul>
        {products.data.map((product: Product) => (
          <li key={product.id}>
            <ProductLink
              id={product.id}
              title={`${product.name} $ ${product.price}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
