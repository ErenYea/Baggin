import Image from "next/image";
import Header from "@/pages/Header";
import PageIntro from "@/pages/PageIntro";
import PageMiddle from "@/pages/PageMiddle";
export default function Home() {
  return (
    <div className="">
      {/* <Header></Header> */}
      <PageIntro></PageIntro>
      <PageMiddle></PageMiddle>
    </div>
  );
}
