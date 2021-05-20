import React from 'react'


const Pin = ({img, imgMargin, size}) => {
    return (
        <div className="row-center align-items-center bg-clear-gray rounded-pill pin" style={{height: size, width:size}}>
            <img src={img} className={`w-50 h-50 ${imgMargin}`} />
        </div>
    )
}

export default Pin;