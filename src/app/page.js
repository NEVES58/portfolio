import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./componentes/Header";
import PageInicial from "./componentes/PageInicial";
import PageAbout from "./componentes/PageAbout";

export default function Home() {
  return (
    <main>
      <Header/>
      <PageInicial/>
      <PageAbout/>
    </main>
  );
}
