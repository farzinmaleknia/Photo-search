import React, { useState } from "react";
import { connect } from "react-redux";

import "../css/Sidebar.css";
import { collectionId } from "../actions";

const Sidebar = ({ collectionList, collectionId }) => {
  const [active, setActive] = useState("");

  const getCollectionID = (e) => {
    collectionId(e.target.dataset.id);
    setActive(e.target.dataset.id);
  };

  const collectionListRenderer = collectionList.map((item) => {
    return (
      <li onClick={getCollectionID} className="nav-item ml-3" key={item.id}>
        <a
          className={`nav-link ${
            active === item.id ? "active" : "simple-text"
          }`}
          href="#"
          data-id={item.id}
        >
          {item.title}
        </a>
      </li>
    );
  });

  return (
    <nav
      id="sidebar-nav"
      className="navbar navbar-expand-md navbar-light border"
    >
      <span id="navbar-brand2" className="navbar-brand">
        Collections
      </span>

      <button
        className="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#collapsable-nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsable-nav">
        <ul className="nav">{collectionListRenderer}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { collectionList: state.collectionList };
};

export default connect(mapStateToProps, { collectionId })(Sidebar);
