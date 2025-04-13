import {
    Image,
    Keyboard,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "../../styles/auth/SignUp";

const SignUpScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "SignUp">>();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="black" barStyle="light-content" />

                    {/* Logo image */}
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={styles.logo}
                        />
                    </View>

                    {/* Create Text */}
                    <Text style={styles.createText}>Create Account</Text>

                    {/* Input Fields */}
                    <View style={styles.inputContainer}>
                        <View style={styles.inputWrapper}>
                            <Icon name="person" size={20} color="#888" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Name"
                                placeholderTextColor="#888"
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Icon name="person" size={20} color="#888" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor="#888"
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Icon name="lock" size={20} color="#888" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#888"
                                secureTextEntry
                            />
                            <Icon
                                name="visibility-off"
                                size={20}
                                color="#888"
                                style={styles.eyeIcon}
                            />
                        </View>
                    </View>

                    {/* Create Button */}
                    <TouchableOpacity style={styles.createButton}>
                        <Text style={styles.createButtonText}>Create Account</Text>
                    </TouchableOpacity>

                    {/* Login Link */}
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Don't have Account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.loginLink}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default SignUpScreen;