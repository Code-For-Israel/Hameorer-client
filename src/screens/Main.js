import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';

import {UploadExcelMainPage} from "./UploadExcelFile/UploadExcelMainPage";
import {UserPage} from "./User/UserPage";
import {TimelinePage} from "./Timeline/TimelinePage";
import {MidMenuButtonComponent} from "../components/MidMenuButton/MidMenuButtonComponent";
import {MapPage} from "./Map/MapPage";
import {ContentRoute} from "../navigation/ContentRoute";



const Main = ({handlePresentModalPress}) => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'user', title: 'פרופיל', focusedIcon: 'account', unfocusedIcon: 'account-outline',},
        {key: 'timeline', title: 'ציר זמן', focusedIcon: 'timeline-clock', unfocusedIcon: 'timeline-clock-outline'},
        {key: 'plus', title: '', focusedIcon: 'plus-thick'},
        {key: 'content', title: 'תוכן', focusedIcon: 'file-document', unfocusedIcon: 'file-document-outline'},
        {key: 'map', title: 'מפה', focusedIcon: 'map', unfocusedIcon: 'map-outline'},
        {key: 'uploadExcel', title: 'העלה אקסל', focusedIcon: 'upload', unfocusedIcon: 'upload-outline'},

    ]);

    const renderScene = BottomNavigation.SceneMap({
        user: UserPage,
        timeline: TimelinePage,

        //todo delete?
        // plus: () => <midMenuButton handlePresentModalPress={handlePresentModalPress}/>,

        plus: MidMenuButtonComponent,
        content: ContentRoute,
        map: MapPage,
        uploadExcel: UploadExcelMainPage,
    });

    return (
        <BottomNavigation
            compact={true}
            onTabPress={(e) => {
                if (e.route.key === 'plus') {
                    e.preventDefault()
                    handlePresentModalPress()
                }
            }}
            navigationState={{index, routes}}
            onIndexChange={
                setIndex
            }
            renderScene={renderScene}
        />
    );
};

export default Main;