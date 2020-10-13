import React from 'react'
import { NavLink } from "react-router-dom";

const VocabContainer = (props) => {

    return(
    <div>
        <div>Vocab Activity Container</div>
        <NavLink to="/basic_vocab">Basic Vocabulary Activity</NavLink><br />
        <div>Advanced Level Vocab Activity</div>
    </div>
    )
}

export default VocabContainer