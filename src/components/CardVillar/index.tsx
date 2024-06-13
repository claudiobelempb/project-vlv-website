import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';
import styles from './styles.module.css';

type CardVillarProps = {
  title: string;
  description: string;
  src: string | StaticImageData;
  link: string;
  linkTitulo: string;
} & ComponentProps<'article'>;

export const CardVillar: React.FC<CardVillarProps> = ({
  title,
  description,
  src,
  link,
  linkTitulo
}) => {
  const styling = {
    backgroundImage: `linear-gradient(var(--red-400), var(--yellow-400)), url('${src}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };
  return (
    <article className={styles.container} style={styling}>
      {/* <Image src={src} alt='' /> */}
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={link}>{linkTitulo}</Link>
      </div>
    </article>
  );
};
