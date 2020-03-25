import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <p>Oups nous ne trouvons pas votre page.</p>
    <p>
      <Link to='/admin'>
        Retourner à l'accueil
      </Link>
    </p>
  </div>
);

export default NotFound;
