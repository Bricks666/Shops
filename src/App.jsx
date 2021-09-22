import { Provider } from "react-redux";
import { MainConnect } from "./Components/Main/MainConnect";
import { store } from "./Redux/store";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainConnect />
      </Router>
    </Provider>
  );
}

export { App };
