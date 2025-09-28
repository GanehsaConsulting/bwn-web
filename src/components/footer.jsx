import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="margin ">
      <section className="bg-sec-light dark:bg-sec-dark rounded-main shadow-2xl mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Logo + Description + Social Media */}
          <div className="flex flex-col gap-5 max-w-md">
            <Image
              src="/logo-typography.png"
              alt="logo-footer"
              width={180}
              height={60}
              className="object-contain"
            />
            <p className="text-sm leading-relaxed text-dark-color/60 dark:text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, voluptate. Lorem ipsum dolor sit amet.
            </p>
            <div id="socmed-icon" className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-full">
                <FaInstagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <FaFacebookSquare className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <FaXTwitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Company</h2>
              <ul className="space-y-2 text-sm text-dark-color/60 dark:text-white/70">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Press</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Resources</h2>
              <ul className="space-y-2 text-sm text-dark-color/60 dark:text-white/70">
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Help Center</Link>
                </li>
                <li>
                  <Link href="#">Community</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Support</h2>
              <ul className="space-y-2 text-sm text-dark-color/60 dark:text-white/70">
                <li>
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Live Chat</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-gray-400">
          <span>© 2025 PT. BWN. All Rights Reserved</span>
          <div className="flex gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
