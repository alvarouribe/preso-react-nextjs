export async function getRandomProducts(quantity = 2) {
  const response = await fetch(
    `https://fakerapi.it/api/v1/products?_quantity=${quantity}`
  );
  console.log('getRandomProducts response', response);

  if (!response.ok) {
    return null; // Product not found
  }
  return response.json();
}
