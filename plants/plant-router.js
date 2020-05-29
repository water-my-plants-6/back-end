const express = require('express');
const plant = require("./plant-model");
const router = express.Router();

router.get('/', (req,res) => {
    plant.getResources()
    .then(plant => {
        res.status(200).json(plant)
    })
    .catch( err => {
            res.status(500).json({ message: 'Cannot get plants'})
    })
})

router.get('/:id', (req,res) => {
    
    plant.getByID(req.params.id)
    .then(plants => {
        if(plants){
            res.json(plants)
        } else {
            res.status(404).json({ message: 'no plants matching that ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'an error has occurred'})
    })
}) 

router.post('/', (req,res) => {
    plant.add(req.body).then(newPlant =>{
        res.status(200).json(newPlant)
    }).catch(err => {
        res.status(500).json({message: 'an error has occurred'})
    })
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    plant.remove(id).then(deleted => {
        if(deleted){
            res.json({removed: deleted})
        }else{
            res.status(404).json({message: 'no task matching that ID exists'})
        }
    }).catch(err => {
        res.status(500).json({ message: 'an error has occurred' });
      });
})

module.exports = router;