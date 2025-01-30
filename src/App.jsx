import { RouterProvider } from "react-router-dom";
import route from "./router/route";
import { store } from "./app/store";
import {Provider} from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  )
}

export default App;
