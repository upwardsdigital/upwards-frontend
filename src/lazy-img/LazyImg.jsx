import React, {useEffect} from "react";

const LazyImg = () => {
  useEffect(() => {
    const imgElements = document.querySelectorAll("img[data-src]");
    const lazyLoadingImage = (entries, observer) => {
      // console.log(entries);
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener("load", () => {
          entry.target.classList.remove("lazy-img");
        });
      });
    };

    const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
      threshold: 0.9,
    });

    imgElements.forEach((img) => lazyLoadingObserver.observe(img));
  }, []);
};

export default LazyImg;
