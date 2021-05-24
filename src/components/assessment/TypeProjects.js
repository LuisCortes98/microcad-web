import React from 'react';

import { Fragment } from 'react';

import Pin from '../items/Pin';
import ShoppingCart from '../items/ShoppingCart';
import ProductCard from '../items/ProductCard';

import engineering from '../../imgs/engineering.svg';
import industry from '../../imgs/industry.svg';
import movie from '../../imgs/movie.svg';


const TypeProjects = () => {

    const pinSize = 160;

    return (
        <Fragment>
            <ShoppingCart/>
            <div className="column-start align-items-center h-100 w-100 multiple-background py-4 margin-cart">
                <div className="txt-semi-bold txt-violet txt-20 text-center">
                    ¿En que tipo de proyectos te especializas?
                </div>
                <div className="txt-semi-bold txt-dark-blue txt-16 text-wrap py-3 px-5">
                    A medida que vayas avanzando en las preguntas, irán apareciendo en la parte inferior de la pantalla las diferentes soluciones que se acomodan a tu necesidad. Sigue adelante para que tus opciones sean cada vez más precisas.
                </div>
                <div className="row-center align-items-enter flex-wrap my-4 w-100">
                    <div className="column-start align-items-center col">
                        <Pin img={engineering} size={pinSize}/>
                        <div className="d-flex align-items-center bg-violet rounded shadow py-3 px-4 c-pointer mt-3">
                            <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-left c-pointer mb-0">
                                EDIFICACIÓN
                            </div>
                        </div>
                    </div>
                    <div className="column-start align-items-center col">
                        <Pin img={industry} size={pinSize}/>
                        <div className="d-flex align-items-center bg-violet rounded shadow py-3 px-4 c-pointer mt-3">
                            <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-left c-pointer mb-0">
                                INFRAESTRUCTURA
                            </div>
                        </div>
                    </div>
                    <div className="column-start align-items-center col">
                        <Pin img={movie} size={pinSize}/>
                        <div className="d-flex align-items-center bg-violet rounded shadow py-3 px-4 c-pointer mt-3">
                            <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-left c-pointer mb-0">
                                ÚTILES
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-between align-items-enter flex-wrap p-3 w-100">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </Fragment>
    )
}

export default TypeProjects