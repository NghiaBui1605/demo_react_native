export type TabParamList = {
  navigate(arg0: string): void;
  HomePage: undefined;
  Profile: undefined;
  Voucher: undefined;
  OrderHistory: undefined;
};

export type RootStackParamList = {
  navigate(arg0: string): void;
  Splash: undefined;
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
  Order: undefined;
  Detail: { product: Product } | undefined;
  Edit: undefined;
  About: undefined;
};

export type Product = {
  id: string;
  name: string;
  price: string;
  image: any;
  source: string;
  category: string;
  description: string;
  size?: { size: string }[];
};
