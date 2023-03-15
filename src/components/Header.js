import React from "react";

export default function Header(props) {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" 
                id="navbarTogglenavbarSupportedContent4rDemo01">
          <ul className="space-x-4 list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
            <li className="nav-item">
              {" "}
              <button
                className="btn btn-link nav-link" 
                onClick={() => props.setPage("about")}
              >
                about
              </button>
            </li>
            <li className="nav-item">
              {" "}
              <button
                className="btn btn-link nav-link"
                onClick={() => props.setPage("portfolio")}
              >
                portfolio
              </button>
            </li>
            <li className="nav-item">
              {" "}
              <button
                className="btn btn-link nav-link"
                onClick={() => props.setPage("contact")}
              >
                contact me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
