import farming from "../../assets/images/farming.png";
export default function Farming() {
  return (
    <div id="farming">
      <div className="bg-[#1A232D] p-4 md:p-10 rounded-2xl md:flex mt-20 items-center">
        {/* left side  */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl text-center md:text-left">
            LIQUIDITY YIELD FARMING
          </h1>
          <p className="my-4 text-md md:text-xl text-center md:text-left">
            Join the revolution and take control of your financial future with
            Bubble's $BUB token.
          </p>
          <p className="text-sm text-center md:text-left">
            With delegated community governance and stake-based earnings, you
            can now vote on proposals and earn passive income from the
            protocol's generated revenue. Empower yourself and become a part of
            the decentralized financial movement with Bubble.
          </p>
          <button className="bg-red-500 py-3 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white  hover:to-pink-500 transition border-none mt-4 w-full md:w-fit">
            Start Earning Yield
          </button>
        </div>
        {/* right side  */}
        <div className="flex-1 mt-24 md:mt-0">
          <img src={farming} alt="" />
        </div>
      </div>
      {/* below part  */}
      <div className=" md:flex text-black mt-4 gap-1">
        {/* left side  */}
        <div className="bg-white flex flex-col p-10 md:rounded-2xl mb-1 ">
          <h1 className="text-3xl">SYNTHETIC YIELD FARMING</h1>
          <p className="text-lg my-4">
            The BubbleSwap protocol enables users to maximize their profits by
            staking their liquidity provider (LP) tokens and earning synthetic
            yield rewards.
          </p>
          <p className="text-sm">
            These rewards are determined by a liquidity provider tax, but are
            significantly increased when users lock their tokens for a specific
            duration. With this innovative form of yield farming, users can
            amplify their earnings while investing a smaller portion of their
            capital.
          </p>
        </div>

        {/* right side  */}
        <div className="bg-white flex flex-col p-10 md:rounded-2xl ">
          <h1 className="text-3xl">BUBBLE PROTOCOL FARMING</h1>
          <p className="text-lg my-4">
            Join the innovative BubbleDeFi protocol and start earning real yield
            with your Bubble tokens
          </p>
          <p className="text-sm">
            Experience the unique 1:1 ratio of LP rewards and enjoy a
            sustainable form of APY that's based on actual revenue generated by
            the protocol. Say goodbye to fixed APY and the inflation it creates,
            and embrace the future of decentralized finance with Bubble.
          </p>
        </div>
      </div>
    </div>
  );
}
