import { Socials } from "@/components/socials";
import { ContactForm } from "@/components/contact-form";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="container max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-secondary font-extrabold mb-4">
          Зв&apos;яжіться з нами
        </h2>
        <p className="max-w-[640px] mx-auto px-6 lg:px-0 mb-16 text-sm md:text-base">
          Наша юридична компанія завжди готова допомогти Вам вирішити складні
          правові питання. Зв&apos;яжіться з нами, щоб отримати професійну
          консультацію, індивідуальний підхід та ефективне вирішення Ваших
          справ. Ми гарантуємо конфіденційність та якісну підтримку на кожному
          етапі.
        </p>
        <ContactForm />
        <Socials />
      </div>
    </section>
  );
};
