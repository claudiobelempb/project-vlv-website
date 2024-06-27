'use client';
import { ComponentProps, useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import styles from './styles.module.css';

type CarouselRootProps = {
  imgs: CarouselItemProps[];
  items: number;
} & ComponentProps<'div'>;

export const CarouselRoot: React.FC<CarouselRootProps> = ({
  imgs,
  items,
  ...props
}) => {
  const [list, setList] = useState<CarouselItemProps[]>([]);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(false);

  // const current = list.map(c => c.current).filter(c => c?.valueOf);
  const img = list.map(i => i.src).filter(i => i);
  // console.log('Current =>', current[3]);
  console.log('Img =>', img[index]);

  const handleButtonNext = () => {
    console.log('handleButtonNext');
    setList(imgs);
    // setIndex(index);
  };

  const handleButtonPrev = () => {
    // console.log('handleButtonPrev');
    // setList(imgs);
    // setIndex(index);
  };

  const handleButtonDots = (index: number) => {
    console.log('handleButtonDots', index);
    // setList(imgs);
    // setIndex(index);
  };
  //get
  return (
    <>
      <div id={styles.root_container}>
        <button onClick={handleButtonNext} className={styles.btn__left}>
          <FaCaretRight />
        </button>

        <ul>
          {list.map((i, index) => (
            <CarouselItem
              current={i.current}
              key={index}
              src={i.src}
              alt={i.alt}
            />
          ))}
        </ul>

        <button onClick={handleButtonPrev} className={styles.btn__right}>
          <FaCaretLeft />
        </button>

        <CarouselNavgation>
          {list.map((item, index) => {
            return (
              <CarouselNavgationItems
                onCurrent={() => handleButtonDots(index)}
                current={item?.current}
                key={index}
              >
                {/* {index} */}
              </CarouselNavgationItems>
            );
          })}
        </CarouselNavgation>
      </div>
    </>
  );
};

export type CarouselItemProps = {
  src: string | (StaticImageData & ComponentProps<'image'>);
  alt: string;
  current: boolean;
} & ComponentProps<'li'>;

export const CarouselItem: React.FC<CarouselItemProps> = ({
  src,
  alt,
  ...props
}) => {
  const styling = {
    backgroundColor: ``,
    color: ``
  };

  return (
    <li id={`${styles.item_container}`}>
      <Image src={src} alt={alt} loading='lazy' />
    </li>
  );
};

type CarouselNavgationProps = {
  // src: string | StaticImageData;
  // alt: string;
} & ComponentProps<'nav'>;

export const CarouselNavgation: React.FC<CarouselNavgationProps> = ({
  ...props
}) => {
  const styling = {
    backgroundColor: ``,
    color: ``
  };

  return <nav id={`${styles.nav_container}`}>{props.children}</nav>;
};

type CarouselNavgationItemsProps = {
  onCurrent: (c: boolean) => void;
  current: boolean;
} & ComponentProps<'button'>;

export const CarouselNavgationItems: React.FC<CarouselNavgationItemsProps> = ({
  onCurrent,
  current,
  ...props
}) => {
  // const [current, setCurrent] = useState(false);
  // console.log(current);

  // function handleCurrent(c: boolean) {
  //   setCurrent(!c);
  // }

  return (
    <button
      {...props}
      onClick={() => onCurrent(current)}
      id={`${styles.button__container}`}
      className={`${current ? `${styles.current}` : false}`}
      {...props}
    ></button>
  );
};
