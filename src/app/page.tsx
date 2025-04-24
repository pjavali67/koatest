"use client";
import dynamic from "next/dynamic";

const PdfOther = dynamic(() => import("./PdfOther"), {
  ssr: false,
});

export default function Home() {
  // return
  return (
    <>
      <PdfOther src="/one.pdf" />
      {/* <PdfViewer />;<h1>hello</h1>
      <p>world</p> */}
    </>
  );
}
