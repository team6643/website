
import { Route, Router } from "@solidjs/router";
import Root from "./Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Sponsors from "./routes/Sponsors";
import About from "./routes/About";
import Blog from "./routes/Blog";
import FLL from "./routes/FLL";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Router root={Root}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/fll" component={FLL} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="*" component={NotFound} />
      </Router>

    </>
  )
}

export default App;
