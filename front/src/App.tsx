import { Route, BrowserRouter as Router } from "react-router-dom";
import { RouterPrivate } from "./presentation/pages/private/private.routes";
import { RouterPublic } from "./presentation/pages/public/public.routes";
import { NotFound } from "./presentation/pages/public/notFound";

export function App() {
  return (
    <Router>
      <RouterPrivate />

      <RouterPublic />
    </Router>
  );
}
export default App;
