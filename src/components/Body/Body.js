import React from 'react';
import Films from '../Films/Films';
import Channels from '../Channels/Channels';

import './Body.css';

class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'Films'
        }
    }

    render() {
        return (
            <div className="body">
                <div className="bodyWrapper">
                     <div className="navigationBox">       
                             <span className="toggleWords active" onClick={() =>  
                                 this.setState( {activePage: 'Films' })
                                }>
                                Фильмы
                             </span>
                             <span className="toggleWords" onClick={() =>             
                                 this.setState( {activePage: 'Channels' })
                                 }>
                                Телеканалы
                             </span>
                     </div>
                     <div className="bodyMain">
                        {this.state.activePage === 'Films' ? <Films /> : <Channels />}
                     </div>
                </div>
            </div>
        )
    }
}

export default Body;