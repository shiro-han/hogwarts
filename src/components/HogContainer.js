import React from 'react';
import HogCard from './HogCard';

const HogContainer = (props) => {
    return(
    <div className="ui grid container link cards">{props.hogs.map(hog => <HogCard hog={hog} />)}</div>
    )
}

export default HogContainer;