
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header'



interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;