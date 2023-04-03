import React from "react";

export default function Header(props) {
  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Maia Ferrer</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">

          <li tabIndex={0}>

            <li>
              {" "}
              <button
                onClick={() => props.setPage("about")}
              >
                about
              </button>
            </li>

            <li>
              {" "}
              <button
                onClick={() => props.setPage("portfolio")}
              >
                portfolio
              </button>
            </li>

            <li>
              {" "}
              <button
                onClick={() => props.setPage("contact")}
              >
                contact me
              </button>
            </li>
            
          </li>
        </ul>
      </div>
    </div>
  );
}
