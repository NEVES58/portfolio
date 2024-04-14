import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./componentes/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>
      <Button>putaa</Button>
    </main>
  );
}
