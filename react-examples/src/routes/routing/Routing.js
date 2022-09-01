import React from 'react'

import { Link , Outlet} from "react-router-dom";


function Routing() {
  return (
    <div> 
        <h1>Bookkeeper!</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
        <Link to="/routing/invoices">Invoices</Link> |{" "}
        <Link to="/routing/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Routing