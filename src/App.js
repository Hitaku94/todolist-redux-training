import logo from './logo.svg';
import './App.css';
import ToDo from "./components/todos";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <ToDo />
      </header>
    </div>
    </Provider>
  );
}

export default App;
