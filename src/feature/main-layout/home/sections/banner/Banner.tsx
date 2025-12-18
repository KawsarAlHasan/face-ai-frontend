import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import PrimaryButton from "@/shared/buttons/PrimaryButton";
import stats from "@/constants/home/bannerStats";
import BannerBtn from "./BannerBtn";

export default function Banner() {
  return (
    <div className="relative min-h-[calc(100vh-80px)]  overflow-hidden pb-16 lg:pb-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating lightning  */}
        <div className="absolute top-[35%]  right-[40%] text-purple-400/20 animate-pulse">
          <Image
            src={"/assets/icons/home/banner/lightning.png"}
            alt="icon"
            width={100}
            height={100}
            className="h-[90px] w-full"
          />
        </div>
        {/* Floating star  */}
        <div className="absolute bottom-1/4 2xl:bottom-1/6 left-[42%] text-purple-400/20 animate-pulse">
          <Image
            src={"/assets/icons/home/banner/star.png"}
            alt="icon"
            width={100}
            height={100}
            className="h-[90px] w-full"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10  px-4 sm:px-6 lg:px-8 py-20 min-h-[calc(100vh-80px)] container grid grid-cols-1 md:grid-cols-2  items-center">
        {/* Left content */}
        <div className="col-span-2">
          {/* Badge */}
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#F3E8FF] border border-purple-500/30"
          >
            <Star className="lg:w-4 lg:h-4 w-3 h-3 text-[#8200DB] fill-current" />
            <span className="text-xs lg:text-sm font-medium text-[#8200DB]">
              Transform Your Appearance
            </span>
          </div>

          {/* Heading */}
          <div data-aos="fade-up" data-aos-delay="100" className="mb-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-[800px] 2xl:max-w-[1000px] ">
              Transform Your Appearance With
              <span className="bg-linear-to-r from-[#9810FA] to-[#E60076] bg-clip-text text-transparent">
                {" "}
                AI
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="lg:text-lg text-[#FFFFFF] mb-8 lg:mb-12 max-w-2xl leading-relaxed"
          >
            Start your hair and skincare journey with AI analysis and
            personalized recommendations to naturally enhance your features.
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex items-center justify-between md:justify-start gap-4 mb-10 "
          >
            <BannerBtn />
            <button className="w-full h-10 md:w-auto md:px-8 md:py-3 border border-[#9810FA] lg:h-[60px] text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-2">
              Watch Demo
              <ArrowRight size={18} className="hidden md:block" />
            </button>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="flex items-center gap-2 lg:gap-6 border-t border-[#C6D2FF]/40 pt-7 max-w-md"
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-start border border-[#9810FA] p-2 lg:p-4 rounded-md lg:rounded-xl text-start backdrop-blur-xs"
              >
                <div className="text-lg lg:text-[30px] font-medium text-white">
                  {item.value}
                </div>
                <p className="text-xs lg:text-base text-gray-400 text-nowrap">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div></div>
      </div>
      {/* Right side - Image placeholder */}
      <div className="lg:absolute lg:-right-32 2xl:-right-40 md:top-1/2 md:-translate-y-1/2 lg:h-[650px] 2xl:h-[800px]">
        <Image
          src={"/assets/images/home/banner-img.png"}
          alt="banner image"
          height={1000}
          width={1000}
          draggable={false}
          unoptimized
          className="w-full h-fit lg:h-full object-cover "
        />
      </div>
    </div>
  );
}
