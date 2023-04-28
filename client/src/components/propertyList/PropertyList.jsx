import React from 'react';
import './PropertyList.css';
import useFetch from '../../hooks/useFetch';

const PropertyList = () => {
    const [data,loading,error]=useFetch("/hotels/countByType");

    const images=[
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",

        "https://images.unsplash.com/photo-1622199678430-1fd2123f0975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"


    ]
    return (
        <div className="pList">
        {loading ? ("loading"):(
            <>
            {data.length && 
            images.map((img,i)=>{
                return(
                <div className="pListItem" key={i}>
                <img src={img} alt=""  className="pListImg"/>
                <div className="pListTitles">
                    <h1>{data[i].type}</h1>
                    <h2>{data[i].count} {data[i].type}</h2>
                </div>
            </div>
                )
            })}
            </>
            )}
        </div>
    )
}

export default PropertyList
