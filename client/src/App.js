import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegisterForm from 'components/register/register_form';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/register' element={<RegisterForm />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
