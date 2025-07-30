import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#424242", color: "white" }}
    >
      {/* #3385ff */}
      <div className="row mb-5 p-5">
        <div className="col-1"></div>
        <div className="col-2">
          <p className="fs-5">Support Portal</p>
        </div>
        <div className="col-6"></div>
        <div className="col-2">
          <p className="fs-5">Tracks Tickets</p>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-5 p-5">
        <div className="col-1"></div>
        <div className="col-5">
          <h4>
            Search for an answeror browse help topics to <br />
            create a ticket
          </h4>
          <input
            type="text"
            placeholder="Eg.how do I acivate F&O"
            style={{ width: "90%", height: "60px", borderRadius: "10px" }}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h3>Featured</h3>
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            1.Current takeovers andDelisting-january 2024
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", color: "white" }}>
            2.latest intraday leverage- MIS & CO
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
