import { TestimonialSlider } from "@/components/testimonial-slider";

export const Testimonials = () => {
  return (
    <section className="h-[346px] lg:mb-[120px]">
      <div className="container max-w-7xl h-full flex items-center justify-end">
        <div className="w-full mx-auto lg:mx-0 lg:max-w-[570px]">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};
