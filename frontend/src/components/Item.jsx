import React from "react";


export const Item = ({
  img,
  description,
  name,
  price,
  increaseCount,
  decreaseCount,
  countItem
}) => {

  return (
    <>
      <img
        src={img}
        className="img-items card-img-top d-flex justify-content-center"
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="description-card card-text fw-normal">{description}</p>
        <h5 className="price fw-bold mt-2">Price: $ {price}</h5>
      </div>
      <div className="card-footer bg-light text-center">
        <div className="d-flex justify-content-between align-items-center p-2 m-2 border rounded">
          <button
            onClick={decreaseCount}
            className="btn btn-secondary fw-bold fs-5 ps-3 pe-3"
          >
            -
          </button>
          <span>{countItem}</span>
          <button
            onClick={increaseCount}
            className="btn btn-secondary fw-bold fs-5 ps-3 pe-3"
          >
            +
          </button>
        </div>
       
      </div>
    </>
  );
};
