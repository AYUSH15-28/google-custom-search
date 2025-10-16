
import { Routes, Route } from "react-router-dom";
import InputWithButton from './Home/InputWithButton.jsx';
import Header from './Header/Header.jsx';

function App() {
  return (
    <Routes>
      {/* Home route → search page */}
      <Route path="/" element={<InputWithButton />} />

      {/* Header route with nested all, images, news, vedios */}
      <Route path="/header/*" element={<Header />} />
    </Routes>
  );
}

export default App;
