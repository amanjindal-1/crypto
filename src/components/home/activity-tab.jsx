/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ActivityTab = ({list, division}) => {
  return (
    <div className="flex gap-4 flex-col">
      {list.map((e, i) => (
        <>
        <div key={i} className="text-sm text-[#898989] flex gap-3">
          <img src={e.img} alt="img" className="w-12 h-13 rounded-sm" />
          <div className="flex justify-between w-full items-center">
            <div className="">
              <div className="pb-1">{e.text1}</div>
              <div className=" flex items-center gap-3 font-medium">
                <img
                  src={e.userImg}
                  alt="img1"
                  className="w-6 h-6 rounded-full"
                />
                <span>
                  <span className="text-white">{e.user} bought</span>{" "}
                  {e.option ? (
                    <span className="text-green-600">Yes</span>
                  ) : (
                    <span className="text-red-600">No</span>
                  )}{" "}
                  at {e.rate} ({e.amount})
                </span>
              </div>
            </div>
            <div>{dayjs(new Date(parseInt(e.time))).fromNow()}</div>
          </div>
        </div>
        {division && <div className="border-b border-b-[#2c3f4f]" />}
        </>
      ))}
    </div>
  );
};

export default ActivityTab;
