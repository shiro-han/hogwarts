import React from 'react';

const SortForm = (props) => {
    return(
        <div>
        <form>
            <label>Filter Greased Hogs? </label>
            <input onChange={props.checkHandler} type="checkbox" value="greased" checked={props.greased}/>
            <br/>
            <strong>Sort by:</strong>
            <label> Name </label>
            <input onChange={props.radioHandler} type="radio" value='Name' checked={props.radioBool('Name')} />
            <label> Weight </label>
            <input onChange={props.radioHandler} type="radio" value='Weight' checked={props.radioBool('Weight')} />
        </form>
        <br/>
        </div>
    )
}

export default SortForm;