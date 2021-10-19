import React from 'react';

import { Container, Title, ExpandIcon } from './styles';


// export default function() {
//     return (
//         <div>Oi Mundo !</div> EM JS
//     )
// }


// Em TypeScript

const ServerName: React.FC = () => {
    return (         
        <Container>
            <Title>Servidor do Rods</Title>
            
            <ExpandIcon />

        </Container>
    );
    
};

export default ServerName;