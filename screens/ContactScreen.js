import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 10 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text>
                    1 Nucamp Way {"\n"}
                    Seattle, WA 98001 {"\n"}
                    U.S.A. {"\n"}
                </Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text style={{ marginBottom: 10 }}>Email: campsites@nucamp.co</Text>
            </Card>
        </ScrollView>
    );
};

export default ContactScreen;
