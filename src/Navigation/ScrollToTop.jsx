import { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  function scrollBackTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return <div className="scroll-to-top-btn-container">{showScroll && <FaRegArrowAltCircleUp onClick={scrollBackTop} />}</div>;
}

export default ScrollToTop;
