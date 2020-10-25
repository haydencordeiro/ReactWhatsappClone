import userEvent from '@testing-library/user-event'
import React,{useContext} from 'react'
import {UserContext} from '../App';



export default function LeftNav(props) {
    var user=useContext(UserContext)[0];
    // console.log(user);

    return (
        <>
        <div className="leftnav">
            <div>
                <img className="profile__pic"
                src={user.photoURL}
                    alt=""  onClick={props.signOutGoogle}/>
            </div>
            <div style={{display: 'flex',flex:'0.3',minWidth:'90px',justifyContent: 'space-around',}}>
                <i className='far fa-comment-alt' style={{color:'#B1B3B5',fontSize: '1.5rem',}}></i>
                <i className="fas fa-ellipsis-v" style={{color:'#B1B3B5',fontSize: '1.5rem',}}></i>

            </div>

        </div>
        </>
    )
}
