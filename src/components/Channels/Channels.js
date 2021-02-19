import React from 'react';


import './Channels.css';

class Channels extends React.Component {

    
    render() {
        return (
            <div className="Channels">
                <div className="channelsContainer">
                    <div className="channelBox">
                        <div className="imgBox">
                            <img src="/1channel.png" alt="1 канал" className="logo1"></img>
                        </div>
                        <span className="channelTextBox">
                            Первый канал
                            <ul>
                                <li className="progListFirst"><p className="time">13:00</p><p>Новости (с субтитрами)</p></li>
                                <li className="progList"><p className="time">14:00</p><p>Давай поженимся</p></li>
                                <li className="progList"><p className="time">15:00</p><p>Другие новости</p></li>
                            </ul>
                        </span>
                    </div>
                    <div className="channelBox">
                        <div className="imgBox">
                            <img src="/2x2.png" alt="2x2" className="logo2x2"></img>
                        </div>
                        <span className="channelTextBox">
                            2x2
                            <ul>
                                <li className="progListFirst"><p className="time">13:00</p><p>МУЛЬТ ТВ. Сезон 4, 7 серия</p></li>
                                <li className="progList"><p className="time">14:00</p><p>ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</p></li>
                                <li className="progList"><p className="time">15:00</p><p>БУРДАШЕВ. Сезон 1, 20 серия</p></li>
                            </ul>
                        </span>
                    </div>
                    <div className="channelBox">
                        <div className="imgBox">
                            <img src="/rbc.png" alt="rbc" className="rbcLogo"></img>
                        </div>
                        <span className="channelTextBox">
                            РБК
                            <ul>
                                <li className="progListFirst"><p className="time">13:00</p><p>ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС</p></li>
                                <li className="progList"><p className="time">14:00</p><p>ДЕНЬ. Главные темы</p></li>
                                <li className="progList"><p className="time">15:00</p><p>Главные новости</p></li>
                            </ul>
                        </span>
                    </div>
                    <div className="channelBox">
                        <div className="imgBox">
                            <img src="/amedia.png" alt="Amedia" className="amediaLogo"></img>
                        </div>
                        <span className="channelTextBox">
                            AMEDIA PREMIUM
                            <ul>
                                <li className="progListFirst"><p className="time">13:00</p><p>Клиент всегда мёртв</p></li>
                                <li className="progList"><p className="time">14:00</p><p>Голодные игры: Сойка-пересмешница. Часть I</p></li>
                                <li className="progList"><p className="time">15:00</p><p>Секс в большом городе</p></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Channels;