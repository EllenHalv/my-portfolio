import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img
                    className="front"
                    src={card.src}
                    alt="card front"
                />
                <div className={"fadeInText"}>
                    <img
                        className="back"
                        src="/images/back.png"
                        onClick={handleClick}
                        alt="card back"
                    />
                </div>
            </div>
        </div>
        /*<div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img
                    className="front"
                    src={card.src}
                    alt="card front"
                />
                <img
                    className="back"
                    // src="/images/moon.png"
                    src="/images/back.png"
                    onClick={handleClick}
                    alt="card back"
                />
            </div>
        </div>*/
    )
}
