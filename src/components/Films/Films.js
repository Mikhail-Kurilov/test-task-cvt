import React from 'react';

import './Films.css';

class Films extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCard: ''
        }
    }
    
    toggleCardsHandler(activeCard) {
        document.querySelectorAll('.moviePicture').forEach(elem => elem.classList.toggle('active'));
        this.setState({ activeCard });
    }

    render() {
        const CLASS_BOX = 'movieBox';
        const classesComedy = `${CLASS_BOX} comedy`;
        const classesDramas = `${CLASS_BOX} dramas`;
        const classesScience = `${CLASS_BOX} scienceFiction`;
        const classesHorrors = `${CLASS_BOX} horrors`;
        
        return (
            <div className="Films">
                <div className="filmsWrapper">
                    <section className="newFilms">
                        <h2 className="newFilmsTitle"><img src="/new.png" alt="Новинки"></img></h2>
                        <ul className="filmsContainer">
                            <li className="movieItem">
                                <a className="hrefCat hrefCards" href="">
                                    <img src="/cat.png" alt="cat" className="moviePicture" id="catPic"></img> 
                                    <h3 className="filmsName">Мульт в кино. Выпуск №103. Некогда грустить!</h3>
                                </a>
                            </li>
                            <li className="movieItem">
                                <a className="hrefBatman hrefCards" href="">
                                    <img src="/batman.png" alt="batman" className="moviePicture" id="batPic"></img> 
                                    <h3 className="filmsName">Новый Бэтмен</h3>
                                </a>
                            </li>
                            <li className="movieItem">
                                <a className="hrefHollywood hrefCards" href="" >
                                    <img src="/holywood.png" alt="holywood" className="moviePicture active" id="woodPic" onMouseOver={() => this.toggleCardsHandler('Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.')}
                                    onMouseOut={() => this.toggleCardsHandler('')}></img> 
                                    <h3 className="filmsName">Однажды... в Голливуде</h3> 
                                </a>
                            </li>
                            <li className="movieItem">
                                <a className="hrefStrip hrefCards" href="">
                                    <img src="/strip.png" alt="strip" className="moviePicture" id="stripPic"></img> 
                                    <h3 className="filmsName">Стриптизёрши</h3>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="genre">
                        <h2 className="newFilmsTitle">Жанры</h2>
                        <ul className="genreContainer">
                            <li className={classesComedy}>
                                <a className="hrefComedy hrefGenres" href="">
                                    <img className="emoji" src="/smile.png" alt="smile"></img>
                                    <h3 className="emoTitle">Комедии</h3>
                                </a>
                            </li>
                            <li className={classesDramas}>
                                <a className="hrefDramas hrefGenres" href="">
                                    <img className="emoji" src="/cry.png" alt="cry"></img>
                                    <h3 className="emoTitle">Драмы</h3>
                                </a>                
                            </li>
                            <li className={classesScience}>
                                <a className="hrefScience hrefGenres" href="">
                                    <img className="emoji" src="/alien.png" alt="alien"></img>
                                    <h3 className="emoTitle">Фантастика</h3>
                                </a>
                            </li>
                            <li className={classesHorrors}>
                                <a className="hrefHorrors hrefGenres" href="">
                                    <img className="emoji" src="/ghost.png" alt="ghost"></img>
                                    <h3 className="emoTitle">Ужасы</h3>
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