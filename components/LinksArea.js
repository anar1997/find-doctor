import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../img/doctors-logo.png";
import { useRouter } from "next/router";

const LinksArea = () => {
  const router = useRouter();

  const navLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Doctors",
      link: "/doctors",
    },
    {
      name: "Hospital",
      link: "/hospital",
    },
    {
      name: "Beauty Center",
      link: "/beauty-center",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Register",
      link: "/register",
    },
  ];

  return (
    <div className="container links-area">
      <div className="links-area-1">
        <div className="area-2">
          <Image src={logo} className="logo" />
          <a>Find Doctor</a>
        </div>
        {/* {navLink.map(({ link, name })=>(
            <Link
              key={name}
              href={link}
              className={`${router.pathname===link ? 'active':""} nav-btn`}
            >
              {name}
            </Link>
          ))} */}
        <ul>
          <li>
            {navLink.map(({ link, name }) => (
              <Link
                key={name}
                href={link}
                legacyBehavior
              >
                <a className={`${
                  router.pathname === link ? "active" : ""
                } nav-btn`}>{name}</a>
              </Link>
            ))}
          </li>
          {/* <li>
            <Link href="/doctors" legacyBehavior>
              <a className="nav-btn">Doctors</a>
            </Link>
          </li>
          <li>
            <Link href="/hospital" legacyBehavior>
              <a className="nav-btn">Hospital</a>
            </Link>
          </li>
          <li>
            <Link href="/beauty-center" legacyBehavior>
              <a className="nav-btn">Beauty Center</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="nav-btn">About</a>
            </Link>
          </li>
          <li>
            <Link href="/login" legacyBehavior>
              <a className="nav-btn">Login</a>
            </Link>
          </li>
          <li>
            <Link href="/register" legacyBehavior>
              <a className="nav-btn">Register</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default LinksArea;
