"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface IProductInfo {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: IProductInfo) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductsToCart } = useContext(CartContext);

  const handleIncreaseQuantity = () => {
    setQuantity((prevState) => ++prevState);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevState) => (prevState === 1 ? prevState : prevState - 1));
  };

  const handleAddToCartClick = () => {
    addProductsToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5 xl:max-w-[472px] xl:rounded-lg xl:bg-accent xl:p-10">
      <h2 className="text-lg xl:text-2xl">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold xl:text-[28px]">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}%</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75 xl:text-base">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantity}
          className="xl:border-2 xl:border-[#2A2A2A] xl:bg-accent xl:hover:bg-black"
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantity}
          className="xl:border-2 xl:border-[#2A2A2A] xl:bg-accent xl:hover:bg-black"
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="xl:line-clamp-9 text-justify text-sm opacity-60">
          {product.description}
        </p>
      </div>

      <div className="mt-auto">
        <Button
          className="mt-8 w-full font-bold uppercase xl:text-base"
          onClick={handleAddToCartClick}
        >
          Adicionar ao carrinho
        </Button>

        <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2 xl:bg-[#2A2A2A]">
          <div className="flex items-center gap-2">
            <TruckIcon />

            <div className="flex flex-col">
              <p className="text-xs xl:text-sm">
                Entrega via <span className="font-bold">FSPacket®</span>
              </p>
              <p className="text-xs text-[#8162FF]">
                Envio para <span className="font-bold">todo Brasil</span>
              </p>
            </div>
          </div>

          <p className="text-xs font-bold">Frete grátis</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
