import {Button, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getStories, setStory} from '../../redux/dataSlice';
import {selectAccess} from '../../redux/userSlice';
import {styles} from '../../styles/PagesStyle';

const story = {
    subject: {
        type: 'figure',
        subject: 'שם הדמות',
        date_birth: '1900',
        date_death: '1989',
    },
    tags: ['_'],
    body: {
        background: 'רקע רקע רקע',
        quote_date: '1968',
        quote_source: '',
        qoute_location: 'פולין',
        qoute_title: 'בית ספר לרוח האדם',
        qoute: 'אינני חושב שיש צורך לנתח את המרד מבחינה צבאית. המדובר הוא במלחמה של פחות מאלף איש נגד צבא אדיר ובלב איש לא היה הפקפוק ביחס לתוצאותיו המעשיות. זה לא נושא ללימוד בבי"ס צבאי. לא הנשק, לא המבצעים, לא הטקטיקה. אם יש בית ספר ללימוד רוח האדם, הרי שם זה צריך להיות מקצוע ראשי, הדברים החשובים באמת היו טמונים בכוח שגילו צעירים יהודיים אחרי שנים של השפלה, לקום על משמידיהם ולקבוע בעצמם באיזה מוות יבחרו: טרבלינקה או מרד. אינני יודע אם קיימת אמת מידה מקובלת למוד את זה.',
    }, // created_by: "None",
    comments: {
        one: 'comment one',
        two: 'comment two',
    },
    approved: false,
    media: {
        one: 'comment one',
        two: 'comment two',
    },
};

const MyContentScreen = () => {
    const dispatch = useDispatch();
    const access = useSelector(selectAccess);

    const handlePress = () => {
        dispatch(getStories(access));
    };

    const handlePost = () => {
        dispatch(setStory({access, story}));
    };
    return (
        <View style={styles.container}>
            <Text>מסך התוכן שלי</Text>
            <Text>-</Text>
            <Button title="get info" onPress={handlePress} />
            <Text>-</Text>
            <Text>-</Text>
            <Button title="Post story" onPress={handlePost} />
        </View>
    );
};

export default MyContentScreen;
