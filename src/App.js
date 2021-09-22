import logo from './logo.svg';
import './App.css';
import ToDo from "./components/todos";
import Increment from "./components/increment";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Increment />
        <h1>-----------------</h1>
        <ToDo />
      </header>
    </div>
    </Provider>
  );
}

export default App;
