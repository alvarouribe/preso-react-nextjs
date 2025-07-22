import { notFound } from 'next/navigation';

async function getProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    return null; // Product not found
  }
  return response.json();
}

type ProductPageProps = {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    // If product is not found based on the ID, trigger the 404 page
    notFound();
  }

  return (
    <div>
      <h1 className='text-2xl'>{product.title}</h1>
      <h2>$ {product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
}