import { CardDate } from '@/components/CardDate';
import { CardVillar } from '@/components/CardVillar';
import { NavBar } from '@/components/NavBar';
import Link from 'next/link';
import { FaRegClock, FaSun } from 'react-icons/fa';
import styles from './page.module.css';

import ImgCardVillar01 from '../../public/img/Villas/villa-1.jpg';

import ImgCardVillar02 from '../../public/img/Villas/villa-2.jpg';
import ImgCardVillar03 from '../../public/img/Villas/villa-3.jpg';
import ImgCardVillar04 from '../../public/img/Villas/villa-4.jpg';
import ImgCardVillar05 from '../../public/img/Villas/villa-5.jpg';
import ImgCardVillar06 from '../../public/img/Villas/villa-6.jpg';

export default function Home() {
  return (
    <main id={styles.main_container}>
      <header id={styles.header_container}>
        <NavBar />
        <div className={`${styles.header_logo_content}`}>
          <Link href={'#'} className={`${styles.header_logo_link}`}>
            <span>V</span>L<span>V</span>
          </Link>
          <div className={`${styles.header_content}`}>
            <h1 className={`${styles.header_title}`}>Relax Your SouL</h1>
            <p className={`${styles.header_paragraph}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <Link href={'#'} className={`${styles.header_link}`}>
              Discover More
            </Link>
          </div>
        </div>
      </header>

      <section id={styles.booking_container}>
        <h2 className={styles.booking_title}>Discover Serenity</h2>
        <p className={styles.booking_paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae
          nostrum blanditiis ducimus quo vitae cupiditate earum debitis
          molestias, ipsam cum consequatur ipsum exercitationem saepe autem
          tenetur, eos nam libero.
        </p>
        <div className={styles.booking_icons_content}>
          <div className={styles.booking_icons_content__weather}>
            <FaSun />
            <p>
              24 <sup>&#8451;</sup>
            </p>
          </div>
          <div className={styles.booking_icons_content__time}>
            <FaRegClock />
            <p>05:00 PM</p>
          </div>
        </div>
      </section>

      <section id={styles.booking_date_container}>
        <div className={styles.booking_date_content}>
          <CardDate title='Arrival' month='May' day='09' />
          <CardDate title='Departure' month='May' day='23' />
          <CardDate title='Grests' month='May' day='01' before />
        </div>
        <div className={styles.booking_date_contact}>
          <Link href={'#'}>Make a Reservation</Link>
          <p>Reservation Hotline</p>
          <p>+1-5263-8965-6547</p>
          <p>Reservation Assistance Available 24 Hours</p>
        </div>
      </section>

      <section id={styles.villas_container}>
        <CardVillar
          title='Standard Villa'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil aut, suscipit reprehenderit'
          src={ImgCardVillar01.src}
          link='#'
          linkTitulo='Startng at $200.00'
        />
        <CardVillar
          title='Standard Villa'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil aut, suscipit reprehenderit'
          src={ImgCardVillar02.src}
          link='#'
          linkTitulo='Startng at $200.00'
        />
        <CardVillar
          title='Standard Villa'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil aut, suscipit reprehenderit'
          src={ImgCardVillar03.src}
          link='#'
          linkTitulo='Startng at $200.00'
        />
        <CardVillar
          title='Standard Villa'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil aut, suscipit reprehenderit'
          src={ImgCardVillar04.src}
          link='#'
          linkTitulo='Startng at $200.00'
        />
        <CardVillar
          title='Standard Villa'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil aut, suscipit reprehenderit'
          src={ImgCardVillar05.src}
          link='#'
          linkTitulo='Startng at $200.00'
        />
        <CardVillar
          title='Standard Villa'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil aut, suscipit reprehenderit'
          src={ImgCardVillar06.src}
          link='#'
          linkTitulo='Startng at $200.00'
        />
      </section>

      <section id={styles.motto_container}>
        <h2>We Reimagined Luxury</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          optio aliquid, ducimus placeat autem ipsum voluptates delectus
          dignissimos veniam molestiae, odio voluptate, animi fugiat! Veniam
          officiis non reiciendis recusandae ipsa!
        </p>
      </section>

      <section id={styles.events_content}>
        <h1>Events Section</h1>
      </section>

      <section id={styles.events_text_content}>
        <h1>Events Text Section</h1>
      </section>

      <section id={styles.gallery_text_content}>
        <h1>Gallery Text Section</h1>
      </section>

      <section id={styles.gallery_carrousel_content}>
        <h1>Gallery Carrousel Section</h1>
      </section>

      <section id={styles.features_content}>
        <h1>Features Section</h1>
      </section>

      <section id={styles.features_text_content}>
        <h1>Features Text Section</h1>
      </section>

      <section id={styles.testimonials_content}>
        <h1>Testimonial Section</h1>
      </section>

      <footer id={styles.footer_content}>
        <h1>Footer</h1>
      </footer>
    </main>
  );
}
