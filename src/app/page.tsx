"use client"
import Banner from "@/components/Banner";
import Container from "@/components/Container";

export default function Home() {
  return (
    // <></>
    <Container comps={
      (
        <>
        <Banner comp={(<>
        <strong><span className="underlined">Predicted</span> Underwriting Class: Preferred</strong>
        </>)} />
        
        {/* <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div> */}
        </>
      )
    } />
  );
}
