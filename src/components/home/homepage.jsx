import { cardData, rankData, recentTrading } from "../../utils/constants";
import SuggestionTabs from "../suggestion-tabs";
import ActivityTab from "./activity-tab";
import Card from "./card";

const Homepage = () => {
  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex];
  };
  return (
    <>
      <SuggestionTabs />
      <div className="px-[15px] lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 text-[#0ff] text-[1.38rem] font-bold items-center justify-center text-center">
          <img src="diamond.png" style={{ width: 28, height: 22 }} />
          <div>
            You win even if you lose the bet because you get the meme with every
            bet.
          </div>
        </div>
        <div className="py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] lg:gap-7">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card data={getRandomCard()} key={i} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-7 mb-16">
          <div className="flex-1 border border-[#0FF] rounded-2xl px-7 py-9 bg-[#121318]">
            <div className="text-[#0FF] text-2xl font-semibold border-b border-[#0FF] pb-5 mb-5">
              Recent Trading Activities
            </div>
            <ActivityTab list={recentTrading} />
          </div>
          <div className="flex-1 border border-[#0FF] rounded-2xl px-7 py-9 bg-[#121318]">
            <div className="text-[#0FF] text-2xl font-semibold border-b border-[#0FF] pb-5 mb-5">
              Top Volume This Week
            </div>
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="w-1/2 flex flex-col gap-4">
                {rankData.slice(0, 5).map((e, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="relative">
                      <img
                        src={e.img}
                        alt={e.name}
                        className="rounded-full min-w-12 max-w-12"
                      />
                      <div className="text-[0.75rem] absolute top-[-0.25rem] right-[-0.5rem] rounded-full bg-black w-6 h-6 items-center justify-center flex">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{e.name}</div>
                      <div className="text-[#898989]">{e.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-1/2 flex flex-col gap-4">
                {rankData.slice(5, 10).map((e, i) => (
                  <div key={i + 5} className="flex gap-4">
                    <div className="relative">
                      <img
                        src={e.img}
                        alt={e.name}
                        className="rounded-full min-w-12 max-w-12"
                      />
                      <div className="text-[0.75rem] absolute top-[-0.25rem] right-[-0.5rem] rounded-full bg-black w-6 h-6 items-center justify-center flex">
                        {i + 6}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{e.name}</div>
                      <div className="text-[#898989]">{e.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
