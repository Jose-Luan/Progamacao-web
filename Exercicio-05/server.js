const app = require('./app');

app.listen(3333, () => console.log('http server running'));

const { v4: uuidv4 } = require('uuid');




const animes = [
  { id: uuidv4(), name: 'One Piece', genre: 'Action', studio: 'Toei Animation' },
  { id: uuidv4(), name: 'Naruto', genre: 'Action', studio: 'Pierrot' },
  { id: uuidv4(), name: 'Dragon Ball', genre: 'Action', studio: 'Toei Animation' },
  { id: uuidv4(), name: 'Attack on Titan', genre: 'Action', studio: 'MAPPA' },
  { id: uuidv4(), name: 'Fullmetal Alchemist', genre: 'Action', studio: 'Bones' }
];

// Listar todos os animes
app.get('/animes', (req, res) => {
  res.status(200).json(animes);
});

// Listar um anime por ID
app.get('/animes/:id', (req, res) => {
  const { id } = req.params;
  const anime = animes.find(a => a.id === id);

  if (!anime) {
    return res.status(404).json({ message: 'Anime not found' });
  }

  res.status(200).json(anime);
});

// Criar um novo anime
app.post('/animes', (req, res) => {
  const { name, genre, studio } = req.body;

  // Validação para evitar campos em branco
  if (!name || !genre || !studio) {
    return res.status(400).json({ message: 'All fields (name, genre, studio) are required' });
  }

  const newAnime = {
    id: uuidv4(),
    name,
    genre,
    studio
  };

  animes.push(newAnime);
  res.status(201).json(newAnime);
});

// Atualizar um anime por ID
app.put('/animes/:id', (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;

  const anime = animes.find(a => a.id === id);

  if (!anime) {
    return res.status(404).json({ message: 'Anime not found' });
  }

  // Validação para evitar campos em branco
  if (!name || !genre || !studio) {
    return res.status(400).json({ message: 'All fields (name, genre, studio) are required' });
  }

  anime.name = name;
  anime.genre = genre;
  anime.studio = studio;

  res.status(200).json(anime);
});

// Deletar um anime por ID
app.delete('/animes/:id', (req, res) => {
  const { id } = req.params;
  const index = animes.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Anime not found' });
  }

  animes.splice(index, 1);
  res.status(204).end(); 
});

module.exports = app;
