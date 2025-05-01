import React from 'react'

export type FriendMessagePropsType = {
    message: {
        id: number
        user: {
            avatar: string
            name: string
        }
        message: {
            text: string
            time: string
        }
    }
}

const FriendMessage = (props: FriendMessagePropsType) => {
    const { id, user, message } = props.message

    return (
        <div id={`hw1-friend-message-${id}`} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    id={`hw1-friend-avatar-${id}`}
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
                />
                <div>
                    <div id={`hw1-friend-name-${id}`} style={{ fontWeight: 'bold' }}>
                        {user.name}
                    </div>
                    <pre id={`hw1-friend-text-${id}`} style={{ margin: 0 }}>
                        {message.text}
                    </pre>
                </div>
            </div>
            <div id={`hw1-friend-time-${id}`} style={{ textAlign: 'right', fontSize: '0.8em', color: '#888' }}>
                {message.time}
            </div>
        </div>
    )
}

export default FriendMessage
