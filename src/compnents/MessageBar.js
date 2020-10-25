import React from 'react'

export default function MessageBar() {
    return (
        <div className="messageBar">
            <div className="chatMessages">
                {/* <!-- send message --> */}
                <div className="sendMessage">
                    <span>Hey how are you?</span>

                </div>
                {/* <!-- send message --> */}
                {/* <!-- recive message --> */}
                <div className="reciveMessage">
                    <span>I'm Great!</span>

                </div>
            </div>
                {/* <!-- reciver message --> */}
            <div className="messageInput">
                <i className="fas fa-grin-alt" style={{fontSize: '1.5rem',padding: '0.5rem',paddingLeft: '1rem',}}></i>
                <i className="fas fa-paperclip" style={{fontSize: '1.5rem',padding: '0.5rem',}}></i>
                <input type="text" placeholder="Type a message" />
                <i className="far fa-paper-plane" style={{fontSize: '1.5rem',padding: '0.5rem',paddingRight:'1rem',}}></i>
            </div>


            
        </div>
    )
}
