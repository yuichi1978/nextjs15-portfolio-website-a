import {
  AiFillGithub,
  AiOutlineX,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const socilaLinks = [
  {
    href: "https://github.com",
    Icon: AiFillGithub,
    label: "GitHub",
  },
  {
    href: "https://x.com",
    Icon: AiOutlineX,
    label: "X (Twitter)",
  },
  {
    href: "https://facebook.com",
    Icon: AiFillFacebook,
    label: "Facebook",
  },
  {
    href: "https://instagram.com",
    Icon: AiFillInstagram,
    label: "Instagram",
  },
  {
    href: "https://telegram.com",
    Icon: FaTelegramPlane,
    label: "Telegram",
  },
];

export default function Footer() {
  return (
    <footer className="relative py-8 max-w-[1200px] mx-auto px-4">
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[100px] h-[100px] bg-purple-300 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-[20%] left-[50%] w-[150px] h-[70px] bg-purple-900 rounded-full opacity-50 transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-[25%] left-[65%] w-[100px] h-[100px] bg-purple-600 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
      </div>

      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-300 rounded-full opacity-40 transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-[45%] left-[60%] w-[250px] h-[150px] bg-purple-200 rounded-full opacity-20 transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-[60%] left-[49%] w-[200px] h-[100px] bg-purple-600 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
      </div>

      <div className="relative z-10 text-center mt-8">
        <h1 className="hidden md:block lg:text-[15rem] md:text-[12rem] font-bold text-white/10">
          JOHNDOE
        </h1>
        <h1 className="md:hidden mb-12 relative text-8xl font-bold text-white/10">
          JOHNDOE
        </h1>
      </div>

      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">© 2024. All rights reserved.</p>

        <ul className="flex flex-wrap gap-5">
          {socilaLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
}
