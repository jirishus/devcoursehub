import React from "react";
import { Link } from "react-router-dom";

export default function School() {
  return (
    <>
      {/* Hero Section */}

      {/* Page wrapper */}
      <main className="bg-[#F9FAFB] text-[#111827]">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-[#F9FAFB]" />
          <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20 grid items-center gap-10 md:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-[#22C55E] ring-1 ring-green-100">
                Project-first learning
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Level up your web dev skills with a clear,{" "}
                <span className="text-[#22C55E]">guided path</span>.
              </h1>
              <p className="mt-4 text-gray-600 md:text-lg">
                Learn by building. Practice with real projects. Join a supportive
                community—all in one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/signup" className="rounded-lg bg-[#22C55E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16A34A] hover:no-underline">
                  Get started
                </Link>
                <Link to="/explore" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 text-gray-800 px-5 py-2.5 text-sm hover:bg-gray-200 hover:no-underline">
                  Explore curriculum
                </Link>
                <Link to="/signup" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-800 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 hover:no-underline">
                  Start Free
                </Link>
              </div>
            </div>

            {/* Right: Hero card */}
            <div className="relative">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,.06),0_1px_3px_rgba(16,24,40,.10)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Your next milestone
                  </h3>
                  <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-medium text-[#22C55E] ring-1 ring-green-100">
                    NEW
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Build a responsive landing page and deploy it—learn layouts,
                  components, and accessibility.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "Lessons", v: "42" },
                    { k: "Projects", v: "7" },
                    { k: "Hours", v: "~18" },
                  ].map(({ k, v }) => (
                    <div
                      key={k}
                      className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-4"
                    >
                      <div className="text-xl font-bold text-gray-900">{v}</div>
                      <div className="mt-1 text-[11px] tracking-wide text-gray-500">
                        {k}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-xl bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#16A34A]">
                  Continue learning
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Three pillars */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Learn */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">Learn</h3>
              <p className="text-gray-600">
                Follow a curated path that builds from fundamentals to advanced topics.
              </p>
            </div>

            {/* Build */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">Build</h3>
              <p className="text-gray-600">
                Create portfolio-ready projects and ship them with guidance.
              </p>
            </div>

            {/* Guided Path (card with badges + svg) */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow flex flex-col items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-[#22C55E] ring-1 ring-green-100 mb-2">
                Project-first learning
              </span>
              <h3 className="font-semibold text-lg mb-2 text-center">
                Level up your web dev skills with a clear,{" "}
                <span className="text-[#22C55E]">guided path</span>.
              </h3>
              <p className="text-gray-600 text-center mb-2">
                Learn by building. Practice with real projects. Join a supportive
                community—all in one place.
              </p>

              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                <a href="/signup" className="rounded-lg bg-[#22C55E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16A34A] hover:no-underline">
                  Get started
                </a>
                <a href="/explore" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 text-gray-800 px-5 py-2.5 text-sm hover:bg-gray-200 hover:no-underline">
                  Explore curriculum
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {[
                  "HTML & CSS",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Databases",
                  "APIs",
                  "Testing",
                  "Getting Hired",
                ].map((track) => (
                  <span
                    key={track}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
                  >
                    {track}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-center items-center w-full">
                <svg
                  width="340"
                  height="220"
                  viewBox="0 0 340 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="20" y="40" width="120" height="60" rx="12" fill="#22C55E" opacity="0.15" />
                  <rect x="60" y="100" width="180" height="40" rx="10" fill="#22C55E" opacity="0.08" />
                  <rect x="160" y="30" width="120" height="70" rx="14" fill="#22C55E" opacity="0.18" />
                  <rect x="110" y="60" width="120" height="80" rx="16" fill="#22C55E" opacity="0.25" />
                  <rect x="80" y="140" width="180" height="40" rx="10" fill="#22C55E" opacity="0.12" />
                  <g>
                    <rect x="70" y="70" width="60" height="30" rx="6" fill="#fff" stroke="#22C55E" strokeWidth="2" />
                    <rect x="210" y="60" width="60" height="30" rx="6" fill="#fff" stroke="#22C55E" strokeWidth="2" />
                    <rect x="130" y="120" width="80" height="30" rx="6" fill="#fff" stroke="#22C55E" strokeWidth="2" />
                    <rect x="160" y="80" width="40" height="20" rx="4" fill="#22C55E" opacity="0.7" />
                    <rect x="100" y="160" width="40" height="20" rx="4" fill="#22C55E" opacity="0.7" />
                    <rect x="200" y="160" width="40" height="20" rx="4" fill="#22C55E" opacity="0.7" />
                    <text x="100" y="88" fontSize="12" fill="#22C55E" fontWeight="bold">
                      HTML
                    </text>
                    <text x="220" y="78" fontSize="12" fill="#22C55E" fontWeight="bold">
                      JS
                    </text>
                    <text x="150" y="138" fontSize="12" fill="#22C55E" fontWeight="bold">
                      React
                    </text>
                  </g>
                  <ellipse cx="170" cy="210" rx="120" ry="10" fill="#22C55E" opacity="0.08" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
