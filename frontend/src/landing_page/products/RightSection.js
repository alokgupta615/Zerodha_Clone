import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-1 "></div>
        <div className="col-4 p-5 mt-5">
          <h3 className="mb-5 text-muted align-items-center">{productName}</h3>
          <p className="text-muted">{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            {learnMore}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-5 ">
          <img src={imageUrl} />
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default RightSection;
