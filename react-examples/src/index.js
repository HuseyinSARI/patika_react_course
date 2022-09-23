import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fetch from "./routes/fetch/Fetch";
import Formik from "./routes/formik/Formik";
import Routing from "./routes/routing/Routing";
import Expenses from "./routes/routing/Expenses";
import Invoices from "./routes/routing/Invoices";
import Invoice from "./routes/routing/Invoice";
import Memo from "./routes/memo/Memo";
import Context from "./routes/context/Context";
import Palette from './components/palette/Palette';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="fetch" element={<Fetch />} />
        <Route path="formik" element={<Formik />} />
        <Route path="routing" element={<Routing />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
        </Route>
        <Route path='memo' element={<Memo/>} />
        <Route path='context' element={<Context/>} />
        <Route path='palette' element={<Palette/>} />
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here! 404</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
