import React from "react";
import { useForm } from "react-hook-form";
import icon from "../src/assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";
const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const formSubmit = (data) => {
    navigate("/success", { state: { inputValue: data.email } });
    reset();
  };

  return (
    <main className="bg-darkSlateGrey min-h-screen sm:grid sm:place-items-center">
      <div className="bg-white lg:flex lg:flex-row-reverse rounded-2xl sm:max-w-[60%] md:mx-auto lg:rounded-2xl lg:pl-10 lg:pr-6 lg:gap-16 w-full">
        <header className="lg:flex-1 bg-hero-pattern-mobile lg:bg-hero-pattern-desktop lg:rounded-2xl bg-cover bg-center min-h-72 w-full lg:my-6"></header>
        <section className="px-5 lg:px-0 py-6 lg:py-0 lg:flex-1 text-darkSlateGrey lg:my-10">
          <h1 className="text-4xl text-darkSlateGrey">Stay updated!</h1>
          <p className="py-6 font-semibold">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <article>
            <div className="flex items-start gap-4 mb-4">
              <img src={icon} alt="" />
              <p className="text-sm font-semibold">
                Product discovery and building what matters
              </p>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <img src={icon} alt="" />
              <p className="text-sm font-semibold">
                Measuring to ensure updates are a success
              </p>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <img src={icon} alt="" />
              <p className="text-sm font-semibold">And much more!</p>
            </div>
          </article>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="flex flex-col mt-8"
          >
            <div className="flex justify-between">
              <label htmlFor="email" className="text-xs mb-2">
                Email address
              </label>
              {errors.email && (
                <p
                  className="text-primary text-xs font-bold mb-2"
                  aria-live="assertive"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <input
              type="email"
              id="email"
              placeholder="email@company.com"
              className={`border-[1px] border-grey py-3 mb-6 pl-6 w-full ${
                errors.email
                  ? "border-primary"
                  : isValid
                  ? "border-success"
                  : "border-grey"
              }`}
              {...register("email", {
                required: "Valid email required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
                onChange: () => trigger("email"),
                onBlur: () => trigger("email"),
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />

            <button className="button px-6 py-4">
              Subscribe to monthly newsletter
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default App;
