/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Axios from "axios";
import "./Billing.css";
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import { useEffect } from "react";

const Billing = ({ userID }) => {
  const [chargesList, setChargesList] = useState([]);
  const [name, setName] = useState("");
  const [invoice_num, setInvoiceNum] = useState("");
  const [total_amount, setTotalAmount] = useState("");
  const [payable_amount, setPayableAmount] = useState("");
  const [bill_month, setBillMonth] = useState("");
  const [status, setStatus] = useState("");
  const [due_date, setDueDate] = useState("");

    useEffect(() => {
      Axios.get("http://localhost:3001/billing", {}).then((response) => {
        setChargesList(response.data);
      });
    }, []);

  return (
    <div>
      <Sidebar/>
      <div className="overview">Billing Overview</div>
      <div className="billNoti">
        Notifications
      </div>
      <div className="BillingH">Billing History</div>
      <div className="Searching">Search (Minimum 3 Letters)</div>
      <button className="SearchH">Search by Name or Invoice Number</button>
    <div className="tenants">
      <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Invoice Number</th>
            <th style={{ border: "1px solid black" }}>Total Amount</th>
            <th style={{ border: "1px solid black" }}>Payable Amount</th>
            <th style={{ border: "1px solid black" }}>Bill Month</th>
            <th style={{ border: "1px solid black" }}>Status</th>
            <th style={{ border: "1px solid black" }}>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {chargesList.map((val, key) => {
            return (
              <tr key={key}>
                <td style={{ border: "1px solid black" }}>{val.name}</td>
                <td style={{ border: "1px solid black" }}>{val.invoice_num}</td>
                <td style={{ border: "1px solid black" }}>
                  {val.total_amount}
                </td>
                <td style={{ border: "1px solid black" }}>
                  {val.payable_amount}
                </td>
                <td style={{ border: "1px solid black" }}>{val.bill_month}</td>
                <td style={{ border: "1px solid black" }}>{val.status}</td>
                <td style={{ border: "1px solid black" }}>{val.due_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Billing;