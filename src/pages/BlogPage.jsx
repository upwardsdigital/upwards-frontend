import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <m.div
      className="blog-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="title">
        <h1>Блог</h1>
        <img src="/images/blogPage/bg-img.png" />
      </div>

      <div className="flex">
        <div className="blogs">
          <div className="blog flex-end">
            <h4>Рекомендация Билл Гейтса</h4>
            <div>
              <Link to="/moreBlog">
                <button type="button" className="btn">
                  Подробнее...
                </button>
              </Link>
              <span>10 окт. 2022</span>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default BlogPage;
