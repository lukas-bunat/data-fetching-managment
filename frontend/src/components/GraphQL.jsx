import React, { useState, useEffect } from 'react';

import Content from './Content';

function GraphQL () {
    const [ fetchedData, setFetchedData ] = useState("jfgdjfgdjfga");

    useEffect(() => {
    }, []);

    return (
        <div>
            <h2>GraphQL version</h2>
            <Content data={ fetchedData } />
        </div>
    );
}

export default GraphQL;