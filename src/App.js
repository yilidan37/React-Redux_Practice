import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakesContainer from './components/HooksCakesContainer';
import IceCreamContainer from './components/IceCreamContainer';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <HooksCakesContainer/>
        <CakeContainer />
        <IceCreamContainer/>
      </div>
    </Provider>

  );
}

export default App;
