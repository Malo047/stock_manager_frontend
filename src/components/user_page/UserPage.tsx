import { EditPage } from "./user_card/edit_user/EditPage";
import { ExcludeUser } from "./user_card/exclude_user/ExcludeUser";
import { UserCard } from "./user_card/UserCard";
import { UserPageHeader } from "./user_page_header/UserPageHeader";
import "./UserPage.css"
import { useState } from "react";
type MessageTypeConfig =  "excludeUser" | "editUser" | null;

export function UserPage(){
    const [messageConfirm, setMessageConfirm] = useState<MessageTypeConfig>(null);

    function excludeConfirm(message: MessageTypeConfig) {
        setMessageConfirm(message);
    }
    function closeMessage() {
        setMessageConfirm(null);
    }
    return(
        <div id="user-page-main-content">
            <UserPageHeader/>
            <UserCard name="Marlon Hoffmann" email="marlonhoffmann001@gmail.com" userLevel={2} confirmExlude={excludeConfirm}/>
            {messageConfirm === "excludeUser" && (
                <ExcludeUser message="Deseja realmente excluir o usuário" username="Marlon Hoffmann" closeConfirm={closeMessage}/>
            )}
            {messageConfirm === "editUser" && (
                <EditPage/>
            )}

        </div>
    )
}