import Sidebar from './Sidebar';
import { useState } from 'react';
import "./Settings.css"
import  Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Settings() {
    const [account_name, setAccount] = useState('');
    const [code, setCode] = useState('');
    const [invoice, setInvoice] = useState('');
    const [phone, setPhone] = useState('');
    const [first_name, setName] = useState('');
    const [last, setLast] = useState('');
    const [password, setPassword] = useState('');

    const update = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/settings",
        { code, phone, account_name, invoice, first_name, last, password})
        
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }
    const navigate = useNavigate();
    const dash = () => {
        navigate("/Dashboard")
    }

    return (
    <div>
        <form> onSubmit={update}
        <h1 className='Info'>Update Account Information</h1>
            <label className='Name'>Account Name *</label>
            <label className='Email'>Email</label>
            <label className='Code'>Country Code *</label>
            <label className='Phone'>Phone Number</label>
            <label className='Invoice'>Invoice Name Prefix</label>
            <label className='Main'>Main Account</label>

            <input type='text' className='AccName' placeholder={account_name} onChange={(e) => {setAccount(e.target.value)}}></input>
            <input type='text' className='Mail' placeholder='< Email >'></input>
            <input type='text' className='Country' placeholder='< Country Code >' onChange={(e) => {setCode(e.target.value)}}></input>
            <input type='text' className='Number' placeholder='< Phone Number >' onChange={(e) => {setPhone(e.target.value)}}></input>
            <input type='text' className='Prefix' placeholder='< Invoice Name Prefix >' onChange={(e) => {setInvoice(e.target.value)}}></input>
            <input type='text' className='MainAcc' placeholder='< Main Account >'></input>

        <h1 className='User'>Update User Information</h1>
        <label className='First'>First Name *</label>
        <label className='Last'>Last Name *</label>
        <label className='Email2'>Email</label>
        <label className='Phone2'>Phone Number</label>
        <label className='Password'>Password</label>
        <label className='Confirm'>Confirm Password</label>
        <label className='Date'>Date Format *</label>
       
        <input type='text' className='FirstIn' placeholder='< First Name >' onChange={(e) => {setName(e.target.value)}}></input>
        <input type='text' className='LastIn' placeholder='< Last Name >' onChange={(e) => {setLast(e.target.value)}}></input>
        <input type='text' className='EmailIn' placeholder='< Email >'></input>
        <input type='text' className='Number2' placeholder='< Phone Number >' onChange={(e) => {setPhone(e.target.value)}}></input>
        <input className='Pass' placeholder='< Password >' type='password' onChange={(e) => {setPassword(e.target.value)}}></input>
        <input className='ConfirmPass' placeholder='< ********** >' type='password' onChange={(e) => {setPassword(e.target.value)}}></input>
        <input className='Format' placeholder='< Date Format >'></input>

        <button className='Save' type='submit' onClick={update}>Save</button>
        <button className='Cancel' onClick={dash}>Cancel</button>

        <Sidebar />
        </form>
    </div>
  );
}

export default Settings;



