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
      <div className="text-[1rem] w-full sticky top-0 z-10 border-b-2 border-[#0FF]">
        <div className="bg-[#17172A] py-2 pl-10 pr-8 flex justify-between items-center">
          <a href="/">
          <img src="logo.svg" alt="100XBET" /></a>
          <div className="w-[38%] flex bg-[#2B2E3B] pl-3 rounded-md">
            <img src="search.svg" />
            <SearchInput
              value={search}
              setValue={setSearch}
              placeholder={"Search Market"}
              className="w-full"
            />
          </div>
          <a className="flex gap-1.5 cursor-pointer" href="dashboard">
            <img src="dashboard.svg" alt="dashboard" />
            Dashboard
          </a>
          <a className="flex gap-1.5 cursor-pointer" href="activity">
            <img src="activity.svg" alt="activity" />
            Activity
          </a>
          <a className="flex gap-1.5 cursor-pointer" href="history">
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
        <div className="bg-black pt-5 pb-6 px-14 flex gap-8 items-center">
          {tabs.map((t, i) => (
            <a
              className={`p-1 px-2 cursor-pointer ${
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
      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        component={<SignupPopup setIsOpen={setIsOpen} />}
      />
    </>
  );
};

export default Navbar;
