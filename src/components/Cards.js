import CardsData from 'api/cards.json'
import { useState, useEffect } from 'react';

export default function Cards() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(CardsData)
  }, [])

  return (
    <div className='grid grid-cols-3 gap-x-4'>
      {cards.length && cards.map((card, index) =>
        <div key={index} className='bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center'>
          <img src={card.image} className='w-[150px] h-[150px] mb-6' />
          <h6 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h6>
          <p className='mt-2 text-sm text-gray-700'>{card.description}</p>
        </div>
      )}
    </div>
  );
}
