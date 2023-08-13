import Container from "../Container";
import Arbitrum from "./Arbitrum";
import Banner from "./Banner";
import BubbleContract from "./BubbleContract";
import Contract from "./Contact";
import Contact from "./Contact";
import Farming from "./Farming";
import Footer from "./Footer";
import Partners from "./Partners";
import Token from "./Token";
import Tokenomics from "./Tokenomics";

export default function Home() {
  return (
    <div className="bg-[#0D141B] text-white h-full w-full max-w-[100vw] overflow-hidden">
      <Banner />
      <Token />
      <Container>
        <Farming />
        <Arbitrum />
        <BubbleContract />
        <Tokenomics />
        <Contract />
        <Partners />
        <Footer />
      </Container>
    </div>
  );
}
