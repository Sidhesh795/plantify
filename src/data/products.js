export const products = [
  // Succulents Category
  {
    id: 1,
    name: "Jade Plant",
    price: 24.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f2360af777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 19.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1589411454940-67a017535ecf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },

  // Flowering Plants Category
  {
    id: 3,
    name: "Peace Lily",
    price: 32.99,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "African Violet",
    price: 28.99,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },

  // Air-Purifying Plants Category
  {
    id: 5,
    name: "Snake Plant",
    price: 29.99,
    category: "Air-Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509681-02219ad47fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 22.99,
    category: "Air-Purifying Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

export const getProductsByCategory = () => {
  const categories = {};
  products.forEach(product => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });
  return categories;
};
