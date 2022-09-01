import './App.css';

import { Link , Outlet} from "react-router-dom";

function App() {
  return (
    <div >
      <h1>Patika React Examples!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/fetch">8-Fetch </Link> |{" "}
        <Link to="/routing">9-Routing </Link> |{" "}
        <Link to="/formik">10-Formik </Link> |{" "}
        <Link to="/memo">11-Memo </Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
