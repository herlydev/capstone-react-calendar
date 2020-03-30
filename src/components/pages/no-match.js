import React from 'react';

import {Link} from "react-router-dom";

export default function () {
    return (
        <div>
            <h3>Page not found</h3>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}