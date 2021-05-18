import React from 'react';

import Contact from '../items/Contact'

const Info = () => {
    return (
        <div className="column-start align-items-center h-100 w-100">
            <div className="row-center align-items-center bg-clear-gray px-5">
                <div className="txt-dark-blue txt-semi-bold text-wrap txt-18 py-5 px-5">
                    ¡Bienvenido! Durante este ejercicio que realizarás a continuación, responderás algunas preguntas que te ayudarán a identificar, según tu perfil y tus necesidades, cuáles herramientas pueden ser las más indicadas para ti. Como este ejercicio es individual, debemos comenzar por saber quién eres.
                </div>            
            </div>
            <Contact/>
        </div>
    )
}

export default Info