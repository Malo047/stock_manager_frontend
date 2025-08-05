import { ExcludeUser } from "./user_card/exclude_user/ExcludeUser";
import { UserCard } from "./user_card/UserCard";
import { UserPageHeader } from "./user_page_header/UserPageHeader";
import "./UserPage.css"
import { useState } from "react";
export function UserPage(){
    const [excludeConfirm, setExcludeConfirm] = useState<"excludeConfirm" | null>(null);
    function messageConfirm() {
        setExcludeConfirm("excludeConfirm");
    }
    function closeMessage() {
        setExcludeConfirm(null);
    }
    return(
        <div id="user-page-main-content">
            <UserPageHeader/>
            <UserCard name="Marlon Hoffmann" email="marlonhoffmann001@gmail.com" userLevel={2} confirmExlude={messageConfirm}/>
            {excludeConfirm === "excludeConfirm" && (
                <ExcludeUser closeConfirm={closeMessage}/>
            )}
            

        </div>
    )
}