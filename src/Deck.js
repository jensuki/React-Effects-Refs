import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const base_url = 'https://deckofcardsapi.com/api/deck';

const Deck = () => {
    const [drawnCards, setDrawnCards] = useState([]); // keep track of drawn cards



    const deckId = useRef(null); // store deck id so we grab it once in the begining

    useEffect(() => {
        async function fetchDeck() {
            const res = await axios.get(`${base_url}/new/shuffle`); // get new shuffled deck
            deckId.current = res.data.deck_id; // store deck id in ref

        }
        fetchDeck();
    }, []) // run only once when component mounts

    const drawCard = async () => {


        const res = await axios.get(`${base_url}/${deckId.current}/draw/?count=1`);
        if (res.data.remaining === 0) {
            alert('No cards remaining!')
        }
        const card = res.data.cards[0]; // get the drawn card

        setDrawnCards(c => [
            ...c,
            {
                id: card.code,
                image: card.image,
                value: card.value,
                suit: card.suit
            }
        ])
    }

    return (
        <div className="Deck">
            <button onClick={drawCard}>GIMME A CARD!</button>
            <div className="Deck-cards">
                {drawnCards.map(card => (
                    <Card key={card.id} image={card.image} alt={`${card.value} of ${card.suit}`} />
                ))}

            </div>
        </div>
    )

}
export default Deck;