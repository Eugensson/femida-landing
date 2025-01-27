export const ContactForm = () => {
  return (
    <form className="md:px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col gap-6 mb-12">
      <input type="text" className="form-control" placeholder="Ім'я" />
      <input
        type="email"
        className="form-control"
        placeholder="Електронна пошта"
      />
      <textarea className="textarea" placeholder="Текстове повідомлення" />
      <button
        type="submit"
        className="btn bg-accent hover:bg-accent-hover transition-all"
      >
        Надіслати повідомлення
      </button>
    </form>
  );
};
