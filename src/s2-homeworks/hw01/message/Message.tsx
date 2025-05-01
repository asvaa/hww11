import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
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

const Message = (props: MessagePropsType) => {
    const { id, user, message } = props.message

    return (
        <div id={`hw1-message-${id}`} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={`hw1-avatar-${id}`}
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                />
                <div className={s.text}>
                    <div id={`hw1-name-${id}`} className={s.name}>
                        {user.name}
                    </div>
                    <pre id={`hw1-text-${id}`} className={s.messageText}>
                        {message.text}
                    </pre>
                </div>
            </div>
            <div id={`hw1-time-${id}`} className={s.time}>
                {message.time}
            </div>
        </div>
    )
}

export default Message
