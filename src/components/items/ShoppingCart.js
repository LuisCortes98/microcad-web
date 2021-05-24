import React from 'react';

const ShoppingCart = () => {
    return (
        <div className="position-absolute top-0 right-0 h-100 bg-black column-between shopping-cart">
            <div className="bg-violet h-100 p-3">
                <div className="row-start align-items-center txt-white txt-16">
                    <i className="fas fa-shopping-bag"></i>
                    <div className="ml-2">Canasta</div>
                </div>
                <div className="position-relative h-100 w-100 row-center align-items-center txt-white txt-14">
                    <i className="fas fa-box-open"></i>
                    <div className="ml-2">
                        Está vacía
                    </div>
                </div>
            </div>
            <div className="bg-dark-violet p-3">
                <div className="column-start align-items-end txt-white txt-12">
                    <div className="row-between align-items-center w-100">
                        <div className="txt-medium">
                            Subtotal
                        </div>
                        <div className="txt-bold text-right">
                            $0.0
                        </div>
                    </div>
                    <div className="row-between align-items-center w-100">
                        <div className="txt-medium">
                            Descuento
                        </div>
                        <div className="txt-bold text-right">
                            $0.0
                        </div>
                    </div>
                    <div className="row-between align-items-center w-100">
                        <div className="txt-medium">
                            Total
                        </div>
                        <div className="txt-bold text-right">
                            $0.0
                        </div>
                    </div>
                    <div className="row-end align-self-end bg-violet rounded shadow py-3 px-5 c-pointer mt-3">
                        <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-center c-pointer mb-0">
                            COMPRAR
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart