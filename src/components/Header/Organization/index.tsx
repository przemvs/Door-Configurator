import React, {FunctionComponent, useState} from 'react'
import OrganizationButton from './OrganizationButton';
import Details from "./Details";
import StyledOrganization from './StyledOrganization';
import {FormattedMessage} from "react-intl";

type DataProps = {
    name: string,
    email: string,
    phone_number: string,
    address_line_1: string,
    address_line_2: string,
    city: string,
    postal_code: string,
    id: number
}
type OrganizationProps = {
    getData: () => void,
    data: null | DataProps
}

const Organization: FunctionComponent<OrganizationProps> = ({getData, data}) => {
    const [openOrganization, toggleOrganization] = useState(false)

    const handleOpenOrganization = () => {
        toggleOrganization(!openOrganization)
        return getData()
    }

    return (
        <StyledOrganization>
            <OrganizationButton onClick={() => handleOpenOrganization()}>
                <FormattedMessage id="app.myOrganization" defaultMessage="My organization" />
            </OrganizationButton>
            {openOrganization && data && <Details>
                <span>organization</span>
                <p>name: <span>{data.name}</span></p>
                <p>email: <span>{data.email}</span></p>
                <p>phone_number: <span>{data.phone_number}</span></p>
                <p>address_line_1: <span>{data.address_line_1}</span></p>
                <p>address_line_2: <span>{data.address_line_2}</span></p>
                <p>city: <span>{data.city}</span></p>
                <p>postal_code: <span>{data.postal_code}</span></p>
            </Details>}
        </StyledOrganization>
    )
}

export default Organization
