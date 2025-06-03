import "../styles/BeautyBox.css";
import { useRef, useEffect } from "react";
import fitty from "fitty";

function BeautyBox() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const fitInstance = fitty(textRef.current);
      return () => fitInstance.unsubscribe();
    }
  }, []);

  return (
    <div className="beauty-box">
      <h1 className="header">
        SEWER <br />
        VINYL
      </h1>
    </div>
  );
}

export default BeautyBox;
