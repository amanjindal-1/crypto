/* eslint-disable react/prop-types */
import Button from "../button";
import PercentBar from "./percent-bar";

const Card = ({ data }) => {
  return (
    <div className="rounded-lg border-2 border-[#0FF] p-4 hover:border-[#0F9] cursor-default">
      <div>
        <div className="flex justify-between gap-24">
          <div className="flex gap-2">
            <img src="graph.svg" />{" "}
            <span className="min-w-max">${data.volume} Volumes</span>
          </div>
          <div>
            <div className="flex gap-6">
              <div className="relative flex">
                <img src="coin1.svg" />
                <img src="coin2.svg" className="absolute left-4" />
              </div>

              <button onClick={() => alert("Bookmark")}>
                <img src={data.bookmark ? "fill-star.svg" : "star.svg"} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 my-3.5 items-center">
          <img className="rounded-full overflow-hidden" src={data.img} />
          <h2 className="text-[#0FF] text-xl font-bold">{data.title}</h2>
        </div>

        {data.type == "option" ? (
          <div className="overflow-y-auto h-28 custom_scrollbar pr-2">
            {data.options.map((e, i) => (
              <div key={i} className="flex w-full gap-1.5 mb-3">
                <PercentBar chance={e.chance} title={e.option} />
                <div className="flex">
                  <Button
                    text="Yes"
                    leftImg="yes-thumb.svg"
                    className="bg-[rgba(3, 166, 109, 0.20)] text-[0.75rem] text-[#00FFA3] font-semibold border border-[#00FFA3] pl-3 pr-2 pt-1 pb-1 rounded-l-md rounded-r-none gap-[2px]"
                    imgStyle="w-[13px] h-[13px]"
                    onClick={() => alert("Yes")}
                  />
                  <Button
                    text="No"
                    rightImg="no-thumb.svg"
                    className="bg-[rgba(228, 71, 0, 0.20)] text-[0.75rem] text-[#F30] font-semibold border border-[#F30] pl-2 pr-3 pt-1 pb-1 rounded-r-md rounded-l-none gap-[2px]"
                    imgStyle="w-[13px] h-[13px]"
                    onClick={() => alert("No")}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <PercentBar chance={data.chance} />
            <div className="flex gap-1 justify-center">
              <Button
                text="Buy Yes"
                onClick={() => alert("Yes")}
                leftImg="yes-thumb.svg"
                style={{
                  background: "rgba(3, 166, 109, 0.30)",
                  color: "#00FFA3",
                }}
              />
              <Button
                text="Buy No"
                onClick={() => alert("No")}
                leftImg="no-thumb.svg"
                style={{
                  background: "rgba(255, 51, 0, 0.30)",
                  color: "#FF3300",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
