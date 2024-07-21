import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./views/Banner";
import { Header } from "./views/Header";
import { DesignedFuture } from "./views/DesignedFuture";
import { ArtInfrastructure } from "./views/ArtInfrastructure";
import { FreeOpenSimple } from "./views/FreeOpenSimple";
import { Footer } from "./views/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <DesignedFuture />
      <ArtInfrastructure />
      <FreeOpenSimple />
      <Footer />
    </div>
  );
}
