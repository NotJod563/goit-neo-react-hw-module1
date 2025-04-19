import css from "./FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.card}>
            <img src={avatar} alt="Avatar" width="80" />
            <p className={css.name}>{name}</p>
            <p className={isOnline ? css.online : css.offline}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </li>
    );
};
