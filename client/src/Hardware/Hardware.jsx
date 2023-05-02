import React, { useEffect, useState } from "react";
import Axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./Hardware.css";

const Hardware = () => {
  const [hardwareList, setHardwareList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/hardware").then((response) => {
	    setHardwareList(response.data);
    });
  });

  const landlordGroups = new Map();

  for (const item of hardwareList) {
    const landlord = landlordGroups.get(item.landlord_id);
    if (landlord) {
      landlord.push(item);
    } else {
      landlordGroups.set(item.landlord_id, [item])
    }
  }

  const landlordGroupArray = [...landlordGroups.values()];

  return (
    <div>
    <div className="hardware">
      {landlordGroupArray.map((ldata, index) => {
        return (
          <div key={index} >
            <h2 className="landlord">{ldata[0].landlord_name}</h2>
            <p>Meter type: {ldata[0].landlord_meter_type}</p>
            <div>
            <table style={{ borderCollapse: "collapse", border: "1px solid black", }} className="HTables">
              <thead>
                <tr>
                  <th style={{ border: "1px solid black" }}>Tenant Name</th>
                  <th style={{ border: "1px solid black" }}>Meter Number</th>
                  <th style={{ border: "1px solid black" }}>Meter Type</th>
                </tr>
              </thead>
              <tbody>
                {ldata[0].tenant && ldata.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td style={{ border: "1px solid black" }}>{val.tenant}</td>
                        <td style={{ border: "1px solid black" }}>{val.meter_number}</td>
                        <td style={{ border: "1px solid black" }}>{val.tenant_meter_type}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            </div>

          </div>
        )
      })}
    </div>
    <Sidebar/>
    </div>
  );
}

export default Hardware;