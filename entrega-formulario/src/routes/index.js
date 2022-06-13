import Home from "../pages/Home";
import { Switch, Route, useParams } from "react-router-dom";
import UserPage from "../pages/UserPage";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const [user, setUser] = useState([]);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home setUser={setUser} />
        </Route>
        <Route path="/userpage/:username">
          <UserPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
