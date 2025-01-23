/* eslint-disable react/prop-types */
import Button from "../button";

const DepositPopup = ({ setOpen }) => {
  return (
    <div className="bg-[#121318] rounded-[10px] border border-[#00ffff] px-8 py-6 flex flex-col gap-5 relative items-center">
      <div>
        <div className="text-[#00ffff] text-[32px] font-bold text-center">
          Deposit
        </div>
        <div className="w-[437px] text-center text-white text-base leading-normal">
          100xBet Balance: $3,405.12
        </div>
      </div>
      <button className="flex px-[14px] py-3 bg-[#2b2d3a] rounded-md cursor-pointer justify-between w-full">
        <span className="flex gap-3">
          <img src="direct.svg" alt="direct" />
          Direct Deposit
        </span>
        <img src="arrow1.svg" />
      </button>
      <div className="w-full">
        <h3 className="text-white/50 text-xs font-semibold pb-[3px]">TOKEN</h3>
        <button className="flex px-[14px] py-3 bg-[#2b2d3a] rounded-md cursor-pointer justify-between w-full">
          <span className="flex gap-3">
            <img src="usdc.svg" alt="usdc" />
            USDC
          </span>
          <img src="arrow1.svg" />
        </button>
      </div>
      <div className="w-full">
        <h3 className="text-white/50 text-xs font-semibold pb-[3px]">CHAIN</h3>
        <button className="flex px-[14px] py-3 bg-[#2b2d3a] rounded-md cursor-pointer justify-between w-full">
          <span className="flex gap-3">
            <img src="polygon.svg" alt="usdc" />
            Polygon
          </span>
          <img src="arrow1.svg" />
        </button>
      </div>
      <div className="w-full">
        <h3 className="text-white/50 text-xs font-semibold pb-[3px]">
          YOUR DEPOSIT ADDRESS
        </h3>
        <button className="flex px-[5px] pl-[14px] py-[5px] bg-[#2b2d3a] rounded-md cursor-pointer items-center justify-between w-full">
          <span>0xC6f74e5760a781476148AAfF57BB7b5a0640</span>
          <Button
            leftImg="copy1.svg"
            className="px-0 py-0 w-10 h-10 bg-gradient-to-r from-[#00ffff] to-[#00ffa3] flex items-center justify-center"
            onClick={() =>
              navigator.clipboard.writeText(
                "0xC6f74e5760a781476148AAfF57BB7b5a0640"
              )
            }
          />
        </button>
      </div>
      <img src="qr.png" className="h-[169px] w-[169px]" />
      <div className="w-[440px] text-center text-white/60 text-xs">
        <span className=" ">
          Send in greater than $10.00 of the accepted token to the address above
          and it will auto swap to USDC in your Polymarket wallet, minus{" "}
        </span>
        <span className="underline ">fees</span>.{" "}
        <span className="underline ">Terms & conditions</span> apply.
        Experiencing problems? <span className="underline ">Get help</span>.
      </div>
      <Button
        onClick={() => setOpen(false)}
        leftImg={"cross.svg"}
        className="absolute right-[15px] top-[15px] px-0 py-0"
      />
    </div>
  );
};

export default DepositPopup;
