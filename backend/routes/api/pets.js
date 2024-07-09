const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Pet = require('../../models/Pet');
const User = require('../../models/User');

// Get all pets
router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Adopt a pet
router.post('/:id/adopt', auth, async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).json({ msg: 'Pet not found' });
        }

        if (!pet.available) {
            return res.status(400).json({ msg: 'Pet already adopted' });
        }

        pet.available = false;
        await pet.save();

        const user = await User.findById(req.user.id);
        user.adoptedPets.push(pet.id);
        await user.save();

        res.json(user.adoptedPets);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
