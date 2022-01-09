const router = require('express').Router();
const {Favorites} = require('../../models');
const { restore } = require('../../models/User');

//all routes use '/favorites'

//Get all Favorites
router.get('/', async (req, res) => {
    try
    {
        const allFavorites = await Favorites.findAll();
        res.status(200).json(allFavorites);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

//Get Favorite by ID
router.get('/:id', async (req, res) => {
    try
    {
        const favoriteData = await Favorites.findByPk(req.params.id);
        
        if(!favoriteData)
        {
            res.status(404).json({message: "No favorite found with that id!!" });
            return;
        }

        res.status(200).json(favoriteData);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

//Create Favorite
router.post('/', async (req, res) => {
//example post body..
  /*
      {
          "listing": '{}',    //listing data from roomsters api
          "user_id": 1
      }
  */
    try
    {
        const newFavorite = await Favorites.create(req.body);
        res.status(204).json(newFavorite);

    }catch(err)
    {
        console.log(err);
        restore.status(500).send(err);
    }
});

//Update Favorite by ID
router.put('/:id', async (req, res) => {
    try
    {
        const updatedFavorite = await Favorites.update(req.body, {where: {id: req.params.id}});

        if(!updatedFavorite)
        {
            res.status(404).json({message: "No favorite found with that id!!" });
            return;
        }

        res.status(204).send(`Favorite ${req.params.id} Has Been Successfully Updated!`);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

//Delete Favorite by ID
router.delete('/:id', async (req, res) => {
    try
    {
        const deletedFavorite = await Favorites.destroy({where:{id: req.params.id}});

        if(!deletedFavorite)
        {
            res.status(404).json({message: 'No favorite with that id found!!'});
            return;
        }

        res.status(204).json({message: `Favorite ${req.params.id} Has Been Successfully Deleted!`});

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;