import styled from 'styled-components/native'
import { colors } from '../../../styles'

export const CheckmarkContainerView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 2px;
`

export const CheckmarkTitleText = styled.Text`
    color: ${colors.grayPurple};
    font-weight: bold;
    margin-left: 5px;
`
