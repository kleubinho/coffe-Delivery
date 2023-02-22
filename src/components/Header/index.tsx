import logo from '../../assets/Logo.png'
import { HeaderContainer, Logo } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="" />
        </HeaderContainer>
    )
}