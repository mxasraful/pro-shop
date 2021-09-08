import React from 'react';

const Message = ({ message, variant }) => {
    return (
        <>
            {
                variant === 'simple' ?
                    <div className="text-center">
                        {message}.
                    </div>
                    :
                    <div className="text-center d-flex justify-content-center">
                        <div className={`alert alert-${variant}`}>
                            <div className="alert-body">
                                {message}.
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

Message.defaultProps ={
    variant: "simple",
    message: "Not found"
}

export default Message;