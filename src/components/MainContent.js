import React from "react";
import { connect } from "react-redux";

import "../css/MainContent.css";

const MainContent = ({ photoList }) => {
  // For rendernig photos in three columns
  const photos1 = photoList.map((photo, i) => {
    if (photoList.length > 10 && i < 10) {
      return (
        <a key={photo.id} href={photo.urls.regular}>
          <img
            className="img-fluid"
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        </a>
      );
    }
  });

  const photos2 = photoList.map((photo, i) => {
    if (photoList.length > 20 && 9 < i && i < 20) {
      return (
        <a key={photo.id} href={photo.urls.regular}>
          <img
            className="img-fluid"
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        </a>
      );
    }
  });

  const photos3 = photoList.map((photo, i) => {
    if (19 < i) {
      return (
        <a key={photo.id} href={photo.urls.regular}>
          <img
            className="img-fluid"
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        </a>
      );
    }
  });

  return (
    <div id="photo-container" className="row">
      <div className="column">{photos1}</div>
      <div className="column">{photos2}</div>
      <div className="column">{photos3}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { photoList: state.photoList };
};

export default connect(mapStateToProps)(MainContent);
