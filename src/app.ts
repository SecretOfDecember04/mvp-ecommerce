import express from 'express';

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Basic route to test the server
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Placeholder for additional routes
// e.g., app.use('/api/products', productRoutes);

// Define the port the server will run on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
