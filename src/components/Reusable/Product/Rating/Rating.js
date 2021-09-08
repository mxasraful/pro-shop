import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import RegularStar from './RegularStar/RegularStar';

const Rating = ({ rating, id }) => {

    const unfilledRatings = 5 - rating

    return (
        <span className="">
            <>
                {
                    Array(rating).fill().map(() => (
                        <FontAwesomeIcon style={{ marginRight: "2px" }} icon={faStar} />
                    ))
                }
                {
                    unfilledRatings === 0 ?
                        ""
                        :
                        <>
                            {
                                unfilledRatings &&
                                <>
                                    {
                                        Array(unfilledRatings).fill().map(() => (
                                            <RegularStar />
                                        ))
                                    }
                                </>
                            }
                        </>
                }
            </>
        </span>
    );
};

export default Rating;