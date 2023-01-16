import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "../css/Header.css";
import { keyWords } from "../actions";

const Header = (props) => {
  const [term, setTerm] = useState("");
  const [delayedTerm, setDelayedTerm] = useState("hello world");

  // Input onChange logic
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDelayedTerm(term);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    if (delayedTerm) {
      props.keyWords(delayedTerm);
    }
  }, [delayedTerm]);

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    /* Navbar */
    <div className="container-fluid bg-dark text-white py-1 sticky-top">
      <nav className="navbar navbar-expand-sm justify-content-between">
        <a href="#" className="text-white navbar-brand">
          <strong>Photo Search</strong>
        </a>

        {/* Search bar */}
        <form
          id="search-form"
          className="form-inline w-50"
          onSubmit={onFormSubmit}
        >
          <input
            className="form-control form-control-sm rounded-0 w-75"
            type="text"
            placeholder="Search here"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="btn btn-sm btn-secondary mx-1 rounded-0">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default connect(null, { keyWords })(Header);
