import * as React from 'react';
import {IconButton} from 'react-native-paper';

const IconComponent = ({icon, onPressAction}) => (
    <IconButton
        icon={icon}
        iconColor={'lightblue'}
        size={40}
        onPress={onPressAction}
    />
);

export default IconComponent;