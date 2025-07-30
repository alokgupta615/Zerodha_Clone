import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 p-3 ">
          <img src={imageUrl} />
        </div>
        <div className="col-2"></div>
        <div className="col-4  mt-5">
          <h3 className="mb-5 text-muted">{productName}</h3>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "50px" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\googlePlayBadge.svg" />
            </a>
            <a
              href={appStore}
              style={{ textDecoration: "none", marginLeft: "50px" }}
            >
              <img src="media\appstoreBadge.svg" />
            </a>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default LeftSection;
