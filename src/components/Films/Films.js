import React from 'react';

import './Films.css';

class Films extends React.Component {

  

    render() {
        const classesComedy = 'movieBox comedy';
        const classesDramas = 'movieBox dramas';
        const classesScience = 'movieBox scienceFiction';
        const classesHorrors = 'movieBox horrors';
        return (
            <div className="Films">
                <div className="filmsWrapper">
                    <div className="newFilms">
                        <p className="newFilmsTitle">🔥 Новинки</p>
                        <div className="filmsContainer">
                            <div className="movieItem">
                                <img src="/cat.png" alt="cat" className="moviePicture"></img> 
                                <p className="filmsName">Мульт в кино. Выпуск №103. Некогда грустить!</p>
                            </div>
                            <div className="movieItem">
                                <img src="/batman.png" alt="batman" className="moviePicture"></img> 
                                <p className="filmsName">Новый Бэтмен</p>
                            </div>
                            <div className="movieItem">
                                <img src="/holywood.png" alt="holywood" className="moviePicture"></img> 
                                <p className="filmsName">Однажды... в Голливуде</p>
                            </div>
                            <div className="movieItem">
                                <img src="/strip.png" alt="strip" className="moviePicture"></img> 
                                <p className="filmsName">Стриптизёрши</p>
                            </div>
                        </div>
                    </div>
                    <div className="genre">
                        <p className="newFilmsTitle">Жанры</p>
                        <div className="genreContainer">
                            <div className={classesComedy}>
                                <p className="emoji">😁</p>
                                <p className="emoTitle">Комедии</p>
                            </div>
                            <div className={classesDramas}>
                                <p className="emoji">😭</p>
                                <p className="emoTitle">Драмы</p>
                            </div>
                            <div className={classesScience}>
                                <p className="emoji">👽</p>
                                <p className="emoTitle">Фантастика</p>
                            </div>
                            <div className={classesHorrors}>
                                <p className="emoji">👻</p>
                                <p className="emoTitle">Ужасы</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Films;