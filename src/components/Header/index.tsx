import React, {useState} from 'react'
import Container from "../Container";
import StyledHeader from './StyledHeader';
import Logo from './Logo';
import Nav from './Nav';
import LanguageSelect from "../LanguageSelect";
import Organization from './Organization';
import {userToken} from "../../state/utils";
import {userService} from "../../state/services/user.service";

type HeaderProps = {
    currentLanguage: string,
    setLanguage: (event: string) => void
}

const Header: React.FC<HeaderProps> = ({currentLanguage, setLanguage}) => {
    const [organizationData, setOrganizationData] = useState(null)

    const handleGetData = async () => {
        const res = !organizationData && userToken && await userService.getOrganizationData(userToken)

        if (res) {
            setOrganizationData(res)
        }
    }

    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo />
                    <LanguageSelect currentLanguage={currentLanguage} setLanguage={setLanguage} />
                    {userToken && <Organization getData={handleGetData} data={organizationData} />}
                </Nav>
            </Container>
        </StyledHeader>
    )
}

export default Header
