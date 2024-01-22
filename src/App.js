import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
    
  );
}

export default App;
