"use client";

import { CartContext } from "@/providers/cart";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
  User2,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { Card } from "./card";
import Cart from "./cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Separator } from "./separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

const Header = () => {
  const { status, data } = useSession();
  const { products } = useContext(CartContext);

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  const isAuthenticated = status === "authenticated";

  return (
    <Card className="flex flex-1 items-center justify-between p-[1.875rem] md:m-auto md:w-full md:max-w-[90rem] md:border-none md:py-10 xl:px-[6.25rem]">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            {isAuthenticated && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium ">{data.user.name}</p>
                    <p className="text-sm opacity-75">Boas compras!</p>
                  </div>
                </div>

                <Separator />
              </div>
            )}

            <div className="mt-4 flex flex-col gap-2">
              {!isAuthenticated && (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} /> Fazer Login
                </Button>
              )}

              {isAuthenticated && (
                <Button
                  onClick={handleLogoutClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogOutIcon size={16} /> Fazer Logout
                </Button>
              )}

              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} /> Início
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/orders">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PackageSearchIcon size={16} /> Meus pedidos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/deals">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PercentIcon size={16} /> Ofertas
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} /> Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>
      </Link>

      <ul className="hidden md:flex md:h-7 md:items-center md:space-x-7 md:text-sm">
        <Link href="/">
          <li className="text-base font-bold">Início</li>
        </Link>
        <Separator orientation="vertical" className="w-[2px]" />
        <Link href="/catalog">
          <li className="text-base font-bold">Catálogo</li>
        </Link>
        <Separator orientation="vertical" className="w-[2px]" />
        <Link href="/deals">
          <li className="text-base font-bold">Ofertas</li>
        </Link>
      </ul>

      <div className="flex items-center gap-7">
        <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button size="icon" variant="outline">
                <User2 />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {isAuthenticated && data?.user && (
                <>
                  <DropdownMenuLabel>
                    <div className="flex items-center gap-2 py-2">
                      <Avatar>
                        <AvatarFallback>
                          {data.user.name?.[0].toUpperCase()}
                        </AvatarFallback>

                        {data.user.image && (
                          <AvatarImage src={data.user.image} />
                        )}
                      </Avatar>

                      <div className="flex flex-col">
                        <p className="font-medium ">{data.user.name}</p>
                        <p className="text-sm opacity-75">Boas compras!</p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Meus pedidos</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogoutClick}>
                    Sair
                  </DropdownMenuItem>
                </>
              )}

              {!isAuthenticated && (
                <DropdownMenuItem onClick={handleLoginClick}>
                  Fazer login
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="relative">
          <Sheet>
            <SheetTrigger asChild>
              <div>
                <Button size="icon" variant="outline">
                  <ShoppingCartIcon />
                </Button>

                {products.length > 0 && (
                  <div className="absolute bottom-[2px] right-[2px] flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-full bg-white">
                    <p className="text-center text-xs font-semibold text-black">
                      {products.length}
                    </p>
                  </div>
                )}
              </div>
            </SheetTrigger>

            <SheetContent className="w-[350px]">
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </Card>
  );
};

export default Header;
