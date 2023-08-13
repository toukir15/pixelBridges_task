import bubbleImg from "../../assets/images/bubble.png";
import twiterImg from "../../assets/images/twitter.png";
import getbookImg from "../../assets/images/getbook.png";
import discardImg from "../../assets/images/discard.png";
import mediumImg from "../../assets/images/medium.png";
import telegramImg from "../../assets/images/telegram.png";
export default function Contract() {
  return (
    <div id="contract" className="relative mt-20 md:mt-20">
      <img src={bubbleImg} alt="" />

      <div className="h-24 md:h-52 rounded-full w-24 md:w-52 absolute bottom-[30%] md:bottom-[22%]">
        <div className="shadow-box bubble-hover-shadow h-[50px] md:h-[115px] w-[50px] md:w-[115px] cursor-pointer"></div>
        <a href="https://docs.bubbledefi.xyz/bubbledefi/">
          <img src={getbookImg} alt="" />
        </a>
      </div>

      <div className="h-24 md:h-52 rounded-full w-24 md:w-52 absolute top-[11%] right-[41%] ">
        <div className="shadow-box bubble-hover-shadow h-[50px] md:h-[115px] w-[50px] md:w-[115px] cursor-pointer"></div>
        <a href="https://medium.com/@Bubble_DeFi">
          <img src={discardImg} alt="" />
        </a>
      </div>

      <div className="h-24 md:h-52 rounded-full w-24 md:w-52 absolute top-[27%] right-[3%] ">
        <div className="shadow-box bubble-hover-shadow h-[50px] md:h-[115px] w-[50px] md:w-[115px] cursor-pointer"></div>
        <a href="https://medium.com/@Bubble_DeFi">
          <img src={mediumImg} alt="" />
        </a>
      </div>

      <div className="h-24 md:h-52 rounded-full w-24 md:w-52 absolute top-[44%] right-[51%] ">
        <div className="shadow-box bubble-hover-shadow h-[50px] md:h-[115px] w-[50px] md:w-[115px] cursor-pointer"></div>
        <a href="https://t.me/BubbleDefiPortal">
          <img src={telegramImg} alt="" />
        </a>
      </div>

      <div className="h-24 md:h-52 rounded-full w-24 md:w-52 absolute top-[44%] right-[30%]">
        <div className="shadow-box bubble-hover-shadow h-[50px] md:h-[115px] w-[50px] md:w-[115px] cursor-pointer"></div>
        <a href="https://twitter.com/Bubble_DeFi">
          <img src={twiterImg} alt="" />
        </a>
      </div>

      <button className="bg-red-500 py-3 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white  hover:to-pink-500 transition border-none md:absolute md:bottom-32 md:right-40 uppercase w-full md:w-fit  bubble-shadow">
        Pitch Deck
      </button>
    </div>
  );
}
