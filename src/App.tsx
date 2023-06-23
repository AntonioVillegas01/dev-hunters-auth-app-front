import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import RootRouter from "./router/index.router";


function App() {

  return (
    <>
        <Provider store={store}>
                <RootRouter />
        </Provider>
    </>
  )
}

export default App
