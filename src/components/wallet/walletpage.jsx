import Portfolio from "./portfolio";
import PnL from "./p&l";
import Transaction from "./transaction";

const Walletpage = () => {
  return (
    <div className="my-7 md:my-14 flex justify-center w-full">
      <div className="mx-[15px] md:mx-14 flex items-center justify-center gap-7 md:gap-10 flex-col w-full max-w-[1000px]">
        <div className="flex gap-7 md:gap-10 flex-col items-center lg:flex-row w-full">
          <Portfolio />
          <PnL />
        </div>
        <Transaction />
      </div>
    </div>
  );
};

export default Walletpage;
