const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const PetProduct = require('../../models/PetProduct');
const User = require('../../models/User');

// Get all pet products
router.get('/', async (req, res) => {
    try {
        const products = await PetProduct.find();
        res.json(products);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Buy a pet product
router.post('/:id/buy', auth, async (req, res) => {
    try {
        const product = await PetProduct.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        if (!product.available) {
            return res.status(400).json({ msg: 'Product already purchased' });
        }

        product.available = false;
        await product.save();

        const user = await User.findById(req.user.id);
        user.purchasedProducts.push(product.id);
        await user.save();

        res.json(user.purchasedProducts);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
