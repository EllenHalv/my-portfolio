import { useState, useEffect } from 'react'
import SingleCard from '../components/game/SingleCard'
import styles from './Game.module.css';

const cardImages = [
    { "src": "../images/game/frontman.png", matched: false },
    { "src": "../images/game/circle.png", matched: false },
    { "src": "../images/game/square.png", matched: false },
    { "src": "../images/game/star.png", matched: false },
    { "src": "../images/game/triangle.png", matched: false },
    { "src": "../images/game/umbrella.png", matched: false },
]

// Space animal cards
/*
const cardImages = [
    { "src": "../images/fox.png", matched: false },
    { "src": "../images/racoon.png", matched: false },
    { "src": "../images/bear.png", matched: false },
    { "src": "../images/elephant.png", matched: false },
    { "src": "../images/rocket.png", matched: false },
    { "src": "../images/planet.png", matched: false },
]
*/

const Game = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    // shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    // handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare two selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo]);

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    //start a new game automagically
    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <div className={styles.Game}>
            {/*<h1>Space Friends Memory</h1>*/}
            <div className={styles.fadeInText}>
                <h1>Squid Game Memory</h1>
            </div>
            <div className={styles.fadeInText}>
                <button className={styles.newGameButton} onClick={shuffleCards}>New Game</button>

            </div>

                <div className={styles.gameContainer}>
                    <div className={styles.cardGrid}>
                        {cards.map(card => (
                            // <div className={styles.fadeInText}>
                                <SingleCard
                                    key={card.id}
                                    card={card}
                                    handleChoice={handleChoice}
                                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                                    disabled={disabled}
                                />
                            // </div>
                        ))}
                    </div>
                </div>
            <div className={styles.fadeInText}>
                <p className={styles.turns}>Turns: {turns}</p>

            </div>


            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </div>
    )
}

export default Game