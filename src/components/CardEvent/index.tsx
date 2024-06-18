import { StaticImageData } from 'next/image';
import { ComponentProps } from 'react';

import styles from './styles.module.css';

type CardEventProps = {
  title: string;
  description: string;
  src: string | StaticImageData;
} & ComponentProps<'article'>;

export const CardEvent: React.FC<CardEventProps> = ({
  title,
  description,
  src
}) => {
  const styling = {
    backgroundImage: `linear-gradient(var(--red-400), var(--yellow-400)), url('${src}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };
  return (
    <div id={styles.container} style={styling}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
