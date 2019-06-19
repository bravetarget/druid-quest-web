import React from 'react'; 
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import MenuScreen from './components/MenuScreen';
import GameScreen from './components/GameScreen';
import LeaderBoardScreen from './components/LeaderBoardScreen';

export default function App() {
  return <div>
  <BrowserRouter>
   <div>
    <Route path={"/"} component={MenuScreen} exact/>
    <Route path={"/GameScreen"} component={GameScreen}/>
    <Route path={"/LeaderBoardScreen"} component={LeaderBoardScreen}/>
   </div>
  </BrowserRouter>
  </div>;
}
