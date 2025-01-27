import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { teamList } from "@/constants";

export const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container max-w-7xl text-center flex flex-col justify-center items-center gap-8">
        <h2 className="text-4xl md:text-5xl font-secondary font-extrabold">
          Наші адвокати
        </h2>
        <p className="max-w-[80vw] lg:max-w-[60vw] mx-auto px-6 lg:px-0 text-sm md:text-base mb-10">
          Зустрічайте наших досвідчених адвокатів, які завжди готові підтримати
          та захистити ваші інтереси. Кожен з наших спеціалістів має
          багаторічний досвід роботи в галузі права та надає індивідуальний
          підхід до кожного клієнта. Ми прагнемо досягти найкращих результатів
          для вас, забезпечуючи професіоналізм та ефективність на кожному етапі
          процесу.
        </p>
        <ul className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {teamList.map(({ name, position, image, description }) => (
            <li key={name}>
              <Card className="rounded-md overflow-hidden md:max-w-[350px] lg:max-w-none">
                <CardContent className="p-0 overflow-hidden h-[400px]">
                  <Image
                    src={image}
                    alt={`${name} photo`}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </CardContent>
                <CardHeader className="px-2">
                  <CardTitle className="text-2xl font-bold font-secondary">
                    {name}
                  </CardTitle>
                  <CardDescription className="p-0 text-sm uppercase tracking-[0.3px]">
                    {position}
                  </CardDescription>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
