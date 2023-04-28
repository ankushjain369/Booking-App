import React from 'react';
import './Featured.css';
import useFetch from '../../hooks/useFetch';

const Featured = () => {

  const {data,loading,error}=useFetch("/hotels/countByCity?cities=dubai,malaysia,london")

  if (error) {
    return <div className="featuredError">Error fetching data. Please try again later.</div>;
  }
  
  return (
    <div className="featured">
      {loading ? ("Loading please Wait"):(
        <>
        <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="Dubai" />
        <div className="featuredTitles">
            <h1>Dubai</h1>
            <h2>{data[0]} Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1508062878650-88b52897f298?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="Malaysia" />
        <div className="featuredTitles">
            <h1>Malaysia</h1>
            <h2>{data[1]} Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1539400504539-7918aa66f657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="London" />
        <div className="featuredTitles">
            <h1>London</h1>
            <h2>{data[2]} Properties</h2>
        </div>
      </div>
      </>)}
    </div>
  )
}

export default Featured
