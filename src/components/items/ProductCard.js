import React from 'react'

import imgProduct from '../../imgs/3MAX.svg';

const ProductCard = () => {
    return (
        <div className="column-between rounded m-2 overflow-hidden">
            <img src={imgProduct} height="200" width="200"/>
            <div className="column-start align-items-start txt-white bg-violet py-2 px-3">
                <div className="txt-bold txt-10 m-0">
                    Lorem ipsum
                </div>
                <div className="txt-medium txt-10 my-2">
                    Categoría
                </div>
                <div className="row-start align-items-center txt-10 txt-medium">
                    <i className="fas fa-user mr-2"/>
                    <div>$5.000.000</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
