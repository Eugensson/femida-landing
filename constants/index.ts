import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiYoutubeLine,
  RiLinkedinFill,
} from "react-icons/ri";

export const navLinks = [
  {
    name: "Головна",
    href: "home",
  },
  {
    name: "Діяльність",
    href: "skills",
  },
  {
    name: "Наша команда",
    href: "team",
  },
  {
    name: "Контакти",
    href: "contact",
  },
];

export const testimonialList = [
  {
    text: "Дуже задоволений рівнем обслуговування! Кожен етап нашої співпраці був детально роз'яснений, і я відчував підтримку на кожному кроці. Відмінна команда професіоналів!",
    name: "Валерій Омелян",
    image: "/images/profile1.jpg",
    position: "Торгівельний представник",
  },
  {
    text: "Юристи цієї компанії дійсно знають свою справу! Після звернення я отримала чітке роз'яснення моїх прав та можливих шляхів вирішення ситуації. Вдячна за допомогу!",
    name: "Катерина Чен",
    image: "/images/profile2.jpg",
    position: "Сімейний лікар",
  },
  {
    text: "Ця юридична компанія перевершила всі мої очікування. Я отримав швидку та професійну допомогу у вирішенні складних правових питань. Рекомендую всім!",
    name: "Геннадій Шевченко",
    image: "/images/profile3.jpg",
    position: "Підприємець",
  },
];

export const skillList = [
  {
    icon: "/images/skills/skill2.png",
    title: "Трудові спори",
    description:
      "Рішення конфліктів між працівниками та роботодавцями, захист прав трудящих.",
  },
  {
    icon: "/images/skills/skill3.png",
    title: "Захист права власності",
    description:
      "Забезпечення захисту прав власників майна через судові та позасудові методи.",
  },
  {
    icon: "/images/skills/skill1.png",
    title: "Зняття арешту з майна",
    description:
      "Зняття арешту з майна та відновлення прав власності шляхом юридичних процедур.",
  },
  {
    icon: "/images/skills/skill4.png",
    title: "Податкові спори",
    description:
      "Юридична підтримка в питаннях оподаткування, вирішення суперечок із податковими органами.",
  },
  {
    icon: "/images/skills/skill5.png",
    title: "Представництво в суді",
    description:
      "Представництво інтересів клієнтів у судових органах, захист прав та законних інтересів.",
  },
  {
    icon: "/images/skills/skill6.png",
    title: "Кредитні спори",
    description:
      "Рішення спорів між боржниками та кредиторами, юридична допомога в питаннях кредитування.",
  },
];

export const teamList = [
  {
    image: "/images/lawyer1.jpg",
    name: "Олександр Потапенко",
    position: "Фінансове та господарське право",
    description:
      "Олександр спеціалізується на фінансових спорах і господарському праві, надаючи нотаріальні послуги та представляючи клієнтів у суді.",
  },
  {
    image: "/images/lawyer2.jpg",
    name: "Валентина Андрієнко",
    position: "Сімейне та трудове право",
    description:
      "Валентина допомагає у питаннях сімейного, трудового та адміністративного права, захищаючи права клієнтів у суді.",
  },
  {
    image: "/images/lawyer3.jpg",
    name: "Віталій Остапчук",
    position: "Кримінальне та земельне право",
    description:
      "Віталій розв'язує питання кримінального і земельного права, зокрема щодо зняття арешту з майна та та представляючи клієнтів у суді.",
  },
];

export const socialList = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: RiFacebookFill,
  },
  {
    label: "TwitterX",
    href: "https://www.x.com",
    icon: RiTwitterXFill,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: RiInstagramLine,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com",
    icon: RiYoutubeLine,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com",
    icon: RiLinkedinFill,
  },
];
