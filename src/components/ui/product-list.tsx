import { ProductItem } from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface IProductList {
  products: Product[];
}

export const ProductList = ({ products }: IProductList) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 md:gap-8 xl:px-0 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[170px] max-w-[170px] md:w-[180px] md:max-w-[180px]"
        >
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};
