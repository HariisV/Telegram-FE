import React from "react";
import { Button } from "@mui/material";
import NavbarList from "./navbar-list";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" data-aos="zoom-in">
            <img src="/img/logo.png" alt="" width={60} height={60} />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavbarList title="Home" />
            <NavbarList title="About" />
            <NavbarList title="Contact" />
            <NavbarList title="Discover" />
          </ul>
          <div className="d-flex">
            <Link href="/auth/sign-in" passHref>
              <Button variant="outlined" className="mx-4 navbar__btn">
                Masuk
              </Button>
            </Link>
            <Link href="/auth/sign-up" passHref>
              <Button variant="contained" className="navbar__btn">
                Daftar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
