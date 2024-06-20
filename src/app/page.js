import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./componentes/Header";
import PageInicial from "./componentes/PageInicial";
import PageAbout from "./componentes/PageAbout";
import PageSkkils from "./componentes/PageSkills";

export default function Home() {
  return (
    <main>
      <Header/>
      <PageInicial/>
      <PageAbout/>
      <PageSkkils/>
    </main>
  );
}
