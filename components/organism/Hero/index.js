import React from "react";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <div className="mt-5 row">
      <div className="col-md-6 align-self-center col-sm-12 ">
        <p className="mb-3 hero__desc--title">Why My Telegram ?</p>
        <h3 className="hero__title">
          <span className="hero__span">Simple, Secure</span> & <br /> Reliable
          messaging.
        </h3>

        <p className="hero__desc my-5">
          With WhatsApp, your will get fast, simple, secure messaging and
          calling for free, available on phones all over the world. And security
          with technical software no 1 in the world
        </p>
        <div className="d-flex">
          <Button variant="contained" className="hero__btn" color="primary">
            Masuk
          </Button>
          <Button variant="text" className="hero__btn--text" color="primary">
            Learn More
          </Button>
        </div>
      </div>
      <div
        className="col-md-6 d-none d-md-block d-flex text-center"
        data-aos="zoom-in"
      >
        <img src="/img/hero-2.png" alt="hero" className="hero" />
      </div>
    </div>
  );
}
