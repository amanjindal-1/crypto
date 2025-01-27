import { useState } from "react";
import Button from "../button";
import History from "./history";

const Transaction = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="border border-[#0FF] rounded-lg p-[19px] bg-[#1B1B23] flex-1 w-full">
      <div className="flex w-full gap-0 md:gap-[30px] border-b border-white/30 flex-col md:flex-row">
        <Button
          text="Positions"
          className="text-2xl font-semibold px-[0px]"
          onClick={() => setSelected(1)}
          style={{
            color: selected == 1 ? "#00FFFF" : "",
            borderBottom: selected == 1 ? "2px solid #00FFFF" : "",
            borderRadius: 0,
          }}
        />
        <Button
          text="Open Orders"
          className="text-2xl font-semibold px-[0px]"
          onClick={() => setSelected(2)}
          style={{
            color: selected == 2 ? "#00FFFF" : "",
            borderBottom: selected == 2 ? "2px solid #00FFFF" : "",
            borderRadius: 0,
          }}
        />
        <Button
          text="History"
          className="text-2xl font-semibold px-[0px]"
          onClick={() => setSelected(3)}
          style={{
            color: selected == 3 ? "#00FFFF" : "",
            borderBottom: selected == 3 ? "2px solid #00FFFF" : "",
            borderRadius: 0,
          }}
        />
      </div>
      {selected == 1 ? (
        <div>Positions</div>
      ) : selected == 2 ? (
        <div>Open orders</div>
      ) : (
        <History />
      )}
    </div>
  );
};

export default Transaction;
