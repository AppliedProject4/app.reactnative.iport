import React from 'react'
import { AppStackParamsList } from '../../routes/AppStack'

import { StackScreenProps } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';

import Jobs from '../../components/Jobs';
import ProfilePhoto from '../../components/ProfilePhoto'

import photo from '../../assets/foto_example.png'
import enterpriseImage from '../../assets/millenium-falcon.jpg'

import {
    ContainerKeyboardAvoidView,
    HeaderView,
    JobsScrollView,
    FooterView
} from './styles'

type DefaultMainPageProps = StackScreenProps<
    AppStackParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {
    return (
        <ContainerKeyboardAvoidView>
            <HeaderView>
                <Ionicons
                    name="ios-menu"
                    size={24}
                    color="#fff"
                />
                <ProfilePhoto source={photo} />
            </HeaderView>

            <JobsScrollView>
                <Jobs
                    title="Hot Jobs"
                    jobs={[
                        {
                            imageSource: enterpriseImage,
                            title: "Millenium Falcon",
                            description: "The fastest spaceship in the galaxy",
                            publishingDate: "2 years ago"
                        },
                        {
                            imageSource: enterpriseImage,
                            title: "Millenium Falcon",
                            description: "The fastest spaceship in the galaxy",
                            publishingDate: "2 years ago"
                        },
                        {
                            imageSource: enterpriseImage,
                            title: "Millenium Falcon",
                            description: "The fastest spaceship in the galaxy",
                            publishingDate: "2 years ago"
                        },
                        {
                            imageSource: enterpriseImage,
                            title: "Millenium Falcon",
                            description: "The fastest spaceship in the galaxy",
                            publishingDate: "2 years ago"
                        }
                    ]}
                />
                <Jobs
                    title="Hot Jobs"
                    jobs={[
                        {
                            imageSource: enterpriseImage,
                            title: "Millenium Falcon",
                            description: "The fastest spaceship in the galaxy",
                            publishingDate: "2 years ago"
                        }
                    ]}
                />
                <Jobs
                    title="Hot Jobs"
                    jobs={[
                        {
                            imageSource: enterpriseImage,
                            title: "Millenium Falcon",
                            description: "The fastest spaceship in the galaxy",
                            publishingDate: "2 years ago"
                        },
                        {
                            imageSource: enterpriseImage,
                            title: "Millenium Falcon",
                            description: "The fastest spaceship in the galaxy",
                            publishingDate: "2 years ago"
                        }
                    ]}
                />
            </JobsScrollView>

            <FooterView>

            </FooterView>
        </ContainerKeyboardAvoidView>
    )
}
