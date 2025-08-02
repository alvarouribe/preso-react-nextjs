import { notFound } from 'next/navigation';

async function getProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    return null; // Product not found
  }
  return response.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    // If product is not found based on the ID, trigger the 404 page
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl">{product.title}</h1>
      <h2>$ {product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
}
