import React from "react";

function ErrorPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Oops!! Page Not Found
      </h1>
    </div>
  );
}

export default ErrorPage;
