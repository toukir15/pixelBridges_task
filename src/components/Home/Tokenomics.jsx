import tokenomicsImg1 from "../../assets/images/Tokenomics.png";
import tokenomicsImg2 from "../../assets/images/tokenmicsmobile.png";
export default function Tokenomics() {
  return (
    <div id="tokenmics" className="relative">
      <p className="absolute z-10 top-20 text-3xl ml-4 md:ml-0">Tokenomics</p>
      <img className="mt-8 hidden md:block" src={tokenomicsImg1} alt="" />
      <img className="mt-8 block md:hidden" src={tokenomicsImg2} alt="" />
    </div>
  );
}
