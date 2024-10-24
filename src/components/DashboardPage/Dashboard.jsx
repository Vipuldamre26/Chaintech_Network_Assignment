import React from 'react'
import Navbar from '../Navbar/Navbar'
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../../redux/slices/dataSlice';

const Dashboard = () => {

  const data = useSelector(state => state.formData.data)  
  console.log(data);

  const dispatch = useDispatch();

  dispatch(submit('ram ram'));
  


  return (
    <div className='dashboard'>
      <Navbar />
      <div className="dashboard-main">

        <div className="row">
          <div className="item">
            <p>Name</p>
            <input type='text' value={'Vipul'} className='item-field' />
          </div>
          <div className="item">
            <p>Email</p>
            <p className='item-field'>vipul@gmail.com</p>
          </div>
        </div>

        <div className="row">
          <div className="item">
            <p>Phone</p>
            <p className='item-field'>5487136985</p>
          </div>
          <div className="item">
            <p>Age</p>
            <p className='item-field'>28</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard