import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style/Style.module.css'
const cards = [
    { title: "Task", to: "/pages/task" },
    { title: "Todo", to: "/pages/todo" },
    // 以降はページがないので、仮でTODOページを表示
    { title: "memo", to: "/pages/todo" },
    { title: "天気", to: "/pages/todo" },
    { title: "News", to: "/pages/todo" },
];

const CardSection: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (to: string) => {
    const container = document.getElementById('fade-wrapper');
    if (container) {
      container.classList.add(styles.fadeOut);
      setTimeout(() => navigate(to), 300);
    } else {
      navigate(to);
    }
  };

  return (
    <div className={styles.card_container} id="fade-wrapper">
      {cards.map((card, index) => (
        <div key={index} className={styles.card} onClick={() => handleClick(card.to)}>
          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
