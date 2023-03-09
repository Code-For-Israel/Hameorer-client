import {Modal, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function BottomSheet({isVisible, children, onClose}) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <ScrollView style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}></Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#fff" size={22}/>
                        </Pressable>
                    </View>
                    {children}
            </ScrollView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: '36%',
        width: '100%',
        // backgroundColor: '#25292e',
        backgroundColor: '#fff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '10%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 12,
    },
});
