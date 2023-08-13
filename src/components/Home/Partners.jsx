import pinkSaleImg from "../../assets/images/pinksale.png";
import dexViewImg from "../../assets/images/dexview.png";
import gotBitImg from "../../assets/images/gotbit.png";
import catPultImg from "../../assets/images/catapult.svg";
export default function Partners() {
  return (
    <div id="partners">
      <h1 className="text-4xl mb-10 text-[#C3C9DA] text-center uppercase mt-16 md:mt-0">
        Our Partners
      </h1>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:items-center md:justify-center gap-4 ">
        <div className="bg-[#192128] h-24 flex justify-center items-center rounded-xl mt-8 md:mt-0 mx-2 md:mx-0">
          <img className="w-52" src={pinkSaleImg} alt="" />
        </div>
        <div className="bg-[#192128] h-24 flex justify-center items-center rounded-xl mt-8 md:mt-0 mx-2 md:mx-0">
          <img className="w-52" src={dexViewImg} alt="" />
        </div>
        <div className="bg-[#192128] h-24 flex justify-center items-center rounded-xl mt-8 md:mt-0 mx-2 md:mx-0">
          <img src={gotBitImg} alt="" />
        </div>
        <div className="bg-[#192128] h-24 flex justify-center items-center rounded-xl mt-8 md:mt-0 mx-2 md:mx-0">
          <img src={catPultImg} alt="" />
        </div>
      </div>
    </div>
  );
}
