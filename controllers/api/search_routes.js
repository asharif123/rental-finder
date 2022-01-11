const router = require('express').Router();
const {Search} = require('../../models');
const { restore } = require('../../models/User');

//all routes use '/searches'

//Get all Searches
router.get('/', async (req, res) => {
    try
    {
        const allSearches = await Search.findAll();
        res.status(200).json(allSearches);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

//Get Search by ID
router.get('/:id', async (req, res) => {
    try
    {
        const searchData = await Search.findByPk(req.params.id);
        
        if(!searchData)
        {
            res.status(404).json({message: "No Search found with that id!!" });
            return;
        }

        res.status(200).json(searchData);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

//Create Search
router.post('/', async (req, res) => {
//example post body..
  /*
      {
          "city_name": 'Irvine',    
          "state_name": 'CA',    
          "minimum_budget": 500,    
          "maximum_budget": 1200
      }
  */
    try
    {
        const newSearch = await Search.create(req.body);
        res.status(204).json(newSearch);

    }catch(err)
    {
        console.log(err);
        restore.status(500).send(err);
    }
});

//Update Search by ID
router.put('/:id', async (req, res) => {
    try
    {
        const updatedSearch = await Search.update(req.body, {where: {id: req.params.id}});

        if(!updatedSearch)
        {
            res.status(404).json({message: "No Search found with that id!!" });
            return;
        }

        res.status(204).send(`Search ${req.params.id} Has Been Successfully Updated!`);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

//Delete Search by ID
router.delete('/:id', async (req, res) => {
    try
    {
        const deletedSearch = await Search.destroy({where:{id: req.params.id}});

        if(!deletedSearch)
        {
            res.status(404).json({message: 'No Search with that id found!!'});
            return;
        }

        res.status(204).json({message: `Search ${req.params.id} Has Been Successfully Deleted!`});

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;