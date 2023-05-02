import { useState } from "react";
import Axios from "axios";
import "./Tenants.css";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";

function Tenants() {
  // Creating useState for database... need to add fucntionality for last button
  const [tenant, setTenant] = useState("");
  const [unit, setUnit] = useState("");
  const [meter_number, setMeterNumber] = useState("");
  const [email, setEmail] = useState("");
  const [tenantList, setTenantList] = useState([]);

  const addTenant = () => {
    Axios.post("http://localhost:3001/create", {
      tenant: tenant,
      unit: unit,
      meter_number: meter_number,
      email: email,
    }).then(() => {
      setTenantList([
        ...tenantList,
        {
          tenant: tenant,
          unit: unit,
          meter_number: meter_number,
          email: email,
        },
      ]);
    });
  };
    useEffect(() => {
      Axios.get("http://localhost:3001/tenants").then((response) => {
        setTenantList(response.data);
      });
    }, []);
  
  // Test for console log to make sure we're getting data
  //const displayInfo = () => {
  //console.log(tenant + unit + meterNumber + email);
  // };

  return (
    // Initializing headers and labels
    <div className="App">
      <Sidebar/>
      <div className="information">
        <label>Tenant:</label>
        <input
          type="text"
          onChange={(event) => {
            setTenant(event.target.value);
          }}
        />

        <label>Unit:</label>
        <input
          type="text"
          onChange={(event) => {
            setUnit(event.target.value);
          }}
        />

        <label>Meter Number:</label>
        <input
          type="text"
          onChange={(event) => {
            setMeterNumber(event.target.value);
          }}
        />

        <label>EMAIL:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label>NSWTIY:</label>
        <input type="button" className="addTen"/>
        <button onClick={addTenant}>Add New Tenant</button>
      </div>

      <div className="tenants">
        <table
          style={{ borderCollapse: "collapse", border: "1px solid black" } }className="tenTable"
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>Tenant Name</th>
              <th style={{ border: "1px solid black" }}>Unit</th>
              <th style={{ border: "1px solid black" }}>Meter Number</th>
              <th style={{ border: "1px solid black" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {tenantList.map((val, key) => {
              return (
                <tr key={key}>
                  <td style={{ border: "1px solid black" }}>{val.tenant}</td>
                  <td style={{ border: "1px solid black" }}>{val.unit}</td>
                  <td style={{ border: "1px solid black" }}>
                    {val.meter_number}
                  </td>
                  <td style={{ border: "1px solid black" }}>{val.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Tenants;