import React from "react";

function Hero() {
  return (
    <div className="container mb-5  ">
      <div className="row text-center mt-5 p-5">
        <h1 className="fs-3">Charges</h1>
        <h4 className="fs-5 text-muted mt-3 mb-5">
          List of all charges and taxes
        </h4>
      </div>
      <div className="row">
        <div className="col-4 p-5">
          <img src="\media\pricingEquity.svg" style={{ width: "70%" }} />
          <h3 className="mt-5 text-muted">Free equity delivery</h3>
          <p className="mt-3 text-muted">
            All equity delivery investments (NSE, BSE), <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="\media\intradayTrades.svg" style={{ width: "70%" }} />
          <h3 className="mt-5 text-muted">Intraday and F&O trades</h3>
          <p className="mt-3 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br /> executed order on intraday trades across
            <br />
            equity, currency, and commodity trades. Flat
            <br />
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="\media\pricingEquity.svg" style={{ width: "70%" }} />
          <h3 className="mt-5 text-muted">Free direct MF</h3>
          <p className="mt-3 text-muted">
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
