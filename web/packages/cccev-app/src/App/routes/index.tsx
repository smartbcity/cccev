import { Router } from "@smartb/g2-providers";
import CertificateFiller from "App/Pages/CertificateFiller";
import {Route} from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" >
        <CertificateFiller/>
      </Route>
    </Router>
  );
};
