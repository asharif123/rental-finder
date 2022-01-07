const router = require('express').Router();
const {User} = require('../../models');

//Get all users
router.get('/', async (req, res) =>{
    try
    {
        const allUserData = await User.findAll();
        res.status(200).json(allUserData);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
});

//Get user by :id
router.get('/:id', async (req, res) => {
    try
    {
        const userData = await User.findByPk(req.params.id);
        res.status(200).json(userData);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

//Create new user
router.post('/', async (req, res) => {
    //example post body..
    /*
        {
            "name": "Jane",
            "email": "Doe",
            "password": "JaneDonuts",
            "favRooms": ['{}','{}','{}'] // array of stringified room results from roomsters api
        }
    */
    try
    {
        const newUser = await User.create(req.body);
        console.log("A New User Has Been Successfully created!");
        res.status(201).json(newUser);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

//Update user by :id
router.put('/:id', async (req, res) => {
    try
    {
        const updatedUser = await User.update(req.body, {
            where: {
                id: req.params.id
            },
        });

        console.log(`User ${req.params.id} Has Been Successfully Updated!`);
        res.status(204).send(`User ${req.params.id} Has Been Successfully Updated!`);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

//Delete user by :id
router.delete('/:id', async (req, res) => {
    try
    {
        const deletedUser = await User.destroy({
            where: {
                id: req.params.id
            },
        });

        console.log(`User ${req.params.id} Has Been Successfully Deleted!`);
        res.status(204).json(deletedUser);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

module.exports = router;