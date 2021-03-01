import React from 'react';

const StrengthPassword = ({passLength}) => {
    let colorLength = "#1E2841";
    let widthLength;
    switch (true) {
        case (passLength <= 2):
            colorLength = "#1E2841";
            widthLength = "0%"
            break;
        case (passLength >= 3 && passLength <= 5):
            colorLength = "red";
            widthLength = "26%"
            break;
        case (passLength >= 5 && passLength <= 7):
            colorLength = "orange";
            widthLength = "50%"
            break;
        case (passLength >= 7):
            colorLength = "green";
            widthLength = "100%"
            break;
        default:
            colorLength = "unset";
            widthLength = "unset"
    }

    return (
        <div className='strengthLength' style={{borderBottom: `solid 5px ${colorLength}`, width: widthLength  }}>

        </div>
    );
};

export default StrengthPassword;