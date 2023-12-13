
import css from './Friends.module.css'
import FriendListItem from './FriendListItem'

export const FriendList = ({ friends }) => {
    return <ul className={css.section}>
        {friends.map(({ id, isOnline, name, avatar }) => {
            return < FriendListItem
                key={id}
                isOnline={isOnline}
                name={name}
                avatar={avatar} />
        })}
    </ul>
}