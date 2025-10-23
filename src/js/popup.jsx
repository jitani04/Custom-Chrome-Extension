import React from "react";
import ReactDOM from "react-dom";

const WEB_APP_URL = "https://www.google.com"; // change to your web app URL

function PopupApp() {
  const openWebApp = () => {
    if (chrome && chrome.tabs && chrome.tabs.create) {
      chrome.tabs.create({ url: WEB_APP_URL });
    } else {
      window.open(WEB_APP_URL, "_blank");
    }
  };

  return (
    <div style={{ padding: 12, width: 280 }}>
      <h1 style={{ margin: 0, fontSize: 18 }}>Helper</h1>
      <p style={{ marginTop: 8 }}>React popup (MV3)</p>
      <button onClick={openWebApp} style={{ marginTop: 12, padding: "8px 12px" }}>
        Open Web App
      </button>
    </div>
  );
}

const container = document.getElementById("root");
if (container) {
  ReactDOM.render(<PopupApp />, container);
}


