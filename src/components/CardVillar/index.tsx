import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

type CardVillarProps = {
  title: string;
  description: string;
  src: string | StaticImageData;
  link: string;
  linkTitulo: string;
};

export const CardVillar: React.FC<CardVillarProps> = ({
  title,
  description,
  src,
  link,
  linkTitulo
}) => {
  return (
    <article className={styles.container}>
      <Image src={src} alt='' />
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link href={link}>{linkTitulo}</Link>
      </div>
    </article>
  );
};
