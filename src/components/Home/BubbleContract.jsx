import contractLight from "../../assets/images/contrctlight.png";
import contractImg from "../../assets/images/contract.png";
export default function BubbleContract() {
  return (
    <div id="bubbleContract" className="relative">
      <div className="relative z-10">
        <div className="mt-4 text-sm hidden md:block">
          <p>Maximize Liquidity & Earn</p>
          <p>Passive Rewards with BubbleSwap</p>
        </div>

        {/* bubble contract img  */}
        <div className="mt-12 md:mt-0 mx-8 md:mx-auto">
          <img src={contractImg} alt="" />
        </div>
        {/* contract text  */}
        <div className="md:flex px-4 md:px-0">
          <div className="md:w-[40%]"></div>
          <div className="md:w-[60%]">
            <p className="text-sm text-center md:text-left mt-4">
              BubbleSwap is a revolutionary DeFi protocol that offers a unique
              liquidity tax of 5% — increasing your LP tokens' value with every
              trade. The LP tokens collected are burned forever, guaranteeing
              maximum liquidity and 100% safety. Join the new era of yield
              farming and earn passive rewards with BubbleSwap's liquidity
              crunch-proof technology.
            </p>
          </div>
        </div>

        {/* contract info  */}
        <div className="md:grid grid-cols-4 text-black mt-20 md:mt-0 mx-4 md:mx-0">
          <div className="bg-white md:rounded-3xl rounded-t-3xl flex flex-col justify-center px-16  h-44  mb-1">
            <h1 className="text-5xl text-pink-500 font-medium mb-2">5%</h1>
            <p>on all $BUB pairs</p>
          </div>
          <div className="bg-white md:mt-8 md:rounded-3xl flex flex-col justify-center px-16 h-44 mb-1 ">
            <h1 className="text-5xl text-pink-500 font-medium mb-2">All</h1>
            <p>LP tokens burned forever</p>
          </div>
          <div className="bg-white md:mt-16 md:rounded-3xl flex flex-col justify-center px-16 h-44 mb-1 ">
            <h1 className="text-5xl text-pink-500 font-medium mb-2">100%</h1>
            <p>LP tokens burned forever</p>
          </div>
          <div className="bg-white md:mt-24 md:rounded-3xl rounded-b-3xl flex flex-col justify-center px-16 h-44 mb-1 ">
            <h1 className="text-5xl text-pink-500 font-medium mb-2">5%</h1>
            <p>SAFU</p>
          </div>
        </div>
      </div>
      <div>
        <img className="absolute top-0" src={contractLight} alt="" />
      </div>
    </div>
  );
}
