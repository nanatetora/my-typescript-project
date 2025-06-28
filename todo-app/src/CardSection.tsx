import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './components/Style.module.css';

const cards = [
    { title: "Task", to: "/components/task/index" },
    { title: "Todo", to: "/components/todo/index" },
    // 以降はページがないので、仮でTODOページを表示
    { title: "memo", to: "/components/todo/index" },
    { title: "天気", to: "/components/todo/index" },
    { title: "News", to: "/components/todo/index" },
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
