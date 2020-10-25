import React,{useContext} from 'react'
import AllChatsCard from './AllChatsCard'
import { UserContext } from '../App'

export default function AllChats(props) {
    var allChats=useContext(UserContext)[1];


    return (
        <div className="allChats">

        <div className="searchContainer">

            <div className="search__inputContainer">
                <i className='fas fa-search' ></i>

                <input type="text" placeholder="Search or start a  new chat" />
            </div>
        </div>
        <div className="ChatsScroll">

        {allChats.map((chat)=>{
           return  <AllChatsCard key={chat.uid} user={chat} setselectedUser={props.setselectedUser}/>
        })}


        </div>



    </div>
    )
}
