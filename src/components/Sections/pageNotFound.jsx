import React from "react";

const PageNotFound = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: "80px",
        textAlign: "center",
        padding: "50px",
        minHeight: "calc(100vh - 18vh)",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default PageNotFound;
