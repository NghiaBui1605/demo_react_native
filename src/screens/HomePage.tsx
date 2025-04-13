import { useState } from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabParamList } from "../types/route";
import styles from "../styles/HomPage";

const HomeScreen = () => {
    // Data for categories with images
    const categories = [
        { id: "1", name: "Fruit", image: require("../../assets/apple.png") },
        { id: "2", name: "Burger", image: require("../../assets/burger.png") },
        { id: "3", name: "Yogurt", image: require("../../assets/yogurt.png") },
        { id: "4", name: "Cream", image: require("../../assets/ice-cream.png") },
        { id: "5", name: "Coffee", image: require("../../assets/coffee.png") },
    ];

    // Dummy data for products with category
    const allProducts = [
        // Fruit
        {
            id: "1",
            name: "Kiwi Shake II",
            price: "₱98.00",
            image: require("../../assets/kiwi-shake.png"),
            source: "McDonald's",
            category: "Fruit",
            description: "Kiwi Shake II is a refreshing blend of kiwi and tropical fruits, perfect for a sunny day.",
        },
        {
            id: "2",
            name: "Blueberry Maze",
            price: "₱98.00",
            image: require("../../assets/blueberry-maze.png"),
            source: "McDonald's",
            category: "Fruit",
            description: "Blueberry Maze is a sweet and tangy mix of blueberries and citrus, great for a quick refreshment.",
        },
        {
            id: "5",
            name: "Mango Smoothie",
            price: "₱110.00",
            image: require("../../assets/mango-smoothie.png"),
            source: "Starbucks",
            category: "Fruit",
            description: "Mango Smoothie is a creamy blend of ripe mangoes and yogurt, ideal for a healthy treat.",
        },
        {
            id: "6",
            name: "Apple Juice",
            price: "₱85.00",
            image: require("../../assets/apple-juice.png"),
            source: "Jollibee",
            category: "Fruit",
            description: "Apple Juice is a classic, crisp drink made from fresh apples, perfect for all ages.",
        },
        // Burger
        {
            id: "3",
            name: "Pats Burger",
            price: "₱134.00",
            image: require("../../assets/pats-burger.png"),
            source: "Jollibee",
            category: "Burger",
            description: "Pats Burger is a juicy beef patty with fresh lettuce, tomatoes, and a special sauce.",
        },
        {
            id: "7",
            name: "Cheese Burger",
            price: "₱150.00",
            image: require("../../assets/cheese-burger.png"),
            source: "McDonald's",
            category: "Burger",
            description: "Cheese Burger is a classic with melted cheese, beef patty, and pickles on a soft bun.",
        },
        {
            id: "8",
            name: "Chicken Burger",
            price: "₱140.00",
            image: require("../../assets/chicken-burger.png"),
            source: "KFC",
            category: "Burger",
            description: "Chicken Burger features a crispy chicken patty with lettuce and mayo, a tasty alternative.",
        },
        {
            id: "9",
            name: "Veggie Burger",
            price: "₱120.00",
            image: require("../../assets/veggie-burger.png"),
            source: "Burger King",
            category: "Burger",
            description: "Veggie Burger is a healthy option with a plant-based patty, fresh veggies, and a light sauce.",
        },
        // Yogurt
        {
            id: "4",
            name: "Berries Yogurt",
            price: "₱98.00",
            image: require("../../assets/berries-yogurt.png"),
            source: "McDonald's",
            category: "Yogurt",
            description: "Berries Yogurt is a creamy yogurt with mixed berries, perfect for a light snack.",
        },
        {
            id: "10",
            name: "Strawberry Yogurt",
            price: "₱95.00",
            image: require("../../assets/strawberry-yogurt.png"),
            source: "Starbucks",
            category: "Yogurt",
            description: "Strawberry Yogurt is a sweet and creamy treat with fresh strawberry chunks.",
        },
        {
            id: "11",
            name: "Plain Yogurt",
            price: "₱80.00",
            image: require("../../assets/plain-yogurt.png"),
            source: "Jollibee",
            category: "Yogurt",
            description: "Plain Yogurt is a simple, unsweetened yogurt, great for pairing with fruits or granola.",
        },
        {
            id: "12",
            name: "Mango Yogurt",
            price: "₱100.00",
            image: require("../../assets/mango-yogurt.png"),
            source: "KFC",
            category: "Yogurt",
            description: "Mango Yogurt combines creamy yogurt with the tropical sweetness of mangoes.",
        },
        // Cream
        {
            id: "13",
            name: "Vanilla Cream",
            price: "₱90.00",
            image: require("../../assets/vanilla-cream.png"),
            source: "McDonald's",
            category: "Cream",
            description: "Vanilla Cream is a rich and smooth dessert with a classic vanilla flavor.",
        },
        {
            id: "14",
            name: "Chocolate Cream",
            price: "₱95.00",
            image: require("../../assets/chocolate-cream.png"),
            source: "Starbucks",
            category: "Cream",
            description: "Chocolate Cream is a decadent treat with a rich chocolate flavor, perfect for dessert.",
        },
        {
            id: "15",
            name: "Strawberry Cream",
            price: "₱100.00",
            image: require("../../assets/strawberry-cream.png"),
            source: "Jollibee",
            category: "Cream",
            description: "Strawberry Cream is a light and fruity dessert with a creamy strawberry taste.",
        },
        {
            id: "16",
            name: "Caramel Cream",
            price: "₱110.00",
            image: require("../../assets/caramel-cream.png"),
            source: "KFC",
            category: "Cream",
            description: "Caramel Cream is a sweet and sticky dessert with a rich caramel flavor.",
        },
        // Coffee
        {
            id: "17",
            name: "Espresso",
            price: "₱120.00",
            image: require("../../assets/espresso.png"),
            source: "Starbucks",
            category: "Coffee",
            description: "Espresso is a strong and bold coffee shot, perfect for a quick caffeine boost.",
        },
        {
            id: "18",
            name: "Latte",
            price: "₱130.00",
            image: require("../../assets/latte.png"),
            source: "Starbucks",
            category: "Coffee",
            description: "Latte is a smooth blend of espresso and steamed milk, topped with a light foam.",
        },
        {
            id: "19",
            name: "Cappuccino",
            price: "₱125.00",
            image: require("../../assets/cappuccino.png"),
            source: "McDonald's",
            category: "Coffee",
            description: "Cappuccino is a balanced mix of espresso, steamed milk, and frothy foam.",
        },
        {
            id: "20",
            name: "Mocha",
            price: "₱140.00",
            image: require("../../assets/mocha.png"),
            source: "Jollibee",
            category: "Coffee",
            description: "Mocha is a delicious blend of espresso, chocolate, and steamed milk.",
        },
    ];

    const navigation = useNavigation<NavigationProp<TabParamList, "Home">>();

    // State cho danh muc và tìm kiếm
    const [selectedCategory, setSelectedCategory] = useState("Fruit");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    // Lọc sản phẩm theo danh mục khi không tìm kiếm
    const filteredProducts = allProducts
        .filter((product) => product.category === selectedCategory)
        .slice(0, 4);

    // Hàm xử lý tìm kiếm
    const handleSearch = () => {
        if (searchQuery.trim() === "") {
            setIsSearching(false);
            setSearchResults([]);
            setSelectedCategory("Fruit"); // Reset về category mặc định
            return;
        }

        const results = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(results);
        setIsSearching(true);
        setSelectedCategory(""); // Bỏ active category khi tìm kiếm
    };

    // Render category item
    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.categoryItem,
                selectedCategory === item.name && styles.categoryItemSelected,
            ]}
            onPress={() => {
                setSelectedCategory(item.name);
                setIsSearching(false);
                setSearchQuery("");
                setSearchResults([]);
            }}
        >
            <Image source={item.image} style={{ width: 30, height: 30 }} resizeMode="contain" />
            <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    // Render product item
    const renderProductItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate("Detail", { product: item })}
        >
            <Image source={item.image} style={styles.productImage} resizeMode="contain" />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 10, color: "#888" }}>{item.source} </Text>
                <Ionicons name="checkmark-circle-outline" size={10} color="#1A7E6C" />
            </View>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addToCartButton}>
                <Ionicons name="cart-outline" size={16} color="#fff" />
                <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <ImageBackground
            source={require("../../assets/half-background.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            Explore the taste{"\n"}of Asian Food
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                            <TouchableOpacity
                                style={styles.cartIcon}
                                onPress={() => navigation.navigate("Order")}
                            >
                                <Ionicons name="cart-outline" size={21} color="#333" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                <Image
                                    source={require("../../assets/user.png")}
                                    style={{ width: 30, height: 30 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
                        {/* Search bar */}
                        <View style={styles.searchContainer}>
                            <Ionicons
                                name="search-outline"
                                size={20}
                                color="#1A7E6C"
                                style={{ marginRight: 10 }}
                            />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Find food or restaurant..."
                                placeholderTextColor="#c8c8c8"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                onSubmitEditing={handleSearch}
                                returnKeyType="search"
                            />
                        </View>

                        {/* Promo banner */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingRight: 20 }} 
                        >
                            {/* Banner 1 */}
                            <ImageBackground
                                source={require("../../assets/banner01-gradient.png")}
                                style={styles.bannerContainer}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <View style={styles.bannerTextContainer}>
                                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                                        <Text style={styles.textHello}>Hello!</Text>
                                        <Text style={styles.textLukeThomp}>Luke Thomp</Text>
                                    </View>
                                    <Text style={styles.bannerText}>
                                        Eat gelato{"\n"}like there's{"\n"}no tomorrow!
                                    </Text>
                                </View>
                                <Image
                                    source={require("../../assets/hold-ice-cream.png")}
                                    style={styles.bannerImage}
                                    resizeMode="cover"
                                />
                            </ImageBackground>

                            {/* Banner 2 */}
                            <ImageBackground
                                source={require("../../assets/banner02-gradient.png")} 
                                style={styles.bannerContainer} 
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <View style={styles.bannerTextContainer}>
                                    <Text style={styles.banner2Discount}>Discount 50</Text>
                                    <Text style={styles.banner2Title}>50%</Text>
                                    <Text style={styles.banner2Subtitle}>All Asian Foodie</Text>
                                </View>
                                <View style={styles.freeDeliveryBadge}>
                                    <Text style={styles.freeDeliveryText}>Free Delivery</Text>
                                </View>
                            </ImageBackground>
                        </ScrollView>

                        {/* Categories horizontal list */}
                        <FlatList
                            data={categories}
                            renderItem={renderCategoryItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.categoryList}
                            contentContainerStyle={{
                                paddingLeft: 20,
                                paddingRight: 12,
                            }}
                        />

                        {/* Recommendations section */}
                        <View style={styles.recommendationHeader}>
                            <Text style={styles.recommendationTitle}>Recommendation</Text>
                        </View>

                        {isSearching && searchResults.length === 0 ? (
                            <View style={{ alignItems: "center", marginTop: 120 }}>
                                <Text style={{ fontSize: 16, color: "#666" }}>
                                    Không tìm thấy sản phẩm với từ khóa "{searchQuery}"
                                </Text>
                            </View>
                        ) : (
                            <FlatList
                                data={isSearching ? searchResults : filteredProducts}
                                renderItem={renderProductItem}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                scrollEnabled={false}
                                contentContainerStyle={styles.productList}
                            />
                        )}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;