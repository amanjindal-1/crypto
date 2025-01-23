/* eslint-disable react/prop-types */
const PercentBar = ({ chance, title }) => {
  return (
    <div className="flex items-end gap-4 w-full">
      <div className="w-[90%]">
        {title && <div className="text-sm pb-1">{title}</div>}
        <div className=" h-1 bg-[#D9D9D9] rounded-3xl relative">
          <div
            className="h-1 bg-[#03A66D] rounded-3xl"
            style={{
              width: `${chance}%`,
              background: chance < 31 ? "#F00" : chance < 51 ? "#FAB915" : "",
            }}
          />
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-base">{chance}%</div>
        <div className="text-[9px] font-medium">Chance</div>
      </div>
    </div>
  );
};

export default PercentBar;
