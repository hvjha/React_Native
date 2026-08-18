import { View, Text, StyleSheet} from 'react-native';
type User = {
    id: number;
    name: string;
    email: string;
};

type UserDataProps = {
    item: User;
};
const UserData = ({ item }: UserDataProps) => {
    return (
        <View key={item.id} style={styles.card}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.id}>{item.id}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    },
    id: {
        fontSize: 14,
        textAlign: 'center',
        color: 'gray',
    },
    email: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
        color: 'gray',
        fontWeight: "thin"
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignSelf: 'center',
    },
})

export default UserData;