import Image from "next/image";
const icons = [
  {
    link: "/assets/icons/social/Twitter.svg",
    alt: "twitter",
    classes: "mr-5",
  },
  {
    link: "/assets/icons/social/Instagram.svg",
    alt: "instagram",
    classes: "mr-5",
  },
  {
    link: "/assets/icons/social/Facebook.svg",
    alt: "facebook",
    classes: "mr-5",
  },
  {
    link: "/assets/icons/social/Twitch.svg",
    alt: "twitch",
  },
];
const Footer = () => {
  return (
    <footer className="wrapper mt-20 lg:mt-72 flex flex-col">
      <nav className="w-full flex flex-col justify-start  lg:flex-row lg:flex-between">
        <div className="flex flex-col text-left">
          <p className="p-regular-16 text-black mt-10 lg:mt-0">Explore</p>
          <p className="p-regular-16 text-primary-400 mt-4">Expenses</p>
          <p className="p-regular-16 text-primary-400 mt-2">Income</p>
          <p className="p-regular-16 text-primary-400 mt-2">Crypto</p>
        </div>
        <div className="flex flex-col text-left mt-10 lg:mt-0">
          <p className="p-regular-16 text-black ">Help</p>
          <p className="p-regular-16 text-primary-400 mt-4">Support</p>
          <p className="p-regular-16 text-primary-400 mt-2">FAQs</p>
          <p className="p-regular-16 text-primary-400 mt-2">Contact</p>
        </div>
        <div className="flex flex-col text-left">
          <p className="p-regular-16 text-black mt-10 lg:mt-0">Legal</p>
          <p className="p-regular-16 text-primary-400 mt-4">Privacy</p>
          <p className="p-regular-16 text-primary-400 mt-2">Terms</p>
          <p className="p-regular-16 text-primary-400 mt-2">Dispute</p>
        </div>
      </nav>
      <div className="flex flex-col flex-center mt-20 lg:mt-52">
        <div className="flex mb-5">
          {icons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.link}
              alt={icon.alt}
              width={50}
              height={50}
              className={icon.classes}
            />
          ))}
        </div>
        <p className="p-regular-16 text-primary-400 text-center">
          © 2024 FinSculpt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
