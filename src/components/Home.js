import React from 'react';

import { Input, InputGroup } from 'rsuite';

import Pin from './items/Pin';

import thinking from '../imgs/thinking.svg';
import go from '../imgs/go.svg';

const Home = () => {
    return (
        <div className="column-between align-items-center h-100 w-100">
            <div className="column-center align-items-center h-100">
                <div className="txt-semi-bold txt-violet txt-20 text-center">¿Sabes que software quieres?</div>
                <div className="row-start align-items-start my-4 w-75">
                    <div className="column-between align-items-center col-6 h-100">
                        <div className="column-center align-items-center">
                            <Pin img={thinking} imgMargin="ml-4"/>
                            <div className="txt-medium txt-dark-blue txt-12 w-75 my-3 text-wrap">
                                Si aún no estás seguro de cuál es el software ideal para ti, podemos recomendarte algunos.
                            </div>
                        </div>
                        <div className="row-center align-items-center bg-violet rounded shadow w-75 py-3 c-pointer">
                            <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-center c-pointer mb-0">
                                COMENZAR CON MI DIAGNÓSTICO
                            </div>
                        </div>
                    </div>
                    <div className="column-between align-items-center col-6 h-100">
                        <div className="column-center align-items-center ">
                            <Pin img={go} imgMargin="mr-3"/>
                            <div className="txt-medium txt-dark-blue txt-12 w-50 my-3 text-wrap">
                                Si ya sabes cuál es el software que necesitas, no esperes más.
                            </div>
                        </div>
                        <div className="row-end align-items-center bg-violet rounded shadow w-50 py-3 c-pointer">
                            <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-center c-pointer mb-0">
                                IR A LA TIENDA ONLINE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column-center align-items-center bottom-0 bg-clear-gray w-100 py-4">
                <div> 
                    <div className="txt-semi-bold txt-violet txt-14 d-inline-flex my-3">¿Ya habías hecho esto antes? Continúa tu proceso</div>
                    <InputGroup inside>
                        <InputGroup.Addon>
                            <i className="fa fa-envelope txt-16 txt-clear-violet c-pointer"></i>
                        </InputGroup.Addon>
                        <Input />
                        <InputGroup.Button>
                            <i className="fa fa-arrow-circle-right txt-20 txt-violet c-pointer"></i>
                        </InputGroup.Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default Home