import React from "react";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <a href="/">
          <img className="logo" src="/images/logo.png" />
        </a>
        <div className="content">
          <div className="not-found-robot">
            <img className="robot-img" src="/images/notFoundImage.png" />
          </div>
          <div className="not-found-text">
            <a href="/" className="flex">
              <h2>Вернуть на главную страницу</h2>
              <img src="/images/notFoundArrow.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
