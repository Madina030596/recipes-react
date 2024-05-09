import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";
import { History } from "./pages/history/History";
import { Favorites } from "./pages/favorites/Favorites";
import { SignIn } from "./pages/signIn/SignIn";
import { SignUp } from "./pages/signUp/SignUp";
import { Input } from "./components/input/Input";

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
