import React,{useContext} from 'react'
import AllChatsCard from './AllChatsCard'


export default function AllChats(props) {
    


    return (
        <div className="allChats">

        <div className="searchContainer">

            <div className="search__inputContainer">
                <i className='fas fa-search' ></i>

                <input type="text" placeholder="Search or start a  new chat" />
            </div>
        </div>
        <div className="ChatsScroll">

        {props.activeUsers.map((chat)=>{
            console.log('allchats')
           return  <AllChatsCard key={chat.uid} user={chat} setselectedUser={props.setselectedUser}/>
        })}


        </div>



    </div>
    )
}
