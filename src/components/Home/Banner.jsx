import logo from "../../assets/images/bubbleLogo.png";
import collectWallet from "../../assets/images/collectwallat.png";
import header_gradient from "../../assets/images/header_grdient.png";
import hero_bg from "../../assets/images/hero-bg.png";
import header from "../../assets/images/header.png";
import bubble1 from "../../assets/images/drop.3fea1a245d051d03eed8.png";
import bubble2 from "../../assets/images/drop1.62681e765f4af08909e0.png";
import collectWalletMobile from "../../assets/images/collectwalletmobile.png";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

import Container from "../Container";
import { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
export default function Banner() {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <header id="home" className="h-[100vh]  overflow-hidden">
      {/* navbar  */}
      <nav className="flex justify-between items-center px-4 z-50 relative">
        {/* logo */}
        <div className="flex items-center">
          <AiOutlineMenuUnfold
            onClick={() => setIsTrue(!isTrue)}
            className="text-2xl block md:hidden mr-4"
          />
          <img className="h-10 md:h-16 " src={logo} alt="" />
        </div>
        <div
          className={`${
            isTrue
              ? "fixed md:static top-0 left-0 px-4 text-lg bg-[#0D141B] min-h-[100vh] w-screen"
              : "fixed md:static -top-[50rem]"
          } gap-5 md:text-sm`}
        >
          {/*nav routes  */}
          <ul className={`flex flex-col md:flex-row gap-3 md:gap-5`}>
            <li className="  md:hidden  py-2 mt-2 flex items-center">
              <AiOutlineClose
                onClick={() => setIsTrue(!isTrue)}
                className="text-2xl"
              />
              <img className="h-10 md:h-16 ml-4 " src={logo} alt="" />
            </li>
            <li className="hover:bg-[#313841] px-3 py-2 rounded-lg cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:bg-[#313841] px-3 py-2 rounded-lg cursor-pointer">
              <a href="#bubbleSwap">BubbleSwap</a>
            </li>
            <li className="hover:bg-[#313841] px-3 py-2 rounded-lg cursor-pointer">
              <a href="#farming">Farming</a>
            </li>
            <li className="hover:bg-[#313841] px-3 py-2 rounded-lg cursor-pointer">
              <a href="#arbitrum">Arbitrum</a>
            </li>
            <li className="hover:bg-[#313841] px-3 py-2 rounded-lg cursor-pointer">
              <a href="#farming">Protocol</a>
            </li>
            <li className="hover:bg-[#313841] px-3 py-2 rounded-lg cursor-pointer">
              <a href="#contract">Contract</a>
            </li>
            <li className="hover:bg-[#313841] px-3 py-2 rounded-lg cursor-pointer">
              <a href="#tokenmics">Tokenomics</a>
            </li>
            <li className="hover:bg-[#313841] px-3 py-2 rounded-lg cursor-pointer">
              <a href="#partners">Partners</a>
            </li>
            <button className="bg-[#4a4a7877] hover:bg-[#5f5fa977] px-4 py-2 rounded-lg uppercase md:hidden">
              Launch Testnet
            </button>
          </ul>
        </div>
        {/* nav button  */}
        <div>
          <button className="bg-[#4a4a7877] hover:bg-[#5f5fa977] px-4 py-2 rounded-lg uppercase hidden md:block">
            Launch Testnet
          </button>
        </div>
      </nav>

      {/* banner  */}
      <div className="relative z-20">
        <Container>
          <div className="md:flex items-center ">
            {/* banner left  */}
            <div>
              <h1 className="text-3xl md:text-5xl  text-center md:text-left mt-6 md:mt-0 space-y-8 ">
                <span className="md:ml-8 ">UNLEASH THE POWER </span>
                <span className=" mt-3">OF LIQUID TRADING</span>
              </h1>
              <h4 className="md:ml-14 mt-3 mb-10 text-2xl  tracking-wider text-[#C3C9DA] text-center md:text-left">
                with Bubble DeFi!
              </h4>

              <img
                className="block md:hidden"
                src={collectWalletMobile}
                alt=""
              />

              {/* banner text  */}
              <div className="hidden md:block">
                <p className=" md:ml-14 text-center md:text-left px-4 md:px-0 text-lg z-50 ">
                  Get ready to experience the future of decentralized trading
                  with Bubble DeFi.
                </p>
                <p className="md:ml-14 text-center md:text-left px-4 md:px-0 mt-4 text-sm text-[#C3C9DA] z-50">
                  Our revolutionary Liquid DEX Trading platform offers deeper
                  liquidity, smarter trades, and higher rewards. Say goodbye to
                  suboptimal trades and hello to efficient, secure, and
                  profitable market activity.
                </p>
              </div>
            </div>
            {/* banner right  */}
            <div className="hidden md:block mt-20 z-20">
              <img className="w-[80rem]" src={collectWallet} alt="" />
            </div>
          </div>
        </Container>
      </div>

      {/* nav right bg  */}
      <img
        className="absolute -top-10 right-0 z-10"
        src={header_gradient}
        alt=""
      />

      {/* banner right bg */}
      <img
        className="w-[45rem] absolute top-0 right-0 z-10 hidden md:block"
        src={header}
        alt=""
      />

      {/* hero bg  */}
      <img className="absolute w-[120%]  top-0" src={hero_bg} alt="" />

      {/* bubble1 */}
      <img
        className="hidden md:block absolute top-[25%] left-[20%]"
        src={bubble1}
        alt=""
      />

      {/* bubble2 */}
      <img
        className="hidden md:block absolute top-[25%] left-[15%]"
        src={bubble2}
        alt=""
      />

      {/* down button  */}
      <a
        className="absolute bottom-[14%] left-[50%] -translate-x-1/2 text-slate-500 cursor-pointer z-40"
        href="#token"
      >
        <BsArrowDownCircle className=" text-3xl " />
      </a>
    </header>
  );
}
