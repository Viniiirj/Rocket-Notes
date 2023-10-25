import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile to='/profile'>
                <img 
                src="https://github.com/viniiirj.png" 
                alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Vinicius Ramos</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}