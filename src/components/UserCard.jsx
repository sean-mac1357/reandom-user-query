const UserCard = (props) => {
    const { user } = props;
    return (

                <li>
                    <img 
                        src={user.picture.thumbnail} 
                        alt={`${user.name.first} ${user.name.last}`}
                    />
                    <h2>
                        {user.name.first} {user.name.last}
                    </h2>
                </li>
    )
}

export default UserCard;