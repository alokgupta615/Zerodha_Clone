import React from "react";
function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media\largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in;
          </p>
          <div className="row ">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivates</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Security </p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media\pressLogos.png"
            alt="presslogo"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
