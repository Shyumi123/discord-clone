import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon } from './styles';


// export default function() {
//     return (
//         <div>Oi Mundo !</div> EM JS
//     )
// }


// Em TypeScript

const UserInfo: React.FC = () => {
    return (         
        <Container>
            <Profile>
                <Avatar />        
                <UserData>
                    <strong>Shyumi</strong>
                    <span>#3072</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadPhoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
    
};

export default UserInfo;