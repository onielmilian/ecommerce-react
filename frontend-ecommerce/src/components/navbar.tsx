"use client";
import {
  BaggageClaim,
  Heart,
  HeartPulse,
  ShoppingCart,
  Smartphone,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ToggleTheme from "./toggle-theme";
import { useCart } from "../../hooks/use-cart";
import { useLovedProducts } from "../../hooks/use_loved_products";

const Navbar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(""); //shopping, loved, profile, home
  const cart = useCart();
  const loved = useLovedProducts();

  return (
    <div className=" sticky top-0 z-50 bg-background shadow-sm">
      <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
        <h1
          className={`text-3xl transition-transform duration-300 ease-in-out transform hover:scale-105`}
          onClick={() => {
            router.push("/home");
            setSelected("home");
          }}
        >
          Tecno
          <span className="font-bold">Mobile</span>
        </h1>
        <div className="items-center justify-between hidden sm:flex cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115">
          <div
            onClick={() => {
              router.push("/products");
              setSelected("products");
            }}
            className="flex items-center justify-center"
          >
            <p>Productos</p>
            <Smartphone
              strokeWidth={selected === "products" ? "2" : "1.5"}
              className={`
                ${selected === "products" ? "fill-primary" : ""}`}
              onClick={() => {
                router.push("/products");
                setSelected("products");
              }}
            />
          </div>
        </div>
        <div className="flex sm:hidden">
          <Smartphone
            strokeWidth={selected === "products" ? "2" : "1.5"}
            className={`cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115
              ${selected === "products" ? "fill-primary" : ""}`}
            onClick={() => {
              router.push("/products");
              setSelected("products");
            }}
          />
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-7">
          {cart.items.length === 0 ? (
            <ShoppingCart
              strokeWidth={selected === "shopping" ? "2" : "1.5"}
              className={`cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115
            ${selected === "shopping" ? "fill-primary" : ""}`}
              onClick={() => {
                router.push("/cart");
                setSelected("shopping");
              }}
            />
          ) : (
            <div
              className="flex gap-1 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115 group"
              onClick={() => router.push("/cart")}
            >
              <BaggageClaim
                strokeWidth={selected === "shopping" ? "2" : "1.5"}
                className={`${selected === "shopping" ? "fill-primary" : ""}`}
                onClick={() => {
                  router.push("/cart");
                  setSelected("shopping");
                }}
              />
              <span>{cart.items.length}</span>
            </div>
          )}
          {loved.lovedItems.length === 0 ? (
            <Heart
              strokeWidth={selected === "loved" ? "2" : "1.5"}
              className={`cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115
              ${selected === "loved" ? "fill-primary" : ""}`}
              onClick={() => {
                router.push("/loved-products");
                setSelected("loved");
              }}
            />
          ) : (
            <div
              className="flex gap-1 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115 group"
              onClick={() => router.push("/loved-products")}
            >
              <HeartPulse
                strokeWidth={selected === "loved" ? "2" : "1.5"}
                className={`${selected === "loved" ? "fill-primary" : ""}`}
                onClick={() => {
                  router.push("/loved-products");
                  setSelected("loved");
                }}
              />
              <span>{loved.lovedItems.length}</span>
            </div>
          )}
          <User
            strokeWidth={selected === "profile" ? "2" : "1.5"}
            className={`cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115
            ${selected === "profile" ? "fill-primary" : ""}`}
            onClick={() => {
              router.push("/profile");
              setSelected("profile");
            }}
          />

          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
