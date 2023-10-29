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

      <div className="md:m-auto md:w-full md:max-w-[1440px] xl:px-[6.25rem]">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className="flex xl:m-auto xl:grid xl:w-full xl:max-w-[1440px] xl:grid-cols-2 xl:gap-[35px] xl:px-[6.25rem]">
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de descontos em mouses!"
        />

        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 20% de descontos em fones!"
          className="hidden xl:flex"
        />
      </div>

      <div className="md:m-auto md:w-full md:max-w-[1440px] xl:px-[6.25rem]">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 20% de descontos em fones!"
        className="xl:hidden"
      />

      <div className="xl:m-auto xl:w-full xl:max-w-[1440px] xl:px-[6.25rem]">
        <PromoBanner
          src="/banner-desktop-home-02.png"
          alt="Frete grátis para todo o Brasil!"
          className="hidden xl:flex"
        />
      </div>

      <div className="mt-8 md:m-auto md:w-full md:max-w-[1440px] xl:px-[6.25rem]">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
