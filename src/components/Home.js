import React from 'react';

const Home = () => {
    return (
        <div className="column-center align-items-center h-100 w-100">
            <div className="txt-semi-bold txt-violet txt-30">¿Sabes que software quieres?</div>
            <div className="position-fixed column-center align-items-center bottom-0 bg-clear-gray w-100 py-4">
                <div className="txt-semi-bold txt-violet txt-18">¿Ya habías hecho esto antes? Continúa tu proceso?</div>
                <div className="row-start align-items-center input rounded py-2 pl-3 pr-2 my-3 col-4">
                    <input class="input input-text txt-violet txt-12 txt-regular" type="email" placeholder="Correo electrónico"></input>
                    <i className="fa fa-chevron-circle-right txt-20 txt-violet c-pointer"></i>
                </div>
                
            </div>
        </div>
    )
}

export default Home;