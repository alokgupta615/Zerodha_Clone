import React from "react";

function Universe() {
  return (
    <div className="container mb-5 border-bottom text-center ">
      <div className="row text-center mt-5 p-5">
        <h5 className="mb-5 text-muted">
          Want to know more about our technology stack? Check out the
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h5>
        <h1 className="fs-2 mt-5 text-muted">The Zerodha Universe</h1>
        <p className="fs-6 text-muted mt-3" style={{ fontSize: "14px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media\smallcaseLogo.png" />
          <p className="text-small text-muted " style={{ fontSize: "14px" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\zerodhaFundhouse.png" style={{ width: "50%" }} />
          <p className="text-small text-muted">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\streakLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted" style={{ fontSize: "14px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\goldenpiLogo.png" />
          <p className="text-small text-muted " style={{ fontSize: "14px" }}>
            "Golden Pi – Smart Investments. Golden Returns." "Precision in
            Numbers. Profit in Action." "Shaping Your Wealth with Golden
            Precision."
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\dittoLogo.png" style={{ width: "35%" }} />
          <p className="text-small text-muted " style={{ fontSize: "14px" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\sensibullLogo.svg" style={{ width: "70%" }} />
          <p className="text-small text-muted " style={{ fontSize: "14px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
      </div>
      <button
        className="p-2 btn btn-primary fs-5 mb-5 sm-"
        style={{ width: "15%", margin: "0 auto" }}
      >
        Signup up for free
      </button>
    </div>
  );
}

export default Universe;
