import React from 'react';
import { prop } from 'ramda';

const cards = [
  {
    id: 1,
    imgUrl: '../icons/info.svg',
    title: 'Информация о пациенте',
    info: [
      'Ваши личные данные',
      'Рекомендации врачей',
      'История врачей',
    ],
  },
  {
    id: 2,
    imgUrl: '../icons/results.svg',
    title: 'Результаты анализов',
    info: [
      'Вы можете узнать здесь результаты своих анализов',
    ],
  },
  {
    id: 3,
    imgUrl: '../icons/addInfo.svg',
    title: 'Добавить информацию',
    info: [
      'Добавляй в свою электронную карту новую информацию',
    ],
  },
  {
    id: 4,
    imgUrl: '../icons/history.svg',
    title: 'История приёмов',
    info: [
      'Вся информация о полученных услугах за все время хранится здесь',
    ],
  },

];
const Card = (({ card }) => {
  const { imgUrl, title, info } = card;
  console.log('Card -> info', info);
  return (
    <div className="p-2 col-6">
      <div className="card container h-100 x-card">
        <div className="row h-100 ">
          <div className="col-4 d-flex x-card-icon">
            <img src={imgUrl} className="m-auto" alt={title} />
          </div>
          <div className="col-8 card-body p-2">
            <h4 className="py-2 border-bottom x-card-title">{title}</h4>
            {info.length > 1
              ? (
                <ul>
                  {info.map((el) => <li>{el}</li>)}
                </ul>
              )
              : <div>{prop(0, info)}</div>}
          </div>
        </div>
      </div>
    </div>
  );
});
const ElectroCard = () => (
  <>
    {cards.map((card) => <Card key={card.id} card={card} />)}
  </>
);

export default ElectroCard;
