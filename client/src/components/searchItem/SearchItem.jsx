import React from 'react';
import './SearchItem.css';

function SearchItem() {
  return (
    <div className="searchItem">
      <img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="room" className="siImg" />

      <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from Center</span>
          <span className="siTaxiOp">Free Airport Taxi</span>
          <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
          <span className="siFeatures">Entire Studio - 1 bathroom - 21m<sup>2</sup> 1 full bed</span>
          <span className="siCancelOp">Free Cancellation</span>
          <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
          <div className="siRating">
              <span>Excellent</span>
              <button>9.2</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">&#8377; 4500/-</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See Availablility</button>
          </div>
      </div>
    </div>
  )
}

export default SearchItem
