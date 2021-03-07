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

    toggleWordsClickHandler(activePage) {
        document.querySelectorAll('.toggleWords').forEach(elem => elem.classList.toggle('active'));
        this.setState({ activePage });
    }

    render() {
        return (
            <div className="body">
                <div className="bodyWrapper">
                    <div className="navigationBox">       
                        <button className="toggleWords active" onClick={() => this.toggleWordsClickHandler('Films')}>
                        Фильмы
                        </button>
                        <button className="toggleWords" onClick={() => this.toggleWordsClickHandler('Channels')}>
                        Телеканалы
                        </button>
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