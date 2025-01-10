import { BrowserRouter as Router } from "react-router-dom";
import { RouterPrivate } from "./presentation/pages/private/private.routes";

export function App() {
  return (
    <Router>
      <RouterPrivate />
    </Router>
  );
}

export default App;
