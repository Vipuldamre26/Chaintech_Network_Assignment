import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../../redux/slices/dataSlice';

const Dashboard = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [disabled, setDisabled] = useState(true);
  

  const data = useSelector(state => state.formData.data)
  // console.log(data);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userdata'));


  // *******************************************************************************************


  useEffect(() => {
    // console.log(data);

    
    function redirect() {
      if (userData.length === 0) {
        navigate('/login');
      }
    }
  
    redirect();

  }, [userData, navigate]);
  

  useEffect(() => {
    // console.log(data);
    const localData = JSON.parse(localStorage.getItem('userdata'))

    setName(localData[0]?.name);
    setEmail(localData[0]?.email)
    setNumber(localData[0]?.number)
    setAge(localData[0]?.age)
    
  }, [data]);
  



  // *******************************************************************************************

  // saving user data 
  const saveUserData = () => {
    const userData = {
      name,
      email,
      number,
      age,
      ...(data?.password && { password: data[0].password }),
    };

    localStorage.setItem('userdata', JSON.stringify([userData]))
    dispatch(submit(userData));
    setDisabled(true);
  }


  // ***********************************************************************************************

  // editing user data 
  const editUserData = () => {
    setDisabled(false);
  }



  return (
    <div className='dashboard'>
      <Navbar />
      <div className="dashboard-main">

        <div className="row">
          <div className="item">
            <p>Name</p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='item-field' disabled={disabled} />
          </div>
          <div className="item">
            <p>Email</p>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='item-field' disabled={disabled} />
          </div>
        </div>

        <div className="row">
          <div className="item">
            <p>Phone</p>
            <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} className='item-field' disabled={disabled} />
          </div>
          <div className="item">
            <p>Age</p>
            <input type='text' value={age} onChange={(e) => setAge(e.target.value)} className='item-field' disabled={disabled} />
          </div>
        </div>

        <div className="row">
          <div className="item">
            <button onClick={editUserData}>Edit Data</button>
          </div>
          <div className="item">
            <button onClick={saveUserData}>Save data</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard