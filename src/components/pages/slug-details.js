import React from 'react';


export default function(props) {
    return (
        <div className="page">
            <h1>Slug details for {props.match.params.slug}</h1>
            <div>This is a page for {props.match.params.slug}</div>
            
        </div>
    )
}