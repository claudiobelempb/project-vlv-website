import { NavBar } from '@/components/NavBar';
import styles from './page.module.css';

export default function Home() {
  return (
    <main id={styles.main_container}>
      <header id={styles.header_content}>
        <NavBar />
      </header>

      <section id={styles.booking_content}>
        <h1>Booking</h1>
      </section>

      <section id={styles.booking_date_content}>
        <h1>BookingDate</h1>
      </section>

      <section id={styles.villas_content}>
        <h1>VillasSection</h1>
      </section>

      <section id={styles.motto_content}>
        <h1>Motton Section</h1>
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
