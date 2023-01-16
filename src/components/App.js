import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import "../css/App.css";
import unsplash from "../apis/unsplash";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { photoList, collectionList } from "../actions";

const App = ({ keyWords, photoList, collectionList, collectionID }) => {
  // Requesting collections
  const fetchSomeCollections = async () => {
    const res = await unsplash.get("/collections", {
      params: {
        per_page: 30,
      },
    });
    collectionList(res.data);
  };

  fetchSomeCollections();

  // Requesting photos
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await unsplash.get("/search/photos", {
        params: {
          query: keyWords,
          per_page: 30,
        },
      });
      photoList(res.data.results);
    };

    fetchPhotos();
  }, [keyWords]);

  // Requesting one collection
  useEffect(() => {
    const fetchOneCollection = async () => {
      const res = await unsplash.get(`/collections/${collectionID}/photos`, {
        params: {
          per_page: 30,
        },
      });

      photoList(res.data);
    };

    if (collectionID) {
      fetchOneCollection();
    }
  }, [collectionID]);

  return (
    <div>
      <Header />
      <div id="sidebar-main-div" className="container-fluid">
        <div>
          <Sidebar />
        </div>
        <div>
          <MainContent />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { keyWords: state.keyWords, collectionID: state.collectionID };
};

export default connect(mapStateToProps, { photoList, collectionList })(App);
