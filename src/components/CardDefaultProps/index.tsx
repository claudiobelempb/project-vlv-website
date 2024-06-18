import { ComponentProps } from 'react';

import styles from './styles.module.css';

type CardDefaultProps = {
  title: string;
  bgcolor: string;
  color: string;
  position?: boolean;
} & ComponentProps<'div'>;

export const CardDefault: React.FC<CardDefaultProps> = ({
  title,
  color,
  bgcolor,
  position
}) => {
  const styling = {
    backgroundColor: `${bgcolor}`,
    color: `${color}`
  };

  const rotate = {
    transform: `rotate(${position ? '90deg' : '-90deg'})`
  };

  return (
    <div id={styles.container} style={styling}>
      <h2 style={rotate}>{title}</h2>
    </div>
  );
};
