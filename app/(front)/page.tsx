import ProductItem from "@/components/products/ProductItem";
import data from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl py-2 my-8">MERCH</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          data.products.map(product => (
            <ProductItem key={product.slug} product={product} />
          ))
        }
      </div>
    </>
  )
}
