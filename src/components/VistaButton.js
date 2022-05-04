import { useState } from 'react';

import './styles/VistaButton.css';

function VistaButton(props) {
    const [selected, set_selected] = useState(0)
    return (
        <div className='vista-button-container'>
            <button onClick={() => {
                props.set_view(0);
                set_selected(0);
                }}>
                <img src="/images/view_list_black_24dp.svg" className={ selected === 0 ? 'active-view' : null }/>
            </button>
            <button onClick={() => {
                props.set_view(1);
                set_selected(1);
                }}>
                <img src="/images/grid_view_black_24dp.svg" className={ selected === 1 ? 'active-view' : null }/>
            </button>
            <span> Vista </span>
        </div>  
    );
}

export default VistaButton;