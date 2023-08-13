import arbitrumImg from "../../assets/images/Arbitrum.png";

export default function Arbitrum() {
  return (
    <div id="arbitrum" className="md:flex items-center gap-2 md:mt-10">
      {/* left side  */}
      <div className="flex-1">
        <img src={arbitrumImg} alt="" />
      </div>
      {/* right side  */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl  font-medium md:mt-24 text-center md:text-left px-8 md:px-0">
          UNLOCK A NEW FRONTIER WITH BUBBLE & ARBITRUM
        </h1>
        <p className="my-4 text-md md:text-xl text-center md:text-left mx-2 md:mx-0">
          Join the
          <span className="text-[#00D0AA]">cutting-edge DeFi movement</span> by
          bridging the gap between two thriving chains.
        </p>
        <p className="text-sm text-center md:text-left px-2 md:px-0 text-[#A6AAC1]">
          Integrating the Arbitrum bridge, Bubble users now have the opportunity
          to trade their tokens on both the Ethereum and Arbitrum chains,
          unlocking a whole new realm of possibilities and potential rewards.
          Take advantage of this game-changing integration and be a part of the
          next evolution in DeFi.
        </p>
      </div>
    </div>
  );
}
