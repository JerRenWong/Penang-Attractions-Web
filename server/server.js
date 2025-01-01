const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data - attractions
const attractions = [
  {
    id: 1,
    name: 'Georgetown Heritage',
    description: 'UNESCO World Heritage Site featuring unique architecture and culture',
    image: '/images/georgetown.jpg',
    details: 'Georgetown is a UNESCO World Heritage Site known for its unique blend of cultural influences...'
  },
  // Add more attractions here
];

// API Routes
app.get('/api/attractions', (req, res) => {
  res.json(attractions);
});

app.get('/api/attractions/:id', (req, res) => {
  const attraction = attractions.find(a => a.id === parseInt(req.params.id));
  if (!attraction) return res.status(404).json({ message: 'Attraction not found' });
  res.json(attraction);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
