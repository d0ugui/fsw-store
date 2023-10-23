import { ProductList } from "@/components/ui/product-list";
import { SectionTitle } from "@/components/ui/section-title";
import { prismaClient } from "@/lib/prisma";
import { Categories } from "./components/categories";
import { PromoBanner } from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8 md:py-0 md:pb-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês!"
        className="px-5 md:hidden"
      />

      <PromoBanner
        src="/banner-desktop-home-01.png"
        alt="Até 55% de desconto só esse mês!"
        className="hidden md:flex"
      />

      <div className="px-5 md:m-auto md:w-full md:max-w-[1440px] xl:px-[6.25rem]">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de descontos em mouses!"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 20% de descontos em fones!"
      />

      <div className="mt-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
