import React from 'react'

export default function RightNav(props) {
    return (
        <div className="rightnav">
        <div className="currentChatHeader">
            <div>
                <img className="profile__pic"
                    src={props.selectedUser?props.selectedUser.photoURL:''}
                    alt="" />
            </div>
            <div className="profile__info">
                <h3>{props.selectedUser?props.selectedUser.displayName:''}</h3>
                <span>online</span>
            </div>
        </div>
        <div style={{display: 'flex',flex:'0.1',justifyContent: 'space-around',minWidth:'90px'}}>
            <i className='fas fa-search' style={{color:'#B1B3B5',fontSize: '1.5rem'}}></i>
            <i className="fas fa-ellipsis-v" style={{color:'#B1B3B5',fontSize: '1.5rem'}}></i>

        </div>
    </div>
    )
}
