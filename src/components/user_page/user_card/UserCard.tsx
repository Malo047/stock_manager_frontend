import "./UserCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
type UserConfigProps = {
    name: string,
    email: string,
    userLevel: number,
    confirmExlude: () => void
}
export function UserCard({name, email, userLevel, confirmExlude}: UserConfigProps){
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
            <div className="user-card-block user-card-icons" >
                <Link to=""><FontAwesomeIcon icon={faPenToSquare}/></Link>
                <Link to="" onClick={confirmExlude}><FontAwesomeIcon icon={faTrashCan}/></Link>
            </div>
        </div>
    )
};