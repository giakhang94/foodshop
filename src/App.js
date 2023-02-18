import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import { homePath } from './routers';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {homePath.map((comp) => {
                        // console.log('com', comp.element);
                        return <Route path={comp.path} element={<comp.element />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
