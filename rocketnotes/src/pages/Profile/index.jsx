import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordold, setPasswordOld] = useState();
    const [passwordnew, setPasswordNew] = useState();

    async function handleUpdate(){
        const user = {
            name,
            email,
            passwordold: passwordold,
            passwordnew: passwordnew

        }
        
        await updateProfile({ user })
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/viniiirj.png"
                        alt='Foto do usuário'
                    />
                    
                    <input 
                        id='avatar'
                        type='file'
                    />

                    <label htmlFor='avatar'>
                        <FiCamera />
                    </label>
                </Avatar>
                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    placeholder='Senha nova'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick={handleUpdate}/>

            </Form>
        </Container>
    )
}