import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3  ">
        <h1 className="fs-2 text-center">People</h1>
      </div>
      <div
        className="row p-3  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6  text-center">
          <img
            src="media\AalokGupta.png"
            style={{ width: "50%", borderRadius: "100%" }}
          />
          <h4 className="mt-5">Aalok Gupta</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>
            Playing basketball is his zen.{" "}
            <p>
              Connect on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Homepage{" "}
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Twitter
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
