import React, {FC} from 'react';
import {
    Image,
    TouchableOpacity,
    ImageSourcePropType,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    ImageStyle,
} from 'react-native';
import {styles} from "./styles"

interface ProfileProps {
    image: ImageSourcePropType;
    imageStyle?: StyleProp<ImageStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FC<ProfileProps> = ({image, imageStyle}) => {
    return (
        <TouchableOpacity style={styles.profileContainer}>
            <Image
                style={[imageStyle, styles.profileImage ]}
                source={image}
            />
        </TouchableOpacity>
    );
};

export default Profile;