import React, { useRef } from 'react';
import {
    View, Text, Image, TouchableOpacity, Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import styles from '../../styles/cart/Voucher';
import { TabParamList } from '../../types/route';
import { ImageBackground } from 'react-native';

interface Voucher {
    title: string;
    discount: string;
    description: string;
}

const vouchers: Voucher[] = [
    { title: 'Buy 1 Get 2', discount: '50% OFF', description: '**Term and Conditions Apply' },
    { title: 'HAPPY 12', discount: '60% OFF', description: '**Term and Conditions Apply' },
    { title: 'Buy 1 Get 1', discount: '30% OFF', description: '**Term and Conditions Apply' },
    { title: 'HOLIDAY 1', discount: '20% OFF', description: '**Term and Conditions Apply' },
    { title: '$231', discount: 'FREE Voucher', description: '**Term and Conditions Apply' },
    { title: 'Buy 1 Get 2', discount: '70% OFF', description: '**Term and Conditions Apply' },
];

const VoucherScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<TabParamList, "Voucher">>();
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.topBar}>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={18} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>All Offer</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                        <View style={styles.cartButton}>
                            <View>
                                <Text style={styles.amountOrders}>10</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("Order")}>
                                <Ionicons name="cart-outline" size={20} color="#333" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                source={require("../../../assets/user.png")}
                                style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Đổi ScrollView thành Animated.ScrollView */}
            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            >
                {/* Banner 1 */}
                <ImageBackground
                    source={require("../../../assets/banner01-gradient.png")}
                    style={styles.firstBanner}
                >
                    <View style={styles.firstBannerGroup}>
                        <Text style={styles.bannerDiscount}>50% Off</Text>
                        <Text style={styles.bannerTitle}>Make Your{"\n"}First Order{"\n"}Here 23</Text>
                    </View>

                    <Image
                        source={require("../../../assets/hold-ice-cream.png")}
                        style={styles.bannerImage}
                        resizeMode='cover'
                    />
                </ImageBackground>

                {/* Banner 2 */}
                <ImageBackground
                    source={require("../../../assets/banner02-gradient.png")}
                    style={styles.secondBanner}
                    imageStyle={{ borderRadius: 18 }}
                >
                    <View style={styles.secondBannerGroup}>
                        <Text style={styles.banner2Discount}>Discount 50</Text>
                        <Text style={styles.banner2Title}>50%</Text>
                        <Text style={styles.banner2Subtitle}>All Asian Foodie</Text>
                    </View>
                    <View style={styles.freeDeliveryBadge}>
                        <Text style={styles.freeDeliveryText}>Free Delivery</Text>
                    </View>
                </ImageBackground>

                {/* Voucher List */}
                <Text style={styles.vouchersTitle}>Vouchers</Text>
                <View style={styles.voucherList}>
                    {vouchers.map((voucher, index) => (
                        <View key={index} style={styles.voucherCard}>
                            <View style={styles.voucherContent}>
                                <View style={styles.voucherText}>
                                    <Text style={styles.voucherTitle}>{voucher.title}</Text>
                                    <Text style={styles.voucherDiscount}>{voucher.discount}</Text>
                                </View>
                                <Image
                                    source={require('../../../assets/voucher.png')}
                                    style={styles.voucherImage}
                                />
                            </View>

                            <View style={styles.voucherLine}>
                                <View style={styles.leftCut} />
                                <Text style={styles.line}>-------------------------</Text>
                                <View style={styles.rightCut} />
                            </View>

                            <View style={styles.voucherTerms}>
                                <Text style={styles.voucherDescription}>{voucher.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={{ paddingBottom: 80 }} />
            </Animated.ScrollView>
        </SafeAreaView>
    );
};

export default VoucherScreen;
