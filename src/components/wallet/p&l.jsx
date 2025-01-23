import { useState } from "react";
import Button from "../button";

const PnL = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="border border-[#0FF] rounded-lg p-[19px] bg-[#1B1B23] flex-1 w-[480px]">
      <div className="flex gap-14 mb-[59px] justify-between">
        <div>
          <div className="text-[#00ffff] text-2xl font-bold">Profit/Loss</div>
          <div className="text-2xl font-bold">$ 3,405.12</div>
          <div className="flex gap-1 items-center">
            <img src="clock.svg" alt="time" />{" "}
            <span className="text-xs font-semibold leading-tight">
              Past Week
            </span>
          </div>
        </div>
        <div className="flex self-start">
          <Button
            text="1D"
            className="text-lg font-bold py-[6px] px-[12px]"
            style={{ background: selected == "D" ? "black" : "" }}
            onClick={() => setSelected("D")}
          />
          <Button
            text="1W"
            className="text-lg font-bold py-[6px] px-[12px]"
            style={{ background: selected == "W" ? "black" : "" }}
            onClick={() => setSelected("W")}
          />
          <Button
            text="1M"
            className="text-lg font-bold py-[6px] px-[12px]"
            style={{ background: selected == "M" ? "black" : "" }}
            onClick={() => setSelected("M")}
          />
          <Button
            text="All"
            className="text-lg font-bold py-[6px] px-[12px]"
            style={{ background: selected == "A" ? "black" : "" }}
            onClick={() => setSelected("A")}
          />
        </div>
      </div>
    </div>
  );
};

export default PnL;
