import { useState } from "react";
import Button from "./button";
import SearchInput from "./search-input";
import { tabs } from "../utils/constants";
import SignupPopup from "./signup-popup";
import Popup from "./popup/popup";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text-[1rem] w-full sm:sticky top-0 z-10 bg-black pb-[15px]">
        <div className="w-full border-b-2 border-[#0FF]">
          <div className="bg-[#17172A] py-2 p-[15px] lg:px-8 flex gap-3 justify-between items-center min-w-max">
            <a href="/" className="flex md:hidden xl:flex w-[150px] md:w-auto">
              <img src="logo.svg" alt="100XBET" />
            </a>
            <div className="w-[25%] 2xl:w-[38%] my-2 bg-[#2B2E3B] pl-3 rounded-md hidden lg:flex">
              <img src="search.svg" />
              <SearchInput
                value={search}
                setValue={setSearch}
                placeholder={"Search Market"}
                className="w-full"
              />
            </div>
            <a
              className="gap-1.5 cursor-pointer hidden md:flex"
              href="dashboard"
            >
              <img src="dashboard.svg" alt="dashboard" />
              Dashboard
            </a>
            <a
              className="gap-1.5 cursor-pointer hidden md:flex"
              href="activity"
            >
              <img src="activity.svg" alt="activity" />
              Activity
            </a>
            <a className="gap-1.5 cursor-pointer hidden md:flex" href="history">
              <img src="electricity.svg" alt="history" />
              Trade History
            </a>

            <Button
              text="Log In/Sign Up"
              onClick={() => setIsOpen(true)}
              className="text-black font-medium px-4 py-3"
              style={{
                background: "linear-gradient(90deg, #00FFFF 0%, #00FFA3 100%)",
              }}
              leftImg="login.svg"
            />
          </div>
          <div className="pb-3.5 pt-3.5 px-[15px] lg:px-8 bg-black">
            <div className="pb-2.5 flex gap-8 items-center overflow-auto custom_scrollbar">
              {tabs.map((t, i) => (
                <a
                  className={`p-1 px-2 cursor-pointer min-w-max ${
                    i == 0 ? "border-b-2 border-b-[#0FF]" : ""
                  }`}
                  key={i}
                  href={t}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[full] bg-[#2B2E3B] pl-3 rounded-md flex lg:hidden m-[15px] mb-0">
          <img src="search.svg" />
          <SearchInput
            value={search}
            setValue={setSearch}
            placeholder={"Search Market"}
            className="w-full"
          />
        </div>
      </div>
      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        component={<SignupPopup setIsOpen={setIsOpen} />}
      />
    </>
  );
};

export default Navbar;
