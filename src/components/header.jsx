import coffeePic from '../images/coffee_cup.jpg';
import '../css/header.css';

const Header = () => {
  return (
    <header>
      <img src={ coffeePic } alt='coffee cup' />
    </header>
  );
};

export default Header;