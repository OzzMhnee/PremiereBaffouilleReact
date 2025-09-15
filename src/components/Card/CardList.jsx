import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: '100%',
                gap: '16px'
            }}
        >
            {cards.map((card, idx) => (
                <Card
                    key={idx}
                    title={card.title}
                    content={card.content}
                    footer={card.footer}
                />
            ))}
        </div>
    );
};

export default CardList;