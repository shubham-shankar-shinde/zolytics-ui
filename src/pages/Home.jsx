import React, { useState } from "react";
import logoMark from "../assets/logo.png";
import logoWord from "../assets/Zoho_logo-removebg-preview.png";
import zohoBadge from "../assets/zoho_Partner-removebg-preview.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  // add active state to track clicked nav item
  const [active, setActive] = useState("Home");

  return (
    // outer padding 2px on all sides
    <div className="p-10 min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900 antialiased">
      {/* NAV */}
      <header className="w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-20 py-6 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logoMark}
              alt="Zylitics mark"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
            />

            {/* vertical line separators between logos */}
            <div
              className="hidden sm:block w-px h-10 bg-gray-200/60 mx-4"
              aria-hidden="true"
            />

            <img
              src={logoWord}
              alt="Zylitics wordmark"
              className="h-6 md:h-8 lg:h-10 object-contain"
            />

            <div
              className="hidden sm:block w-px h-12 bg-gray-200/60 mx-4"
              aria-hidden="true"
            />

            <img
              src={zohoBadge}
              alt="Zoho badge"
              className="h-6 md:h-8 lg:h-10 object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-base md:text-lg lg:text-xl">
            <button
              onClick={() => setActive("Home")}
              className={`px-6 md:px-8 py-2 transition-colors ${
                active === "Home"
                  ? "text-sky-600 font-semibold"
                  : "text-slate-700"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setActive("About")}
              className={`px-6 md:px-8 py-2 transition-colors ${
                active === "About"
                  ? "text-sky-600 font-semibold"
                  : "text-slate-700"
              }`}
            >
              About
            </button>

            <button
              onClick={() => setActive("Solutions")}
              className={`px-6 md:px-8 py-2 transition-colors ${
                active === "Solutions"
                  ? "text-sky-600 font-semibold"
                  : "text-slate-700"
              }`}
            >
              Solutions
            </button>

            <button
              onClick={() => setActive("Contact")}
              className={`px-6 md:px-8 py-2 transition-colors ${
                active === "Contact"
                  ? "text-sky-600 font-semibold"
                  : "text-slate-700"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* mobile menu (also update active on click) */}
          <div className="md:hidden">
            {menuOpen ? (
              <div className="border-t border-gray-100 bg-white">
                <div className="px-6 py-4 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setActive("Home");
                      setMenuOpen(false);
                    }}
                    className="text-left py-2"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      setActive("About");
                      setMenuOpen(false);
                    }}
                    className="text-left py-2"
                  >
                    About
                  </button>
                  <button
                    onClick={() => {
                      setActive("Solutions");
                      setMenuOpen(false);
                    }}
                    className="text-left py-2"
                  >
                    Solutions
                  </button>
                  <button
                    onClick={() => {
                      setActive("Contact");
                      setMenuOpen(false);
                    }}
                    className="mt-2 bg-sky-600 text-white py-2 rounded-full"
                  >
                    Book Consult
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-4">
            <button
              style={{
                padding: "10px 22px",
                borderRadius: "28px",
                marginTop: "10px",
              }}
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.2)] transform transition duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-sky-200/60 text-base md:text-lg lg:text-xl font-medium"
            >
              Book Consult
            </button>

            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((s) => !s)}
              className="md:hidden p-2 text-2xl leading-none"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN - hero with top offset so header doesn't overlap */}
      <main className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 pt-[96px]">
        <div className="relative w-full max-w-5xl bg-white rounded-[36px] shadow-xl border border-gray-100 overflow-hidden bg-clip-padding p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              Transform the Way You Work with
              <span className="block text-sky-600 mt-2">Zoho.</span>
            </h1>

            <div className="flex justify-center items-center">
              <p className="mt-14 text-slate-600 max-w-3xl text-base sm:text-lg leading-relaxed text-center">
                We help businesses automate accounting, CRM, HR, and analytics —
                creating connected systems that drive efficient growth and
                measurable outcomes.
              </p>
            </div>

            <div className="mt-20 sm:mt-10 flex justify-center gap-4 flex-wrap">
              <button
                style={{ padding: "14px 36px", borderRadius: "40px" }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-sky-600 to-sky-500 text-white text-sm sm:text-base font-semibold shadow-[0_14px_40px_rgba(99,102,241,0.12)] hover:shadow-[0_18px_50px_rgba(99,102,241,0.16)] transform transition duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-sky-200/60"
              >
                Get Free Consultation
              </button>

              <button
                style={{ padding: "14px 36px", borderRadius: "40px" }}
                className="inline-flex items-center justify-center bg-white text-sky-600 border-2 border-sky-600 text-sm sm:text-base font-semibold hover:bg-sky-50 hover:shadow-sm transform transition duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-sky-100"
              >
                Explore Solutions
              </button>
            </div>

            <div className="mt-10 sm:mt-12 flex justify-center gap-12 text-sm sm:text-base text-slate-500">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-semibold text-sky-600">
                  500+
                </div>
                <div>Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-semibold text-sky-600">
                  10+
                </div>
                <div>Years</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-semibold text-sky-600">
                  24/7
                </div>
                <div>Support</div>
              </div>
            </div>
          </div>

          <div className="mt-8 h-8 bg-gradient-to-b from-sky-50 to-white rounded-b-[36px]"></div>
        </div>
      </main>
    </div>
  );
}
