import "./UserCard.css"
type UserConfigProps = {
    name: string,
    email: string,
    userLevel: number
}
export function UserCard({name, email, userLevel}: UserConfigProps){
    return(
        <div id="user-card-main-content">
            <div className="user-card-block">
                {name}
            </div>
            <div className="user-card-block">
                {email}
            </div>
            <div className="user-card-block">
                {userLevel}
            </div>
            <div className="user-card-block">

            </div>
        </div>
    )
};