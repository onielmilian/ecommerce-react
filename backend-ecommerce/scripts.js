import fetch from "node-fetch";
import fs from "fs";

// Lee el archivo JSON
const jsonData = JSON.parse(
  fs.readFileSync("./strapi_products_realistic(1).json", "utf8")
);

// Extrae los productos como array
const products = Object.values(jsonData.data["api::product.product"]);

const API_URL = "http://localhost:3000/api/products";

async function createProduct(product) {
  // Elimina el campo id si existe, Strapi lo genera automáticamente
  delete product.id;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: product }),
  });

  const data = await response.json();
  console.log("Producto creado:", data);
}

async function main() {
  for (const product of products) {
    await createProduct(product);
  }
}

main();
