import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Category from "./Components/Category";
import Confirmed from "./Components/Confirmed";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Session from "./Components/Session";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home title={<h1>WELCOME !</h1>} />} />
          <Route path="categories" element={<Categories />}>
            <Route path=":catId" element={<Category />}>
              <Route path=":sessionId" element={<Session />} />
            </Route>
            <Route index element={<h3>Select a category from above</h3>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={<h1 className="not-found">Page not found</h1>}
          />
          <Route path="register" element={<Register />} />
          <Route path="confirmed" element={<Confirmed/>}/> 
        </Routes>
      </div>
    </>
  );
}

export default App;
