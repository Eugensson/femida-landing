import Image from "next/image";

import { skillList } from "@/constants";

export const Skills = () => {
  return (
    <section id="skills" className="section bg-[#f8f3eca1]">
      <div className="container max-w-7xl text-center flex flex-col justify-center items-center gap-8">
        <h2 className="text-4xl md:text-5xl font-secondary font-extrabold">
          Ми пропонуємо
        </h2>
        <p className="max-w-[80vw] lg:max-w-[60vw] mx-auto px-6 lg:px-0 mb-10 text-sm md:text-base">
          Наша юридична компанія надає широкий спектр послуг, включаючи
          консультування та представництво в судах. Ми допомагаємо вирішити
          складні правові питання, забезпечуючи високий рівень професіоналізму
          та конфіденційності. Ваша довіра для нас - це найвища оцінка нашої
          роботи!
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillList.map(({ icon, title, description }) => (
            <li key={title} className="flex flex-col">
              <Image
                src={icon}
                alt={`${title} icon`}
                width={40}
                height={40}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl md:text-2xl mb-2 lg:mb-4 font-secondary font-bold">
                {title}
              </h3>
              <p className="max-w-[332px] mx-auto lg:max-w-[350px]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
