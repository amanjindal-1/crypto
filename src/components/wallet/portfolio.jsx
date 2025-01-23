import { useState } from "react";
import Button from "../button";
import Popup from "../popup/popup";
import DepositPopup from "../wallet/deposit-popup";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="border border-[#0FF] rounded-lg p-[19px] bg-[#1B1B23] flex-1 min-w-max w-[480px]">
        <div className="flex gap-14 mb-[59px]">
          <div>
            <div className="text-[#00ffff] text-2xl font-bold">Portfolio</div>
            <div className="text-2xl font-bold">$ 32,455.12</div>
            <div className="flex gap-1 items-center">
              <img src="clock.svg" alt="time" />{" "}
              <span className="text-xs font-semibold leading-tight">
                Updated on 12/01/2025 at 10:30am
              </span>
            </div>
          </div>
          <div className="bg-black rounded-md pt-2 pr-3 pb-[10px] pl-[14px] self-start">
            <div className="flex gap-1 items-center justify-end mb-[2px]">
              <img src="wallet.svg" alt="wallet" />
              <span className="text-base font-medium leading-normal">
                Balance
              </span>
            </div>
            <div className="flex gap-1 justify-end items-center">
              <span className="text-lg font-bold">$ 2,500.00</span>
              <img src="refresh.svg" alt="refresh" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            text="Deposit"
            onClick={() => setOpen(true)}
            leftImg="download.svg"
            className="bg-gradient-to-r from-[#00ffff] to-[#00ffa3] text-black text-lg font-semibold flex-1 justify-center"
          />
          <Button
            text="Withdraw"
            onClick={() => alert("Withdraw")}
            leftImg="upload.svg"
            className="bg-[#17172a] rounded-md border border-white/20 text-lg font-semibold flex-1 justify-center"
          />
        </div>
      </div>
      <Popup
        isOpen={open}
        setIsOpen={setOpen}
        component={<DepositPopup setOpen={setOpen} />}
      />
    </>
  );
};

export default Portfolio;
