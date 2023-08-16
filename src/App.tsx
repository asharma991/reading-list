import './styles.css';
import Img from './web-api.png';
import Logo from './react-icon.svg';
import ClickCounter from './ClickCounter';

export const App = () => {
  const name = 'abhishek';
  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template - {name} {process.env.name}
      </h1>
      ;
      <img src={Img} alt='Web API' width='300' height='200' />
      <img src={Logo} alt='React Logo' width='300' />
      <ClickCounter />
    </>
  );
};
