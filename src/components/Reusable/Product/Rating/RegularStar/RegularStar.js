import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons/faStar';

const RegularStar = () => {
    return (
        <FontAwesomeIcon style={{marginRight: "2px"}} icon={faStar} />
    );
};

export default RegularStar;