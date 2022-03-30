import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { UserContext } from "./context";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

import { GlobalStyle } from "./styles/global";

function App() {
  const { isAuthenticated } = useContext(UserContext);

  const RequireAuth = () => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  };

  const HomePage = () => (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
