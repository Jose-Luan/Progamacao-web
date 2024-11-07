const AnimeService = require('../services/AnimeService');

class AnimeController {

    getAllAnimes(req, res) {
        const animes = AnimeService.getAllAnimes();
        res.status(200).json(animes);
    }

    getAnimesById(req, res) {
        const { id } = req.params;
        const anime = AnimeService.getAnimesById(id);
        res.status(200).json(anime);
    }

    createAnime(req, res) {
        const { name, genre, studio } = req.body;
        
        // Validation for empty fields
        if (!name || !genre || !studio) {
            return res.status(400).json({ 
                error: 'All fields (name, genre, studio) are required' 
            });
        }

        const anime = AnimeService.createAnime({ name, genre, studio });
        res.status(201).json(anime);
    }

    update(req, res) {
        const { id } = req.params;
        const { name, genre, studio } = req.body;

        // Validation for empty fields
        if (!name || !genre || !studio) {
            return res.status(400).json({ 
                error: 'All fields (name, genre, studio) are required' 
            });
        }

        const anime = AnimeService.update(id, { name, genre, studio });
        res.status(200).json(anime);
    }

    delete(req, res) {
        const { id } = req.params;
        const anime = AnimeService.delete(id);
        res.status(200).json(anime);
    }
  
}

module.exports = new AnimeController();
