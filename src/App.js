import { Routes, Route } from 'react-router-dom';
import { Login } from './screens/Login';
import { Confirm } from './screens/Confirm';
import Home from './screens/Home';
import UserState from './context/User/UserState.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <UserState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="confirm" element={<Confirm />} />
      </Routes>
    </UserState>
    // APP
  );
}

export default App;
