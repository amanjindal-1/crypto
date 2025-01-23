import Portfolio from "./portfolio";
import PnL from "./p&l";
import Transaction from "./transaction";

const Walletpage = () => {
  return (
    <div className="p-14 m-auto flex justify-center w-full">
      <div className="max-w-[1000px] flex items-center justify-center flex-col gap-8">
        <div className="flex gap-8">
          <Portfolio />
          <PnL />
        </div>
        <Transaction />
      </div>
    </div>
  );
};

export default Walletpage;
