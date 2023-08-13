import { BsDiscord, BsMedium, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GiBubbles } from "react-icons/gi";
import logo from "../../assets/images/bubbleLogo.png";
import { BsArrowUpCircle } from "react-icons/bs";

export default function Footer() {
  return (
    <div id="footer">
      <div className="hidden md:flex justify-between mt-12 bg-[#192027] px-8 py-8 rounded-2xl border border-[#2b3d4f]">
        <div>2023 — BubbleSwap</div>
        <div>
          <ul className="flex gap-10 text-sm">
            <li>Home</li>
            <li>BubbleSwap</li>
            <li>Farming</li>
            <li>Arbitrum</li>
            <li>Protocol</li>
            <li>Contract</li>
            <li>Tokenomics</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <BsDiscord className="cursor-pointer text-slate-600 hover:text-slate-50 text-xl" />
          <FaTelegramPlane className="cursor-pointer text-slate-600 hover:text-slate-50 text-xl" />
          <BsTwitter className="cursor-pointer text-slate-600 hover:text-slate-50 text-xl" />
          <BsMedium className="cursor-pointer text-slate-600 hover:text-slate-50 text-xl" />
          <GiBubbles className="cursor-pointer text-slate-600 hover:text-slate-50 text-xl" />
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center">
        <div className="p-2">
          <img className="w-20" src={logo} alt="" />
        </div>
        <div>
          <a href="#home">
            <BsArrowUpCircle className="text-4xl mt-4 mr-4 text-slate-500 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
