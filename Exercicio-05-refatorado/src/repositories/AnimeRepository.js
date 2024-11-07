const Anime = require('../models/AnimeModel');

const { v4: uuidv4 } = require('uuid');

const Animes = [
  { id: uuidv4(), name: 'One Piece', genre: 'Action', studio: 'Toei Animation' },
  { id: uuidv4(), name: 'Naruto', genre: 'Action', studio: 'Pierrot' },
  { id: uuidv4(), name: 'Dragon Ball', genre: 'Action', studio: 'Toei Animation' },
  { id: uuidv4(), name: 'Attack on Titan', genre: 'Action', studio: 'MAPPA' },
  { id: uuidv4(), name: 'Fullmetal Alchemist', genre: 'Action', studio: 'Bones' }
];

class AnimeRepository {
  getAll() {
    return [...Animes];
  }

  getById(id) {
    const anime = Animes.find(a => a.id === id);
    return anime;
  }

  create(anime) {
    const newAnime = {
        id: uuidv4(),
        name: anime.name,
        genre: anime.genre,
        studio: anime.studio
    };
    Animes.push(newAnime);
    return newAnime;
  }

  update(id, anime) {
    const animeIndex = Animes.findIndex(a => a.id === id);
    Animes[animeIndex] = anime;
  }

  delete(id) {
    const animeIndex = Animes.findIndex(a => a.id === id);
    Animes.splice(animeIndex, 1);
  }

}

module.exports = new AnimeRepository();
