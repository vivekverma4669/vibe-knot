const express = require('express');
const haarModel= require('../Models/haar.module');
const haarRouter = express.Router();


// Get all earrings

haarRouter.get('/', async (req, res) => {
  try {
    const earrings = await haarModel.find();
    res.json(earrings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new earring

haarRouter.post('/create', async (req, res) => {
  const { name, type, quantity, weight, description, image, org_price, dis_price, category } = req.body;
  try {
    const newEarring = new haarModel({ name, type, quantity, weight, description, image, org_price, dis_price, category });
    await newEarring.save();
    res.status(201).json({ msg: 'Product added successfully', newEarring });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get a single earring by ID

haarRouter.get('/:id', async (req, res) => {
  try {
    const earring = await haarModel.findById(req.params.id);
    if (!earring) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(earring);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update an earring by ID
haarRouter.put('/update/:id', async (req, res) => {
  try {
    const updatedEarring = await haarModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEarring) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product updated successfully', updatedEarring });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete an earring by ID
haarRouter.delete('/delete/:id', async (req, res) => {
  try {
    const deletedEarring = await haarModel.findByIdAndDelete(req.params.id);
    if (!deletedEarring) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully', deletedEarring });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = haarRouter;
