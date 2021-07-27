import './assets/App.css';
import Cabecalho from './components/Cabecalho';
import Sobre from './components/Sobre';
import ListaAnimes from './components/ListaAnimes';
import Rodape from './components/Rodape';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Anime from './components/Anime';
import Banner from './components/Banner';
import { Provider } from "react-redux"
import store from './components/store';

function App() {
  return (<>
    <BrowserRouter>

      <Cabecalho />
      <Provider store={store}>
        <Switch>

          <Route exact path="/">
            <Banner />
            <Sobre />

            <ListaAnimes />

          </Route>
          <Route path="/anime/:id">
            <Anime />

          </Route>

        </Switch>
      </Provider>
      <Rodape />
    </BrowserRouter>
  </>);
}

export default App;
