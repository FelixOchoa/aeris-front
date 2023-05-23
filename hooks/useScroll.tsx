import { useState, useEffect, useRef } from "react";

const useScroll = () => {
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!showAnimation) {
        console.log("scrolling");
        const h1Element = ref.current;
        const rect = h1Element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          setShowAnimation(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, showAnimation]);

  return { showAnimation, ref };
};

export default useScroll;
