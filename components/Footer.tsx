import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full pb-10 mb-[100px] md:mb-5 relative z-10"
      id="contact"
    >
      {/* Debug container - remove border after fixing */}
      <div className="flex flex-col items-center border border-transparent">
        <h1 className="heading lg:max-w-[45vw] text-white font-bold text-3xl md:text-5xl">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-gray-300 md:mt-10 my-5 text-center text-lg">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a
          href="mailto:omilanijoshua15@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch today"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6 mr-8">
          {socialMedia.map((info) => (
            <button
              key={info.id}
              onClick={() => window.open(info.link, "_blank")}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
