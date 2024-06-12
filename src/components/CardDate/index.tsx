import { ComponentProps } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import styles from './CardDate.module.css';

type CardDateProps = {
  title: string;
  month: string;
  day: string;
  before?: boolean;
} & ComponentProps<'div'>;

export const CardDate: React.FC<CardDateProps> = ({
  title,
  day,
  month,
  before,
  ...props
}) => {
  return (
    <div className={`${styles.card_container}`}>
      <h5>{title}</h5>
      <div className={`${styles.card_content}`}>
        {before ? <GoChevronUp /> : <p>{month}</p>}
        <p className={`${styles.card_p}`}>{day}</p>
        <GoChevronDown />
      </div>
    </div>
  );
};
