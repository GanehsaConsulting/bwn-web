"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MegaMenuNavbar } from "./mega-menu";
import { ServiceMenu } from "./service-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LuSearch } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

const Logo = ({ isScrolled }) => (
  <Link href="/" className=" flex items-center gap-1 z-50 ml-3">
    <img
      className={`hidden sm:block h-12 transition-all duration-300 dark:grayscale dark:brightness-10000 ${
        isScrolled ? " rounded  py-1" : "grayscale brightness-10000"
      }`}
      src="/logo-typography.png"
      alt="logo-dekstop"
    />
    <img
      className={`sm:hidden h-20 transition-all duration-300 dark:grayscale dark:brightness-10000 ${
        isScrolled ? " rounded px-2 py-1" : "grayscale brightness-10000"
      }`}
      src="/logo-1.png"
      alt="logo-mobile"
    />
  </Link>
);

const LinkItem = ({ href, children, isActive, isScrolled }) => (
  <Link
    href={href}
    className={`px-3 py-1 rounded-main transition-all duration-300 text-sm relative hover:underline decoration-[1.5px] underline-offset-3 hover:font-medium hover:text-darkColor dark:hover:text-lightColor
      ${
        isActive
          ? "underline font-medium text-dark-color dark:text-white"
          : isScrolled
          ? "text-muted-white dark:text-lightColor"
          : "text-white dark:text-white"
      }`}
  >
    {children}
  </Link>
);

export const Navbar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const path = usePathname();
  const isActive = (href) =>
    href === "/" ? path === "/" : path.startsWith(href);
  const isServicePage = path.startsWith("/services") || path === "/services";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Blur effect on scroll */}
      {isScrolled && (
        <>
          <div className="fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none linear-blur-navbar" />
          {/* <div className="duration-300 md:sticky mx-2 sm:mx-10 top-2 left-2 right-2 w-auto rounded-main h-[52px] z-30 backdrop-blur-[4px]" /> */}
        </>
      )}

      <div
        className={`flex items-center justify-between z-50 fixed top-2 left-2 right-2 w-auto px-2 rounded-third min-h-[52px] duration-300 ease-in-out py-2
          ${expandedId ? " dark:bg-darkColor" : ""}
          ${
            isScrolled
              ? "margin dark:bg-darkColor/40 shadow-custom bg-white dark:bg-dark-color border border-neutral-300/50 dark:border-secondaryGray/10"
              : " dark:bg-darkColor mt-2"
          }`}
      >
        <Logo isScrolled={isScrolled} />

        {/* Menu (Desktop) */}
        <div className={`hidden sm:flex items-center`}>
          <ul className="flex items-center gap-1 text-sm">
            <li>
              <LinkItem
                href="/"
                isActive={isActive("/")}
                isScrolled={isScrolled}
              >
                Home
              </LinkItem>
            </li>
            <li>
              <LinkItem
                href="/about-us"
                isActive={isActive("/about-us")}
                isScrolled={isScrolled}
              >
                About Us
              </LinkItem>
            </li>
            <li>
              <MegaMenuNavbar
                id="service"
                title="Services"
                expandedId={expandedId}
                setExpandedId={setExpandedId}
                className={`absolute dark:text-dark-color ${
                  isScrolled ? "text-dark-color" : "text-white"
                }`}
                isActive={isServicePage}
                isScrolled={isScrolled}
              >
                <ServiceMenu
                  onClose={() => setExpandedId(null)}
                  expandedId={expandedId}
                />
              </MegaMenuNavbar>
            </li>
            <li>
              <LinkItem
                href="/article"
                isActive={isActive("/article")}
                isScrolled={isScrolled}
              >
                Article
              </LinkItem>
            </li>
            <li>
              <LinkItem
                href="/contact"
                isActive={isActive("/contact")}
                isScrolled={isScrolled}
              >
                Contact
              </LinkItem>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 z-50">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2">
            <Input
              className="w-60 dark:text-white text-dark-color"
              placeholder="Search here..."
            />
            <Button
              variant="secondary"
              size="icon"
              className="bg-dark-color text-white hover:text-dark-color"
            >
              <LuSearch />
            </Button>
          </div>

          {/* Theme Switch */}
          <div className="z-100">
            <ThemeSwitch />
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <MegaMenuNavbar
              id="service-mobile"
              icon={<RxHamburgerMenu />}
              iconClassName="rounded-full p-2 bg-white dark:bg-black md:hover:bg-main-1 md:dark:hover:bg-main-2"
              expandedId={expandedId}
              setExpandedId={setExpandedId}
              className="absolute"
              isActive={isServicePage}
              isScrolled={isScrolled}
              isMobile
            >
              <ServiceMenu
                onClose={() => setExpandedId(null)}
                expandedId={expandedId}
              />
            </MegaMenuNavbar>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen transition-opacity duration-300 z-10 bg-black/50 dark:bg-white/50
          ${
            expandedId
              ? "opacity-100 backdrop-blur-[4px]"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Main Content */}
      <div
        className={`${
          expandedId ? "pointer-events-none md:scale-105" : ""
        } md:duration-300 md:ease-in-out`}
      >
        {children}
      </div>
    </>
  );
};
