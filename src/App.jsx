import React from 'react';
import TopContainer from './components/TopContainer';
import BotContainer from './components/BotContainer';
import { HashRouter } from 'react-router-dom';
import Loader from './components/Loader';

const App = () => {
    return (
        <HashRouter basename='/'>
            <div className="store">
                <h1>Mini POS System</h1>
                <div className="store_con">
                    <TopContainer />
                    <BotContainer />
                </div>
            </div>
            <footer>
                <p>Copyright &bull; Danilo Quesada III &bull; 2020</p>
            </footer>
            <Loader />
        </HashRouter>
    )
}
 
export default App;