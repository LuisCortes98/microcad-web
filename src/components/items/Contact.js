import React from 'react';

import { Input, InputGroup } from 'rsuite';

const Contact = () => {
    return (
    <div className="column-start contact">
        <div className="txt-violet txt-semi-bold txt-18 mt-5 mb-3 ml-3">
            Datos de contacto
        </div>
        <div className="row-center align-items-center flex-wrap">
            <div className="col-6">
                <InputGroup inside>
                    <InputGroup.Addon>
                        <i className="fa fa-align-left txt-12 txt-clear-violet"></i>
                    </InputGroup.Addon>
                    <Input
                        placeholder="Nombres"/>
                </InputGroup>
            </div>
            <div className="col-6">
                <InputGroup inside>
                    <InputGroup.Addon>
                        <i className="fa fa-align-left txt-12 txt-clear-violet"></i>
                    </InputGroup.Addon>
                    <Input
                        placeholder="Apellidos"/>
                </InputGroup>
            </div>
        </div>
        <div className="row-center align-items-center flex-wrap">
            <div className="col-12">
                <InputGroup 
                    inside
                    className="my-3">
                    <InputGroup.Addon>
                        <i className="fa fa-envelope txt-12 txt-clear-violet"></i>
                    </InputGroup.Addon>
                    <Input
                        placeholder="Correo electrónico"/>
                </InputGroup>
            </div>
        </div>
        <div className="row-center align-items-center flex-wrap">
            <div className="col-12">
                <InputGroup 
                    inside>
                    <InputGroup.Addon>
                        <i className="fa fa-mobile txt-12 txt-clear-violet"></i>
                    </InputGroup.Addon>
                    <Input
                        placeholder="Teléfono"/>
                </InputGroup>
            </div>
        </div>
        <div className="row-end align-self-end bg-violet rounded shadow py-3 px-4 c-pointer mt-3 mx-3">
            <div className="txt-bold txt-white txt-10 align-items-center justify-content-center text-center c-pointer mb-0">
                CONTINUAR
            </div>
        </div>
    </div>
    )
}

export default Contact