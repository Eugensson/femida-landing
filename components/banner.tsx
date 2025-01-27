import Image from "next/image";

import { Header } from "@/components/header";
import { Appointment } from "@/components/appointment";

export const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-[800px] bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]"
    >
      <Header />
      <div className="container max-w-7xl h-full lg:flex pt-32">
        <div className="mx-auto px-5 md:p-0 h-full text-center lg:text-left">
          <h1 className="capitalize font-secondary font-bold text-4xl md:text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">
            Ваші проблеми
            <br />
            <span className="text-accent">наші рішення.</span>
          </h1>
          <p className="max-w-sm mb-[50px] mx-auto lg:mx-0 lg:max-w-[540px]">
            Ваш надійний партнер у правових питаннях – ми надаємо комплексні
            юридичні рішення для будь-яких ситуацій, забезпечуючи професійну
            підтримку та індивідуальний підхід до кожного клієнта.
          </p>
          <div className="lg:absolute mx-auto max-w-[445px] lg:mx-0">
            <Appointment />
          </div>
        </div>
        <div className="hidden lg:flex flex-1 flex-col items-end relative">
          <Image
            src="/images/banner.png"
            width={1000}
            height={1000}
            alt="Banner"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
