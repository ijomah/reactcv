import React from "react";

const ProgressBar = ({progressLength, height} ) => {
    const parentCase = {
        height: height,
        width: '100px',
        backgroundColor: '#4a5354',
        borderRadius: 40,
        marginInline: 0.5,
        marginBlock: 2
    };

    const childCase = {
        height: '100%',
        width: `${progressLength}%`,
        backgroundColor: '#3BD9F5',
        borderRadius: 40,
        textAlign: 'right'
    };

    const progressText = {
        color: 'black',
        paddingInline: 3,
        paddingBlock: 0.001,
        fontWeight: 900
    }

    return (
            <div style={parentCase}>
                <div style={childCase}>
                    <span style={progressText}></span>
                </div>
            </div>
    )
}

export default ProgressBar