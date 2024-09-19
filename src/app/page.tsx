import Image from "next/image";
import Navbar from "./ui/navbar";
import { DeliveryButton, PickupButton } from "./ui/action-buttons";
import Footer from "./ui/footer";
import Products from "./ui/products";
import MainPage from "./ui/home/main-page";

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}
