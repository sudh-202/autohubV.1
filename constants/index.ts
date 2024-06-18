import path from "path";

export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

// Menu

interface MenuItem {
  title: string;
  path: string;
  subMenu: { title: string; path: string }[];
}

export const menuItems: MenuItem[] = [
  {
    title: "Buy Car",
    path: "/",
    subMenu: [
      { title: "Used Cars", path: "/buy-car/used" },
      { title: "New Cars", path: "/buy-car/new" },
      { title: "Certified Cars", path: "/buy-car/certified" },
    ],
  },
  {
    title: "Sell Car",
    path: "/",
    subMenu: [
      { title: "Sell Used Car", path: "/sell-car/used" },
      { title: "Sell New Car", path: "/sell-car/new" },
    ],
  },
  {
    title: "Car Services",
    path: "/",
    subMenu: [
      { title: "Car Inspection", path: "/car-services/inspection" },
      { title: "Car Repair", path: "/car-services/repair" },
      { title: "Car Maintenance", path: "/car-services/maintenance" },
    ],
  },
  {
    title: "Finance",
    path: "/",
    subMenu: [
      { title: "Loan", path: "/finance/loan" },
      { title: "EMI Calculator", path: "/finance/calculator" },
      { title: "Insurance", path: "/finance/insurance" },
    ],
  },
  {
    title: "More",
    path: "/",
    subMenu: [
      { title: "About Us", path: "/more/about" },
      { title: "Contact Us", path: "/more/contact" },
      { title: "Blog", path: "/more/blog" },
      { title: "Careers", path: "/more/careers" },
    ],
  },
];

export const menuItemsHindi = [
  {
    title: "मुख्य पृष्ठ", // Home
    subMenu: [
      "उपमुख्य पृष्ठ 1", // Sub Home 1
      "उपमुख्य पृष्ठ 2", // Sub Home 2
    ],
  },
  {
    title: "गाड़ियों के बारे में", // About Cars
    subMenu: [
      "सभी गाड़ियाँ", // All Cars
      "नवीनतम गाड़ियाँ", // Latest Cars
    ],
  },
  {
    title: "संपर्क करें", // Contact Us
    subMenu: [
      "हमारे बारे में", // About Us
      "हमसे संपर्क करें", // Contact Us
    ],
  },
];

export interface LanguageOption {
  label: string;
  flagIcon: string;
  langCode: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { label: "English (US)", flagIcon: "flag-icon-css-us", langCode: "en" },
  { label: "हिन्दी", flagIcon: "flag-icon-css-in", langCode: "hi" },
  { label: "Deutsch", flagIcon: "flag-icon-css-de", langCode: "de" },
  { label: "Italiano", flagIcon: "flag-icon-css-it", langCode: "it" },
  { label: "中文 (繁體)", flagIcon: "flag-icon-css-cn", langCode: "zh-Hant" },
];

// Banner search bar items
export const budgets = [
  "10,000 - 20,000",
  "20,000 - 30,000",
  "30,000 - 40,000",
];
export const vehicleTypes = ["SUV", "Sedan", "Truck", "Coupe"];
export const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
];

// Features
export interface CarProps {
  city_mpg: number;
  make: string;
  model: string;
  year: number;
  transmission: string;
  drive: string;
  image: string;
  price?: number | string;
  isNewlyLaunched?: boolean;
  isUpcoming?: boolean;
  isPopular?: boolean;
}

export const cars: CarProps[] = [
  {
    city_mpg: 15,
    make: "Mercedes",
    model: "Maybach GLS",
    year: 2023,
    transmission: "a",
    drive: "awd",
    image: "/images/mercedes-maybach-gls.jpg",
    price: "100,000",
    isNewlyLaunched: true,
    isUpcoming: true,
  },
  {
    city_mpg: 13,
    make: "Mercedes",
    model: "AMG S 63 E Performance",
    year: 2023,
    transmission: "a",
    drive: "awd",
    image: "/images/mercedes-amg-s63-e-performance.jpg",
    price: "150,000",
    isNewlyLaunched: true,
    isUpcoming: true,
    isPopular: true,
  },
  {
    city_mpg: 17,
    make: "Volkswagen",
    model: "Virtus GT",
    year: 2023,
    transmission: "m",
    drive: "fwd",
    image: "/images/volkswagen-virtus-gt.jpg",
    price: "20,000",
    isNewlyLaunched: true,
    isUpcoming: true,
    isPopular: true,
  },
  {
    city_mpg: 16,
    make: "Hyundai",
    model: "Venue N Line",
    year: 2023,
    transmission: "a",
    drive: "fwd",
    image: "/images/hyundai-venue-n-line.jpg",
    price: "25,000",
    isNewlyLaunched: false,
    isUpcoming: true,
  },
  {
    city_mpg: 14,
    make: "BMW",
    model: "M4",
    year: 2023,
    transmission: "a",
    drive: "rwd",
    image: "/images/bmw-m4.jpg",
    price: "80,000",
    isNewlyLaunched: true,
    isUpcoming: true,
    isPopular: true,
  },
  {
    city_mpg: 18,
    make: "Tesla",
    model: "Model X",
    year: 2024,
    transmission: "a",
    drive: "awd",
    image: "/images/tesla-model-x.jpg",
    price: "120,000",
    isUpcoming: true,
    isNewlyLaunched: true,
    isPopular: true,
  },
  {
    city_mpg: 20,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    transmission: "a",
    drive: "fwd",
    image: "/images/toyota-camry.jpg",
    price: "25,000",
    isPopular: true,
    isNewlyLaunched: true,
    isUpcoming: true,
  },
  {
    city_mpg: 18,
    make: "Tesla",
    model: "Model 7",
    year: 2023,
    transmission: "m",
    drive: "rwd",
    image: "/images/toyota-camry.jpg",
    price: "70,000",
    isPopular: true,
    isNewlyLaunched: false,
    isUpcoming: true,
  },
];

//Compare
export const comparisons = [
  {
    car1: cars[0], // Mahindra XUV 3XO
    car2: cars[1], // Tata Nexon
  },
  {
    car1: cars[2], // Toyota Urban Cruiser Taisor
    car2: cars[3], // Maruti Fronx
  },
  {
    car1: cars[4], // Maruti Fronx
    car2: cars[5], // Maruti Brezza
  },
];

//brands

export interface BrandProps {
  name: string;
  logo: string;
  url: string;
}

export const brands: BrandProps[] = [
  // Existing brands
  { name: 'Maruti Suzuki', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80', url: '/brands/maruti-suzuki' },
  { name: 'Tata', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80', url: '/brands/tata' },
  { name: 'Toyota', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80', url: '/brands/toyota' },
  { name: 'Hyundai', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80', url: '/brands/hyundai' },
  { name: 'Mahindra', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80', url: '/brands/mahindra' },
  { name: 'BMW', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80', url: '/brands/bmw' },
  { name: 'Mercedes-Benz', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80', url: '/brands/mercedes-benz' },
  { name: 'Kia', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80', url: '/brands/kia' },
  { name: 'Land Rover', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=80', url: '/brands/land-rover' },
  { name: 'Audi', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80', url: '/brands/audi' },
  { name: 'Skoda', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=80', url: '/brands/skoda' },
  { name: 'MG', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80', url: '/brands/mg' },
  { name: 'Porsche', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/19/brands/logos/porsche.jpg?v=1631164048727&q=80', url: '/brands/porsche' },
  { name: 'Citroen', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/74/brands/logos/citroen1649763818937.jpg?v=1649763819072&q=80', url: '/brands/citroen' },
  { name: 'Volvo', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=80', url: '/brands/volvo' },
  { name: 'Lamborghini', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/30/brands/logos/lamborghini.jpg?v=1631163814246&q=80', url: '/brands/lamborghini' },
  { name: 'Volkswagen', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=80', url: '/brands/volkswagen' },
  { name: 'Honda', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=80', url: '/brands/honda' },
  { name: 'Lexus', logo: 'https://imgd.aeplcdn.com/0X0/cw/brands/logos/lexus.png?v=10&q=80', url: '/brands/lexus' },
  { name: 'Jeep', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/43/brands/logos/jeep.jpg?v=1631163646486&q=80', url: '/brands/jeep' },
  // { name: 'Ferrari', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/48/brands/logos/ferrari1647235980631.jpg?v=1647235980974&q=80', url: '/brands/ferrari' },
  // { name: 'Jaguar', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/22/brands/logos/jaguar1647235983891.jpg?v=1647235984165&q=80', url: '/brands/jaguar' },
  // { name: 'Renault', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/14/brands/logos/renault1683044304702.jpg?v=1683044304936&q=80', url: '/brands/renault' },
  // { name: 'Rolls-Royce', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/41/brands/logos/rolls-royce1647235987133.jpg?v=1647235987398&q=80', url: '/brands/rolls-royce' },
  // { name: 'Maserati', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/12/brands/logos/maserati1647235989782.jpg?v=1647235990045&q=80', url: '/brands/maserati' },
  // { name: 'Mini', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/13/brands/logos/mini1647235992633.jpg?v=1647235992899&q=80', url: '/brands/mini' },
  // { name: 'Fiat', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/33/brands/logos/fiat1647235995103.jpg?v=1647235995367&q=80', url: '/brands/fiat' },
  // { name: 'Bugatti', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/bugatti1647235998256.jpg?v=1647235998509&q=80', url: '/brands/bugatti' },
  // { name: 'Lotus', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/24/brands/logos/lotus1647236000866.jpg?v=1647236001120&q=80', url: '/brands/lotus' },
  // { name: 'Bentley', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/35/brands/logos/bentley1647236003601.jpg?v=1647236003854&q=80', url: '/brands/bentley' },
  // { name: 'Aston Martin', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/25/brands/logos/aston-martin1647236006344.jpg?v=1647236006597&q=80', url: '/brands/aston-martin' },
  // // New brands
  // { name: 'Pravaig', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/49/brands/logos/pravaig.jpg?v=1647236052167&q=80', url: '/brands/pravaig' },
  // { name: 'Fisker', logo: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/50/brands/logos/fisker1647236054982.jpg?v=1647236055238&q=80', url: '/brands/fisker' },
  // // Add more brands as needed
];
