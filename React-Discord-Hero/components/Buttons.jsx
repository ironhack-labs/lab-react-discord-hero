import React from 'react';

function Buttons() {
    return (
        <>
            <button className="Download" onClick={onClick}>
                {children}
            </button>
            <button className="OpenBrowser" onclick={onClick}>
                {children}
            </button>

        </>
    )
}

export default Buttons;