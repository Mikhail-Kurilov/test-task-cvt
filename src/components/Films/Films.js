import React from 'react';

import './Films.css';

class Films extends React.Component {

    render() {
        const CLASS_BOX = 'films__filmsWrapper_genre_genreContainer_movieBox';
        const classesComedy = `${CLASS_BOX} comedy`;
        const classesDramas = `${CLASS_BOX} dramas`;
        const classesScience = `${CLASS_BOX} scienceFiction`;
        const classesHorrors = `${CLASS_BOX} horrors`;
        
        return (
            <div className="films">
                <div className="films__filmsWrapper">
                    <section className="films__filmsWrapper_newFilms">
                        <h2 className="films__filmsWrapper_newFilms_newFilmsTitle"><img className="films__filmsWrapper_newFilms_newFilmsTitle_fireIco" src="/fire-ico.png" alt="Новинки" />Новинки</h2>
                        <ul className="films__filmsWrapper_newFilms_filmsContainer">
                            <li className="films__filmsWrapper_newFilms_filmsContainer_movieItem">
                                <a className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards" href="">
                                    <img src="/cat.png" alt="cat" className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_moviePicture" id="catPic"></img> 
                                    <h3 className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_filmsName">Мульт в кино. Выпуск №103. Некогда грустить!</h3>
                                </a>
                            </li>
                            <li className="films__filmsWrapper_newFilms_filmsContainer_movieItem">
                                <a className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards" href="">
                                    <img src="/batman.png" alt="batman" className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_moviePicture" id="batPic"></img> 
                                    <h3 className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_filmsName">Новый Бэтмен</h3>
                                </a>
                            </li>
                            <li className="films__filmsWrapper_newFilms_filmsContainer_movieItem">
                                <a className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards" href="" >
                                    <div className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_moviePicture" id="woodPic" data-title='Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.'>
                                        <div className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_moviePicture_wrapper"></div>
                                        <img className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_moviePicture_holywood" src="/holywood.png" alt="holywood" />
                                    </div>
                                    <h3 className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_filmsName">Однажды... в Голливуде</h3> 
                                </a>
                            </li>
                            <li className="films__filmsWrapper_newFilms_filmsContainer_movieItem">
                                <a className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards" href="">
                                    <img src="/strip.png" alt="strip" className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_moviePicture" id="stripPic"></img> 
                                    <h3 className="films__filmsWrapper_newFilms_filmsContainer_movieItem_hrefCards_filmsName">Стриптизёрши</h3>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="films__filmsWrapper_genre">
                        <h2 className="films__filmsWrapper_genre_newFilmsTitle">Жанры</h2>
                        <ul className="films__filmsWrapper_genre_genreContainer">
                            <li className={classesComedy}>
                                <a className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres" href="">
                                    <img className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres_emoji" src="/smile.png" alt="smile"></img>
                                    <h3 className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres_emoTitle">Комедии</h3>
                                </a>
                            </li>
                            <li className={classesDramas}>
                                <a className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres" href="">
                                    <img className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres_emoji" src="/cry.png" alt="cry"></img>
                                    <h3 className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres_emoTitle">Драмы</h3>
                                </a>                
                            </li>
                            <li className={classesScience}>
                                <a className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres" href="">
                                    <img className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres_emoji" src="/alien.png" alt="alien"></img>
                                    <h3 className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres_emoTitle">Фантастика</h3>
                                </a>
                            </li>
                            <li className={classesHorrors}>
                                <a className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres" href="">
                                    <img className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres_emoji" src="/ghost.png" alt="ghost"></img>
                                    <h3 className="films__filmsWrapper_genre_genreContainer_movieBox_hrefGenres_emoTitle">Ужасы</h3>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default Films;