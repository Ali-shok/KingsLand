import React, {useState, useEffect, useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";
import {Helmet} from "react-helmet";

const PageNotFound = () => {
  const {language} = useContext(LanguageContext);

  const translations = {
    en: {
      title: "404 - Page Not Found",
      message: "Sorry, the page you are looking for does not exist.",
    },
    ar: {
      title: "404 - الصفحة غير موجودة",
      message: "عذراً، الصفحة التي تبحث عنها غير موجودة.",
    },
  };

  const {title, message} = translations[language];

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
      style.minHeight = "calc(100vh - 23vh)";
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
    <div
      className={`${language === "ar" ? "arabic-text-amiri" : "sans-serif"}`}
      style={style}
    >
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
        <meta name="description" content={message} />
      </Helmet>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default PageNotFound;
