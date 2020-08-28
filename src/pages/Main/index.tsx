import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { DrawerParamsList } from '../MainDrawer';
import Jobs from '../../components/JobList';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';

import enterpriseImage from '../../assets/millenium-falcon.jpg';

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    JobsScrollView
} from './styles'

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {

    useEffect(() => {
    }, []);

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <MainHeader onPress={() => { navigation.openDrawer() }} />

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

                <MainFooter />
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
