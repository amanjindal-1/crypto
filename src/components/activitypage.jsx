import { useState } from "react";
import { recentTrading } from "../utils/constants";
import ActivityTab from "./home/activity-tab";

const Activitypage = () => {
  const [loading, setLoading] = useState(true);
  const options = [{ label: "Min $500", value: 1 }];
  return (
    <div className="m-auto flex items-center justify-center p-6 md:p-14">
      <div className="rounded-md border border-[#0FF] w-[90%] px-6 py-8 bg-[#1B1B23]">
        <div className="">
          <div className="">
            <div className="text-[#0FF] text-2xl font-bold mb-7">Activity</div>
          </div>
          <ActivityTab list={recentTrading} division={true} />
          {loading && (
            <div className="text-[#777] font-bold text-center mt-9 mb-3">
              Loading more activities...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activitypage;
