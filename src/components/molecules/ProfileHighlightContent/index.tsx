import React from 'react';
import { ViewProps } from 'react-native';

import {
    ContentContainer,
    ContentDate,
    ContentDateContainer,
    ContentDescription,
    ContentEditContainer,
    ContentHorizontalLine,
    ContentImage,
    ContentTitle,
    ContentTitleContainer,
    ContentVerticalLine,
    HighlightContent,
    HighlightContentContainer
} from './styles';

import { ContentProps } from '../../../pages/ProfileHighlight';
import EditIcon from '../../atoms/Buttons/EditIcon';

interface HighlightContentProps extends ViewProps {
    content: ContentProps[];
    contentType: string;
    isCurrent: boolean;
    editPressed?(content: ContentProps): void;
}

const ProfileHighlightContent: React.FC<HighlightContentProps> = ({
    editPressed,
    content,
    contentType = '',
    isCurrent = false,
    ...rest
}: HighlightContentProps): JSX.Element => {

    let i = 0;

    return (
        <HighlightContentContainer { ...rest } >
            <HighlightContent>
                { content.map(c => {
                    return (
                        <ContentContainer
                            key={c.id}
                            style={{
                                marginTop: i === 0 ? 80 : 0,
                                marginBottom: i === content.length - 1 ? 70 : 0
                            }} >
                            { c.image ?
                                <ContentImage
                                    style={{ marginTop: i === 0 ? 0 : 5 }}
                                    source={{ uri: `data:image/gif;base64,${c.image}` }} />
                                : <></> }
                            <ContentTitleContainer>
                                <ContentDateContainer>
                                    { contentType != 'achievements' ? <ContentDate>{ c.startDate }</ContentDate> : <></> }
                                    <ContentDate>{ c.endDate ? c.endDate : 'Em andamento' }</ContentDate>
                                </ContentDateContainer>
                                <ContentVerticalLine />
                                <ContentTitle>{ c.title }</ContentTitle>
                            </ContentTitleContainer>
                            <ContentDescription>{ c.description }</ContentDescription>
                            { i++ !== content.length - 1 ?  <ContentHorizontalLine /> : <></> }
                            { isCurrent
                                ? <ContentEditContainer
                                    style={{ height: i - 1 !== content.length - 1 ? '95%' : '104%' }}>
                                    <EditIcon
                                        size={30}
                                        iconSize={20}
                                        style={{
                                            backgroundColor: '#46266c',
                                            bottom: 5,
                                            right: 5,
                                            position: 'absolute'
                                        }}
                                        onPress={() => { if(editPressed) editPressed(c) }} />
                                </ContentEditContainer>
                                : <></> }
                        </ContentContainer>
                    )
                }) }
            </HighlightContent>
        </HighlightContentContainer>
    )
}

export default ProfileHighlightContent;
