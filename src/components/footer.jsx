import { useState } from "react";

const Footer = () => {
  const [mail, setMail] = useState("");
  let footerData = [
    {
      title: "Markets",
      links: [
        { key: "Politics", link: "/politics" },
        { key: "Crypto", link: "/crypto" },
        { key: "Sports", link: "/sports" },
        { key: "Pop Culture", link: "/pop-culture" },
        { key: "Business", link: "/business" },
        { key: "Science", link: "/science" },
        { key: "All", link: "/all" },
      ],
    },
    {
      title: "Resources",
      links: [
        { key: "Contact", link: "/contact" },
        { key: "Press", link: "/press" },
        { key: "Learn", link: "/learn" },
        { key: "Developers", link: "/developers" },
        { key: "Elections", link: "/elections" },
        { key: "Careers", link: "/careers" },
        { key: "Newsletter", link: "/newsletter" },
      ],
    },
    {
      title: "Company",
      links: [
        { key: "About Us", link: "/about-us" },
        { key: "Careers", link: "/careers" },
        { key: "News", link: "/news" },
        { key: "Security", link: "/security" },
        { key: "Community", link: "/community" },
        { key: "Announcements", link: "/announcements" },
      ],
    },
    {
      title: "Support",
      links: [
        { key: "Request Form", link: "/request-form" },
        { key: "Contact Support", link: "/support" },
        { key: "FAQ", link: "/faq" },
        { key: "Security", link: "/security" },
      ],
    },
  ];

  return (
    <div className="bg-[#17172A] border-t-2 border-[#0FF] pt-11 px-[15px] lg:px-8">
      <div className="flex justify-between mb-10 md:mb-14 flex-col md:flex-row gap-5">
        <img
          src="logo.svg"
          alt="logo"
          style={{ width: 200, objectFit: "contains" }}
        />
        <div className="flex gap-6">
          <button
            onClick={() => alert("apple")}
            style={{ maxWidth: "fit-content" }}
          >
            <img src="apple-store.png" alt="apple-store" />
          </button>
          <button onClick={() => alert("google")}>
            <img src="google-store.png" alt="google-store" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 flex-row md:gap-12 lg:gap-[151px] pb-8 border-b border-b-[#0FF] overflow-hidden">
        {footerData.map((ele) => (
          <div key={ele.title}>
            <div className="text-lg md:text-2xl font-semibold pb-3 md:pb-12">
              {ele.title}
            </div>
            <div className="flex flex-col text-[#BDBDBD] text-sm gap-3">
              {ele.links.map((l, i) => (
                <a href={l.link} key={i}>
                  {l.key}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="w-full md:w-[50%] 2xl:w-[27%]">
          <div className="text-lg md:text-2xl font-semibold">Newsletter</div>
          <div className="mt-3 mb-5 py-3 px-[18px] rounded-md border border-[#D4D4D4] flex justify-between gap-2 w-full">
            <input
              placeholder="Enter your mail"
              value={mail}
              className="bg-transparent text-white outline-none border-none w-full"
              onChange={(e) => setMail(e.target.value)}
            />
            <button onClick={() => alert("send " + mail)}>
              <img src="send.svg" />
            </button>
          </div>
          <div className="">
            <div className="text-[#999] font-semibold text-sm md:text-base">
              We accept payment systems
            </div>
            <img
              src="payment-mode.png"
              alt="payment-mode"
              className="w-[20rem]"
            />
          </div>
        </div>
      </div>
      <div className="py-5 text-[#BDBDBD] text-sm flex justify-between flex-col gap-5 sm:flex-row">
        <div>100xbet. © 2025. All Rights Reserved.</div>
        <div className="flex gap-10">
          <a className="cursor-pointer" href="#">
            Privacy Policy
          </a>
          <a className="cursor-pointer" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
