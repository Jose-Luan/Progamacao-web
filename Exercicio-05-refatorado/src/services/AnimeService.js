const Anime = require('../models/AnimeModel');
const repository = require('../repositories/AnimeRepository');

class AnimeService {
    getAllAnimes() {
        return repository.getAll();
    }
    getAnimesById(id) {
        return repository.getById(id);
    }
    createAnime(data) {
        const {name, genre, studio} = data;
        const newAnime = {
            name,
            genre,
            studio
        };
        return repository.create(newAnime);
    }
    update(id, data) {
        return repository.update(id,data);
    }
    delete(id) {
        return repository.delete(id);
    }
}

module.exports = new AnimeService();
