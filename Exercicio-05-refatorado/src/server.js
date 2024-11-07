const app = require('./app');
const port = 3000;

const AnimeController = require('./controllers/AnimeController');

app.get('/animes', AnimeController.getAllAnimes);
app.get('/animes/:id', AnimeController.getAnimesById);
app.post('/animes', AnimeController.createAnime);
app.put('/animes/:id', AnimeController.update);
app.delete('/animes/:id', AnimeController.delete);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}.`);
})
