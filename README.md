
# Plantify - Houseplant E-commerce Store

A modern React-based e-commerce application for houseplants, built with Redux for state management and featuring a responsive design.

## Features

### Landing Page
- Beautiful background image with company branding
- Company description and mission statement
- "Get Started" button linking to product catalog
- Fully responsive design

### Product Listing
- 6 unique houseplants organized into 3 categories:
  - **Succulents**: Jade Plant, Aloe Vera
  - **Flowering Plants**: Peace Lily, African Violet
  - **Air-Purifying Plants**: Snake Plant, Spider Plant
- Each product displays thumbnail, name, and price
- "Add to Cart" functionality with button state management
- Cart icon updates with item count

### Shopping Cart
- Complete cart management system
- Display total number of plants and total cost
- Individual plant cards showing thumbnail, name, and unit price
- Quantity controls (increase/decrease buttons)
- Delete functionality for removing items
- Checkout button (displays "Coming Soon" message)
- Continue Shopping button linking back to products

### Header Navigation
- Appears on both product listing and cart pages
- Shopping cart icon with live item count
- Navigation links to different pages
- Responsive design

### Redux State Management
- Centralized state management using Redux Toolkit
- Cart slice handling all cart operations:
  - Add to cart
  - Remove from cart
  - Increase/decrease quantity
  - Calculate totals
- Persistent state during session

## Technology Stack

- **React 18** - Frontend framework
- **Redux Toolkit** - State management
- **React Router DOM** - Navigation
- **CSS3** - Styling with modern features
- **Responsive Design** - Mobile-first approach

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Sidhesh795/plantify.git
   cd plantify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── LandingPage.js
│   ├── ProductListing.js
│   └── ShoppingCart.js
├── redux/
│   ├── store.js
│   └── cartSlice.js
├── data/
│   └── products.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Features Implemented

✅ **GitHub Repository (6 points)**
- Public repository with all source code
- Complete Redux implementation with store, actions, and reducers

✅ **Landing Page (5 points)**
- Background image with plant theme
- Company description paragraph
- "Plantify" company name prominently displayed
- "Get Started" button linking to product listing

✅ **Product Listing Page (9 points)**
- Six unique houseplants with thumbnails, names, and prices
- Plants grouped into three categories
- Add to Cart functionality with all required behaviors

✅ **Header (7 points)**
- Displays on product listing and cart pages
- Shopping cart icon with live item count
- Navigation between pages

✅ **Shopping Cart Page (23 points)**
- All required functionality implemented
- Complete cart management system
- Responsive design

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
