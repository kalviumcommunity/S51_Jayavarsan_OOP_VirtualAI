const items = [
  {
    "id": "1",
    "shirt_name": "Vintage Blue T-Shirt",
    "rate": 1029,
    "rating": 4.5,
    "brand_name": "Retro Wear",
    "img_link": "https://example.com/images/vintage_blue_tshirt.jpg",
    "is_cart": true,
    "gender": "men"
  },
  {
    "id": "2",
    "shirt_name": "Striped Polo Shirt",
    "rate": 795,
    "rating": 3.8,
    "brand_name": "Classic Threads",
    "img_link": "https://example.com/images/striped_polo_shirt.jpg",
    "is_cart": true,
    "gender": "men"
  },
  {
    "id": "3",
    "shirt_name": "Graphic Print Tee",
    "rate": 1144,
    "rating": 4.2,
    "brand_name": "Urban Chic",
    "img_link": "https://example.com/images/graphic_print_tee.jpg",
    "is_cart": true,
    "gender": "men"
  },
  {
    "id": "4",
    "shirt_name": "Plaid Button-Up",
    "rate": 1619,
    "rating": 4.0,
    "brand_name": "Vintage Finds",
    "img_link": "https://example.com/images/plaid_button_up.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "5",
    "shirt_name": "Hawaiian Floral Shirt",
    "rate": 1469,
    "rating": 4.7,
    "brand_name": "Beach Paradise",
    "img_link": "https://example.com/images/hawaiian_floral_shirt.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "6",
    "shirt_name": "Plain White Tee",
    "rate": 669,
    "rating": 4.0,
    "brand_name": "Basics Co.",
    "img_link": "https://example.com/images/plain_white_tee.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "7",
    "shirt_name": "Denim Shirt",
    "rate": 1774,
    "rating": 4.3,
    "brand_name": "Denim Delight",
    "img_link": "https://example.com/images/denim_shirt.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "8",
    "shirt_name": "Flannel Shirt",
    "rate": 1499,
    "rating": 4.1,
    "brand_name": "Lumberjack Collection",
    "img_link": "https://example.com/images/flannel_shirt.jpg",
    "is_cart": true,
    "gender": "men"
  },
  {
    "id": "9",
    "shirt_name": "Vintage Rock Band Tee",
    "rate": 1529,
    "rating": 4.8,
    "brand_name": "Music Memories",
    "img_link": "https://example.com/images/vintage_rock_band_tee.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "10",
    "shirt_name": "Long Sleeve Henley",
    "rate": 1684,
    "rating": 4.2,
    "brand_name": "Casual Comforts",
    "img_link": "https://example.com/images/long_sleeve_henley.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "11",
    "shirt_name": "V-Neck Sweater",
    "rate": 2274,
    "rating": 4.5,
    "brand_name": "Cozy Knits",
    "img_link": "https://example.com/images/vneck_sweater.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "12",
    "shirt_name": "Button-Down Oxford",
    "rate": 1939,
    "rating": 4.3,
    "brand_name": "Dapper Duds",
    "img_link": "https://example.com/images/button_down_oxford.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "13",
    "shirt_name": "Tie-Dye T-Shirt",
    "rate": 1049,
    "rating": 4.6,
    "brand_name": "Groovy Garb",
    "img_link": "https://example.com/images/tie_dye_tshirt.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "14",
    "shirt_name": "Slogan Print Tee",
    "rate": 934,
    "rating": 4.2,
    "brand_name": "Statement Styles",
    "img_link": "https://example.com/images/slogan_print_tee.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "15",
    "shirt_name": "Slim Fit Dress Shirt",
    "rate": 2209,
    "rating": 4.4,
    "brand_name": "Sharp Looks",
    "img_link": "https://example.com/images/slim_fit_dress_shirt.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "16",
    "shirt_name": "Retro Bowling Shirt",
    "rate": 2399,
    "rating": 4.7,
    "brand_name": "Throwback Threads",
    "img_link": "https://example.com/images/retro_bowling_shirt.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "17",
    "shirt_name": "Pocket Tee",
    "rate": 1019,
    "rating": 4.0,
    "brand_name": "Essentials",
    "img_link": "https://example.com/images/pocket_tee.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "18",
    "shirt_name": "Sport Polo Shirt",
    "rate": 1644,
    "rating": 4.3,
    "brand_name": "Active Apparel",
    "img_link": "https://example.com/images/sport_polo_shirt.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "19",
    "shirt_name": "Cropped Hoodie",
    "rate": 2499,
    "rating": 4.1,
    "brand_name": "Street Style",
    "img_link": "https://example.com/images/cropped_hoodie.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "20",
    "shirt_name": "Embroidered Shirt",
    "rate": 2104,
    "rating": 4.5,
    "brand_name": "Artisan Creations",
    "img_link": "https://example.com/images/embroidered_shirt.jpg",
    "is_cart": false,
    "gender": "men"
  },
  {
    "id": "21",
    "shirt_name": "Vintage Blue Dress",
    "rate": 1129,
    "rating": 4.5,
    "brand_name": "Retro Chic",
    "img_link": "https://example.com/images/vintage_blue_dress.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "22",
    "shirt_name": "Floral Maxi Dress",
    "rate": 1095,
    "rating": 4.2,
    "brand_name": "Flower Power",
    "img_link": "https://example.com/images/floral_maxi_dress.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "23",
    "shirt_name": "Vintage Blue T-Shirt (Women's)",
    "rate": 1029,
    "rating": 4.5,
    "brand_name": "Retro Wear",
    "img_link": "https://example.com/images/vintage_blue_tshirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "24",
    "shirt_name": "Striped Polo Shirt (Women's)",
    "rate": 795,
    "rating": 3.8,
    "brand_name": "Classic Threads",
    "img_link": "https://example.com/images/striped_polo_shirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "25",
    "shirt_name": "Graphic Print Tee (Women's)",
    "rate": 1144,
    "rating": 4.2,
    "brand_name": "Urban Chic",
    "img_link": "https://example.com/images/graphic_print_tee_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "26",
    "shirt_name": "Plaid Button-Up (Women's)",
    "rate": 1619,
    "rating": 4.0,
    "brand_name": "Vintage Finds",
    "img_link": "https://example.com/images/plaid_button_up_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "27",
    "shirt_name": "Hawaiian Floral Shirt (Women's)",
    "rate": 1469,
    "rating": 4.7,
    "brand_name": "Beach Paradise",
    "img_link": "https://example.com/images/hawaiian_floral_shirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "28",
    "shirt_name": "Plain White Tee (Women's)",
    "rate": 669,
    "rating": 4.0,
    "brand_name": "Basics Co.",
    "img_link": "https://example.com/images/plain_white_tee_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "29",
    "shirt_name": "Denim Shirt (Women's)",
    "rate": 1774,
    "rating": 4.3,
    "brand_name": "Denim Delight",
    "img_link": "https://example.com/images/denim_shirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "30",
    "shirt_name": "Flannel Shirt (Women's)",
    "rate": 1499,
    "rating": 4.1,
    "brand_name": "Lumberjack Collection",
    "img_link": "https://example.com/images/flannel_shirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "31",
    "shirt_name": "Vintage Rock Band Tee (Women's)",
    "rate": 1529,
    "rating": 4.8,
    "brand_name": "Music Memories",
    "img_link": "https://example.com/images/vintage_rock_band_tee_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "32",
    "shirt_name": "Long Sleeve Henley (Women's)",
    "rate": 1684,
    "rating": 4.2,
    "brand_name": "Casual Comforts",
    "img_link": "https://example.com/images/long_sleeve_henley_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "33",
    "shirt_name": "V-Neck Sweater (Women's)",
    "rate": 2274,
    "rating": 4.5,
    "brand_name": "Cozy Knits",
    "img_link": "https://example.com/images/vneck_sweater_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "34",
    "shirt_name": "Button-Down Oxford (Women's)",
    "rate": 1939,
    "rating": 4.3,
    "brand_name": "Dapper Duds",
    "img_link": "https://example.com/images/button_down_oxford_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "35",
    "shirt_name": "Tie-Dye T-Shirt (Women's)",
    "rate": 1049,
    "rating": 4.6,
    "brand_name": "Groovy Garb",
    "img_link": "https://example.com/images/tie_dye_tshirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "36",
    "shirt_name": "Slogan Print Tee (Women's)",
    "rate": 934,
    "rating": 4.2,
    "brand_name": "Statement Styles",
    "img_link": "https://example.com/images/slogan_print_tee_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "37",
    "shirt_name": "Slim Fit Dress Shirt (Women's)",
    "rate": 2209,
    "rating": 4.4,
    "brand_name": "Sharp Looks",
    "img_link": "https://example.com/images/slim_fit_dress_shirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "38",
    "shirt_name": "Retro Bowling Shirt (Women's)",
    "rate": 2399,
    "rating": 4.7,
    "brand_name": "Throwback Threads",
    "img_link": "https://example.com/images/retro_bowling_shirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "39",
    "shirt_name": "Pocket Tee (Women's)",
    "rate": 1019,
    "rating": 4.0,
    "brand_name": "Essentials",
    "img_link": "https://example.com/images/pocket_tee_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "40",
    "shirt_name": "Sport Polo Shirt (Women's)",
    "rate": 1644,
    "rating": 4.3,
    "brand_name": "Active Apparel",
    "img_link": "https://example.com/images/sport_polo_shirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "41",
    "shirt_name": "Cropped Hoodie (Women's)",
    "rate": 2499,
    "rating": 4.1,
    "brand_name": "Street Style",
    "img_link": "https://example.com/images/cropped_hoodie_women.jpg",
    "is_cart": false,
    "gender": "women"
  },
  {
    "id": "42",
    "shirt_name": "Embroidered Shirt (Women's)",
    "rate": 2104,
    "rating": 4.5,
    "brand_name": "Artisan Creations",
    "img_link": "https://example.com/images/embroidered_shirt_women.jpg",
    "is_cart": false,
    "gender": "women"
  }
];

export default items;
