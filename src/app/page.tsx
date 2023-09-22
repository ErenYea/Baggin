import Image from "next/image";
import Header from "@/pages/Header";
import PageIntro from "@/pages/PageIntro";
export default function Home() {
  return (
    <div className="h-screen">
      <Header></Header>
      <PageIntro></PageIntro>
    </div>
  );
}
