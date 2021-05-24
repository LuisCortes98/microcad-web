import React from 'react';

import { Link } from 'react-router-dom';

import Pin from '../items/Pin';

import engineering from '../../imgs/engineering.svg';
import industry from '../../imgs/industry.svg';
import movie from '../../imgs/movie.svg';
import design from '../../imgs/design.svg';
import office from '../../imgs/office.svg';

const Purpose = () => {

    const pinSize = 160;

    return (
        <div className="column-start align-items-center h-100 w-100">
            <div className="row-center align-items-center bg-clear-gray txt-dark-blue txt-semi-bold text-wrap txt-18 p-5 mx-5">
                Nos encanta que hayas llegado hasta este punto, estas a unos pocos pasos de llegar a tu recomendación.
            </div>
            <div className="w-100 text-center txt-semi-bold txt-20 txt-violet my-4">
                ¿Cuál es el propósito de la herramienta que estás buscando?
            </div>
            <div className="row-center align-items-enter flex-wrap my-2">
                <div className="column-start align-items-center col">
                    <Pin img={engineering} size={pinSize}/>
                    <Link to="/typeprojects" className="d-flex align-items-center bg-violet rounded shadow px-4 c-pointer mt-3 purpose-button">
                        <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-left c-pointer mb-0">
                            <p>ARQUITECTURA,</p>
                            <p>INGENIERÍA & CONSTRUCIÓN</p>
                        </div>
                    </Link>
                </div>
                <div className="column-start align-items-center mx-4 col">
                    <Pin img={industry} size={pinSize}/>
                    <div className="d-flex align-items-center bg-violet rounded shadow px-4 c-pointer mt-3 purpose-button">
                        <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-left c-pointer mb-0">
                            <p>INDUSTRIA &</p>
                            <p>MANUFACTURA</p>
                        </div>
                    </div>
                </div>
                <div className="column-start align-items-center col">
                    <Pin img={movie} size={pinSize}/>
                    <div className="d-flex align-items-center bg-violet rounded shadow px-4 c-pointer mt-3 purpose-button">
                        <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-left c-pointer mb-0">
                            <p>CINE &</p>
                            <p>VIDEO JUEGOS</p>
                        </div>
                    </div>
                </div>
                <div className="column-start align-items-center mx-4 col">
                    <Pin img={design} size={pinSize}/>
                    <div className="d-flex align-items-center bg-violet rounded shadow px-4 c-pointer mt-3 purpose-button">
                        <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-left c-pointer mb-0">
                            <p>DISEÑO GRÁFICO &</p>
                            <p>MULTIMEDIA</p>
                        </div>
                    </div>
                </div>
                <div className="column-start align-items-center col">
                    <Pin img={office} size={pinSize}/>
                    <div className="d-flex align-items-center bg-violet rounded shadow px-4 c-pointer mt-3 purpose-button">
                        <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-center c-pointer mb-0">
                            OFIMÁTICA
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purpose