/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./button";

const SignupPopup = ({ setIsOpen }) => {
  const [mail, setMail] = useState("");
  const [code, setCode] = useState(null);

  const sendMail = () => {
    if (mail == "") return;
    alert("Send Mail " + mail);
    setCode(820);
  };

  let btnArr = [
    {
      img: "meta.svg",
      title: "MetaMask",
      clickFn: () => alert("Metamask"),
    },
    {
      img: "coinbase.svg",
      title: "Coinbase Wallet",
      clickFn: () => alert("Coinbase"),
    },
    {
      img: "phantom.png",
      title: "Phantom",
      clickFn: () => alert("Phantom"),
    },
    {
      img: "walletconnect.svg",
      title: "WalletConnect",
      clickFn: () => alert("WalletConnect"),
    },
  ];

  if (code) {
    return (
      <div className="bg-[#121318] rounded-[10px] border border-[#00ffff] px-16 py-10 flex flex-col gap-6 relative">
        <Button
          onClick={() => setIsOpen(false)}
          leftImg={"cross.svg"}
          className="absolute right-[15px] top-[15px] px-0 py-0"
        />
        <img src="mail.svg" alt="mail" className="h-8" />
        <div className="text-center">
          <div className="font-bold pb-2">Check your mail</div>
          <div className="text-sm pb-2">
            Log in using the magic link sent to
          </div>
          <div className="font-semibold text-sm flex gap-3 items-center justify-center">
            {mail}{" "}
            <img
              src="edit.svg"
              alt="edit"
              className="h-4 cursor-pointer"
              style={{ color: "blue" }}
              onClick={() => setCode(null)}
            />
          </div>
        </div>

        <div className="pt-2 text-sm text-center">
          Then enter this security code:
        </div>
        <div className="flex bg-white rounded-lg py-3 px-7 text-black justify-between items-center">
          <div className="font-semibold text-lg px-3">{code}</div>
          <div className="h-6 min-w-[1px] bg-[#ece9e9]" />
          <Button
            text="Copy"
            className="text-[#1652F0] font-semibold px-0  "
            leftImg="copy.svg"
            imgStyle="h-6"
            onClick={() => navigator.clipboard.writeText(code)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#121318] rounded-[10px] border border-[#00ffff] px-8 py-10 flex flex-col gap-6 relative scale-75 md:scale-100">
      <div className="text-[#00ffff] text-[32px] font-bold">
        Sign In to 100XBet
      </div>
      <Button
        onClick={() => setIsOpen(false)}
        leftImg={"cross.svg"}
        className="absolute right-[15px] top-[15px] px-0 py-0"
      />
      <button
        onClick={() => alert("google")}
        className="bg-[#3384F1] rounded-[4px] flex items-center gap-4 p-1"
      >
        <div className="bg-white rounded-[4px] h-10 w-10 items-center justify-center flex">
          <img src="google.svg" alt="google" className="h-7" />
        </div>
        <div>
          <div className="text-sm font-semibold">Continue with Google</div>
          <div className="text-[12px] text-left">Quick sign-in</div>
        </div>
      </button>

      <div className="flex gap-4">
        <input
          type="email"
          placeholder="Enter email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="w-[270px] bg-[#2b2d3a] rounded-md text-white p-2 outline-none"
        />
        <Button
          text="Continue"
          rightImg="arrow.svg"
          onClick={sendMail}
          className="bg-gradient-to-r from-[#00ffff] to-[#00ffa3] font-medium text-black py-3 px-6"
        />
      </div>

      <div className="flex items-center gap-[14px]">
        <div className="w-[145px] h-[0px] border border-white/60" />
        <div className="text-white/60 text-base">or continue with</div>
        <div className="w-[145px] h-[0px] border border-white/60" />
      </div>

      <div className="flex flex-col gap-[10px]">
        {btnArr.map((e, i) => (
          <button
            className="bg-[#17172a] rounded-[5px] border border-white/10 py-[11px] px-[13px] flex gap-[14px]"
            key={i}
            onClick={e.clickFn}
          >
            <img src={e.img} alt={e.title} />
            <div className="font-medium">{e.title}</div>
          </button>
        ))}
      </div>

      <div className="text-center text-white/60">
        <span>Privacy</span> <span className="px-3 text-[12px]">|</span>{" "}
        <span>Terms</span>
      </div>
    </div>
  );
};

export default SignupPopup;
