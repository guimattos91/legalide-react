import Header from './components/Header';
import Footer from './components/Footer/index';
import Main from './components/Main/index';
import { GlobalStyle } from './styles/global';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
  </>
);

export default App;
