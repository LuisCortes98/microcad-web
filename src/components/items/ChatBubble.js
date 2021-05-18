import React from 'react';

import profile from '../../imgs/profile.jpg';

const ChatBubble = () => {
    return (
        <a id="chat-bubble" className="row-start align-items-center position-fixed bottom-0 left-0 m-2 p-2 zindex-3 bg-dark-violet shadow c-pointer"
            href="https://wa.link/lj9s08">
            <div id="img-chat" className="row-center align-items-center bg-white rounded-pill c-pointer overflow-hidden">
                <img src={profile} alt="imagen de contacto"/>
            </div>
            <div className="column-between align-items-start mx-3 txt-white txt-10 c-pointer">
                <div className="txt-bold c-pointer">
                    ¿Tienes dudas?
                </div>
                <div className="txt-medium c-pointer">
                    Hablar con un asesor
                </div>
            </div>
        </a>
    )
}

export default ChatBubble