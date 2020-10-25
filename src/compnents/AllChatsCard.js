import React from 'react'


export default function AllChatsCard(props) {

    return (
        <div className="currentChatHeader chatCard" onClick={()=>{
            props.setselectedUser(props.user);
        }}>

        <div className="chatFlex">
        <div style={{display: 'flex'}}>
            <div>
                <img className="profile__pic"
                   src={props.user.photoURL}
                    alt=""/>
            </div>
            <div className="profile__info">
    <h3 style={{fontSize:'small'}}>{props.user.displayName}</h3>
                {/* <span>Hey How Are You?</span> */}
            </div>
        </div>
        {/* <span style={{fontSize: 'x-small'}}>Thursday</span> */}
    </div>
    </div>

    )
}
