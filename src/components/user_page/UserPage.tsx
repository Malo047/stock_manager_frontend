import { UserCard } from "./user_card/UserCard";
import { UserPageHeader } from "./user_page_header/UserPageHeader";
import "./UserPage.css"
export function UserPage(){
    return(
        <div id="user-page-main-content">
            <UserPageHeader/>
            <UserCard name="Marlon Hoffmann" email="marlonhoffmann001@gmail.com" userLevel={2}/>

        </div>
    )
}