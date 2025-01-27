export const Newsletter = () => {
  return (
    <section className="section bg-accent">
      <div className="container max-w-7xl md:px-8 text-center">
        <h2 className="font-secondary mb-3 text-3xl md:text-[40px] font-extrabold leading-[1.2] -tracking-tighter text-white">
          Підпишіться на нашу розсилку
        </h2>
        <p className="mb-10 text-sm md:text-base text-white">
          Будьте першими, хто дізнається про наші останні новини.
        </p>
        <form className="flex flex-col md:flex-row gap-2 md:gap-4 max-w-[600px] mx-auto">
          <input
            type="email"
            className="form-control mb-4"
            placeholder="Ваша електронна пошта"
          />
          <button
            type="submit"
            className="btn bg-primary hover:bg-primary-hover transition-all md:max-w-[150px]"
          >
            Приєднатися
          </button>
        </form>
      </div>
    </section>
  );
};
