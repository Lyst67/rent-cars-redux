import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { BigButton } from 'components/BigButton/BigButton';

function HomePage() {
  return (
    <section className={css.section}>
      <div className={css.home_container}>
        <h1 className={css.home_text}>
          Our cars <span className={css.color_text}>are your</span> freedom!
        </h1>
        <Link to={'catalog'}>
          <BigButton>Choose a car</BigButton>
        </Link>
      </div>
    </section>
  );
}
export default HomePage;
