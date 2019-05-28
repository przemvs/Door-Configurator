import React from 'react'
import {FormattedMessage} from 'react-intl'
import styled from "styled-components";

type LanguageProps = {
  currentLanguage: string,
  setLanguage: (event: string) => void
}

const StyledLanguageSelect = styled('div')`
  flex: 0 0 auto;
  width: auto;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  margin-left: auto;
`

const SelectLanguage = styled('span')`
  color: #7E7E7E;
  font-size: 14px;
  line-height: 19px;
`

const LanguageSelect: React.FC<LanguageProps> = ({currentLanguage, setLanguage}) => {
  return (
    <StyledLanguageSelect>
      <SelectLanguage>
        <FormattedMessage id="app.selectLanguage" defaultMessage="Select Language"/>:
      </SelectLanguage>
      <select
        name="lang"
        id="lang"
        value={currentLanguage}
        onChange={ev => setLanguage(ev.target.value)}
      >
        <FormattedMessage id="app.english" defaultMessage="English">
          {txt => <option value="en">{txt}</option>}
        </FormattedMessage>

        <FormattedMessage id="app.polish" defaultMessage="Polish">
          {txt => <option value="pl-PL">{txt}</option>}
        </FormattedMessage>
      </select>
    </StyledLanguageSelect>
  )
}

export default LanguageSelect
