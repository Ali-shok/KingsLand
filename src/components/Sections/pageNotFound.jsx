import React, {useState, useEffect} from "react";

const PageNotFound = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    const width = window.innerWidth;
    if (width >= 3840) return "4K";
    if (width >= 2560) return "2K";
    if (width >= 1024) return "iPad";
    if (width >= 768) return "mobile";
    return "smallMobile";
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = {
    textAlign: "center",
    marginTop: "80px",
    padding: "50px",
    minHeight: "calc(100vh - 18vh)",
  };

  switch (screenSize) {
    case "4K":
      style.marginTop = "160px";
      style.padding = "100px";
      style.minHeight = "calc(100vh - 11vh)";
      break;
    case "2K":
      style.marginTop = "80px";
      style.padding = "50px";
      style.minHeight = "calc(100vh - 14vh)";
      break;
    case "iPad":
      style.marginTop = "130px";
      style.padding = "60px";
      style.minHeight = "calc(100vh - 16vh)";
      break;
    case "mobile":
      style.marginTop = "100px";
      style.padding = "40px";
      style.minHeight = "calc(100vh - 16vh)";
      break;
    case "smallMobile":
      style.marginTop = "100px";
      style.padding = "20px";
      style.minHeight = "calc(100vh - 22vh)";
      break;
    default:
      break;
  }

  return (
    <div className="container" style={style}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default PageNotFound;
