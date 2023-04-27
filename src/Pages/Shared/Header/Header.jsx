import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <div>
            <img src={logo} alt="" />
            <p><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </div>
    );
};

export default Header;