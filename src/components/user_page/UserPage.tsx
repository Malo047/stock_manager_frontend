import { UserCard } from "./user_card/UserCard";
import { UserPageHeader } from "./user_page_header/UserPageHeader";
import "./UserPage.css"
type UserConfigProps =  {
    visivel: boolean
}
export function UserPage({visivel}: UserConfigProps){
    if(!visivel) return null;
    return(
        <div id="user-page-main-content">
            <UserPageHeader/>
            <UserCard name="Marlon Hoffmann" email="marlonhoffmann001@gmail.com" userLevel={2}/>

        </div>
    )
}