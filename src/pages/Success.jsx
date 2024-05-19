import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import successIcon from "../assets/images/icon-success.svg";

const Success = () => {
  const location = useLocation();
  const inputValue = location.state.inputValue;
  const navigate = useNavigate();

  return (
    <main className="bg-white md:bg-darkSlateGrey min-h-screen md:grid md:place-items-center">
      <section className="text-darkSlateGrey bg-white pt-20 px-8 md:rounded-3xl md:px-12 md:py-12 md:max-w-[28rem]">
        <div className="mb-36 md:mb-10">
          {" "}
          <img src={successIcon} alt="" />
          <h1 className="py-6 text-4xl ">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>{inputValue}</span>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <div>
          <button
            className="button px-20 py-4 text-center"
            onClick={() => navigate("/")}
          >
            Dismiss message
          </button>
        </div>
      </section>
    </main>
  );
};

export default Success;
