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
        document.querySelectorAll('.body__bodyWrapper_navigationBox_toggleWords').forEach(elem => elem.classList.toggle('active'));
        this.setState({ activePage });
    }

    render() {
        return (
            <div className="body">
                <div className="body__bodyWrapper">
                    <div className="body__bodyWrapper_navigationBox">       
                        <button className="body__bodyWrapper_navigationBox_toggleWords active" onClick={() => this.toggleWordsClickHandler('Films')}>
                        Фильмы
                        </button>
                        <button className="body__bodyWrapper_navigationBox_toggleWords" onClick={() => this.toggleWordsClickHandler('Channels')}>
                        Телеканалы
                        </button>
                    </div>
                    <main className="body__bodyWrapper_bodyMain">
                    {this.state.activePage === 'Films' ? <Films /> : <Channels />}
                    </main>
                </div>
            </div>
        )
    }
}

export default Body;