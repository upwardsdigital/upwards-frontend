import React from "react";
import { Routes, Route } from "react-router-dom";

import PuffLoader from "react-spinners/PuffLoader";
// import Home from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";
import LazyImg from "./lazy-img/LazyImg";

const LazyHome = React.lazy(() => import("./pages/HomePage"));
const LazyHomePage = React.lazy(() => import("./pages/AboutUsPage"));
const LazyServices = React.lazy(() => import("./components/Services"));
const LazyOurWorks = React.lazy(() => import("./components/OurWorks"));
const LazyConnectWith = React.lazy(() => import("./components/ConnectWith"));
const LazyBlogPage = React.lazy(() => import("./pages/BlogPage"));
const LazyMoreBlog = React.lazy(() => import("./moreBlog/MoreBlog"));

function App() {
  return (
    <React.Suspense
      fallback={
        <div className="loading-page">
          <PuffLoader
            color={"#2037e8"}
            // loading={loading}
            size={100}
          />
        </div>
      }
    >
      <ScrollToTop />
      <LazyImg />
      <Header />
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route
          path="/AboutUs"
          element={
            <React.Suspense
              fallback={
                <div className="loading-page">
                  <PuffLoader
                    color={"#2037e8"}
                    // loading={loading}
                    size={100}
                  />
                </div>
              }
            >
              <LazyHomePage />
            </React.Suspense>
          }
        />
        <Route
          path="/Services"
          element={
            <React.Suspense
              fallback={
                <div className="loading-page">
                  <PuffLoader
                    color={"#2037e8"}
                    // loading={loading}
                    size={100}
                  />
                </div>
              }
            >
              <LazyServices />
            </React.Suspense>
          }
        />
        <Route
          path="/OurWorks"
          element={
            <React.Suspense
              fallback={
                <div className="loading-page">
                  <PuffLoader
                    color={"#2037e8"}
                    // loading={loading}
                    size={100}
                  />
                </div>
              }
            >
              <LazyOurWorks />
            </React.Suspense>
          }
        />
        <Route
          path="/ConnectWith"
          element={
            <React.Suspense
              fallback={
                <div className="loading-page">
                  <PuffLoader
                    color={"#2037e8"}
                    // loading={loading}
                    size={100}
                  />
                </div>
              }
            >
              <LazyConnectWith />
            </React.Suspense>
          }
        />
        <Route
          path="/Blog"
          element={
            <React.Suspense
              fallback={
                <div className="loading-page">
                  <PuffLoader
                    color={"#2037e8"}
                    // loading={loading}
                    size={100}
                  />
                </div>
              }
            >
              <LazyBlogPage />
            </React.Suspense>
          }
        />
        <Route
          path="/MoreBlog"
          element={
            <React.Suspense
              fallback={
                <div className="loading-page">
                  <PuffLoader
                    color={"#2037e8"}
                    // loading={loading}
                    size={100}
                  />
                </div>
              }
            >
              <LazyMoreBlog />
            </React.Suspense>
          }
        />
      </Routes>

      <Footer />
    </React.Suspense>
    //   )}
    // </div>
  );
}

export default App;
