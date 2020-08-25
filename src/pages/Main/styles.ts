import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '../../styles'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    background: ${colors.grayPurple};
`

export const ContainerKeyboardAvoidView = styled.View`
    flex: 1;
    justify-content: space-between;
`

export const JobsScrollView = styled.ScrollView`
    background: #fff;
    flex: 1;
`
