import './game.css'
import { useState, useEffect } from 'react'
import SingleCard from '../components/game/SingleCard'

const cardImages = [
    { "src": "../images/frontman.png", matched: false },
    { "src": "../images/circle.png", matched: false },
    { "src": "../images/square.png", matched: false },
    { "src": "../images/star.png", matched: false },
    { "src": "../images/triangle.png", matched: false },
    { "src": "../images/umbrella.png", matched: false },
]

/*const cardImages = [
    { "src": "../images/fox.png", matched: false },
    { "src": "../images/racoon.png", matched: false },
    { "src": "../images/bear.png", matched: false },
    { "src": "../images/elephant.png", matched: false },
    { "src": "../images/rocket.png", matched: false },
    { "src": "../images/planet.png", matched: false },
]*/

const Game = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    // shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

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

    // console.log(cards)

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
    }

    return (
        <div className="Game">
            <h1>Squid Game Memory</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-container">
                <div className="card-grid">
                    {cards.map(card => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Game