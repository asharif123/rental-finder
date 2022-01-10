const router = require('express').Router();
const {User, Favorites} = require('../../models');

//Get all users
router.get('/', async (req, res) =>{
    try
    {
        const allUserData = await User.findAll({include:[{model:Favorites}]});
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
        const userData = await User.findByPk(req.params.id, {include: [{model: Favorites}]});

        if (!userData) 
        {
            res.status(404).json({ message: 'No user found with that id!' });
            return;
        }

        res.status(200).json(userData);

    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

// CREATE new user.
router.post('/', async (req, res) => {

  //example post body..
  /*
      {
          "name": "Jane",
          "email": "Doe",
          "password": "JaneDonuts"
      }
  */
  try 
  {
    const dbUserData = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });

  } catch (err) 
  {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try
  {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) 
    {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword)
    {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });

  }catch (err)
  {
    console.log(err);
    res.status(500).json(err);
  }
});

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
