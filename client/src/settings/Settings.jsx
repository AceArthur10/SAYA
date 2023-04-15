import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import "./Settings.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Settings = ({ userId }) => {
  const [account_name, setAccount] = useState("");
  const [code, setCode] = useState("");
  const [invoice, setInvoice] = useState("");
  const [phone, setPhone] = useState("");
  const [first_name, setName] = useState("");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const update = (event) => {
    event.preventDefault();
    if (!account_name || !code || !phone || !first_name || !last || !password) {
      alert("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }
    Axios.post("http://localhost:3001/settings", {
      userId,
      code,
      phone,
      account_name,
      invoice,
      first_name,
      last,
      password,
    }).then((response) => {
      if (response.data.message === "User updated successfully.") {
        alert("User Information Updated Successfully");
        navigate("/Dashboard");
      } else {
        alert(response.data.message);
      }
    });
  };

  const dash = () => {
    navigate("/Dashboard");
  };

  return (
    //put className='back' to make the background white
    <div>
      <form onSubmit={update}>
        <h1 className="Info">Update Account Information</h1>
        <label className="Name">Account Name *</label>
        <label className="Email">Email</label>
        <label className="Code">Country Code *</label>
        <label className="Phone">Phone Number</label>
        <label className="Invoice">Invoice Name Prefix</label>
        <label className="Main">Main Account</label>

        <input
          type="text"
          className="AccName"
          placeholder={"< Account Name >"}
          onChange={(e) => {
            setAccount(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="Mail"
          placeholder="< Email >"
          maxLength={0}
        ></input>
        <input
          type="text"
          className="Country"
          placeholder="< Country Code >"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="Number"
          placeholder="< Phone Number >"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="Prefix"
          placeholder="< Invoice Name Prefix >"
          onChange={(e) => {
            setInvoice(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="MainAcc"
          placeholder="< Main Account >"
          maxLength={0}
        ></input>

        <h1 className="User">Update User Information</h1>
        <label className="First">First Name *</label>
        <label className="Last">Last Name *</label>
        <label className="Email2">Email</label>
        <label className="Password">Password</label>
        <label className="Confirm">Confirm Password</label>
        <label className="Date">Date Format *</label>

        <input
          type="text"
          className="FirstIn"
          placeholder="< First Name >"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="LastIn"
          placeholder="< Last Name >"
          onChange={(e) => {
            setLast(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="EmailIn"
          placeholder="< Email >"
          maxLength={0}
        ></input>
        <input
          className="Pass"
          placeholder="< ********** >"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          className="ConfirmPass"
          placeholder="< ********** >"
          type="password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        ></input>
        <input
          type="date"
          className="Format"
          placeholder="< Date Format >"
        ></input>

        <button className="Save" type="submit">
          Save
        </button>
        <button className="Cancel" onClick={dash}>
          Cancel
        </button>

        <Sidebar />
      </form>
    </div>
  );
};

export default Settings;
