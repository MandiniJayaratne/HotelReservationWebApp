import React, { useEffect, useRef } from "react";
import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error, reFetch } = useFetch(
    "/hotels/countByCity?cities=london,bali,las vegas"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="/images/london2.jpg"
              alt="London"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src="/images/bali.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Bali</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="/images/las.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Las Vegas</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
