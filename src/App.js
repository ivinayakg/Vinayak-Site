import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import BlogDetail from "./components/BlogDetail";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="data">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/projects" exact>
              <Projects />
            </Route>

            <Route path="/blogs" exact>
              <Blogs />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
