import Link from "next/link";
import React from "react";

export const footer = () => {
  return (
    <footer>
      <section className="mx-13 rounded-main" >
        <div className="flex justify-between">
          <div></div>
          <div className="grid grid-cols-3">
            <div className="space-y-3">
              <h1>Lorem</h1>
              <ul>
                <li>Features</li>
                <li>Ipsum dolor</li>
                <li>Sit Amet</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h1>Lorem</h1>
              <ul>
                <li>Features</li>
                <li>Ipsum dolor</li>
                <li>Sit Amet</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h1>Lorem</h1>
              <ul>
                <li>Features</li>
                <li>Ipsum dolor</li>
                <li>Sit Amet</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <div>
            <span>@2025 PT.BWN. All Rights reserved</span>
          </div>
          <div className="flex items-center gap-5">
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Cookies Settings</Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
