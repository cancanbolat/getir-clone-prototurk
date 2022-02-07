import Title from "./ui/Title";
import Products from 'api/products.json'
import { useState, useEffect } from "react";
import ProductItem from "./ui/ProductItem";
import { api } from "api/api";

export default function Favorites() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    api().get('products/getall').then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div>
      <Title>Favorites</Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1 rounded-lg overflow-hidden">
        {products.length && products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
