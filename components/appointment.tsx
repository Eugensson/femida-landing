export const Appointment = () => {
  return (
    <form className="w-full max-w-[22rem] md:max-w-md mx-auto p-8 rounded-sm bg-accent">
      <h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">
        Запис на консультацію
      </h3>
      <div className="w-[54px] h-[3px] bg-white my-6 mx-auto" />
      <div className="space-y-6">
        <input type="text" className="form-control" placeholder="Ім'я" />
        <input
          type="text"
          className="form-control"
          placeholder="Номер телефону"
        />
        <input
          type="email"
          className="form-control"
          placeholder="Електронна пошта"
        />
        <textarea
          className="resize-none w-full h-[132px] outline-none rounded-sm p-4 text-sm text-gray focus:ring-1 focus:ring-primary"
          placeholder="Опишіть Вашу проблему"
        />
        <button
          type="submit"
          className="btn bg-primary hover:bg-primary-hover transition-all"
        >
          Надіслати
        </button>
      </div>
    </form>
  );
};
