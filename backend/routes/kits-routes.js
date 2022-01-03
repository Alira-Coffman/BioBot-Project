const express = require('express');

const router = express.Router();
var test = require('./KITS_SHIPPING_DATA.json')

//DATABASE CONNECTION WOULD BE HERE
const KITS =test;

router.get('/:label_id_partial', (req, res, next) => {
    console.log('GET Request For Searching Kits');

    //extract label id partial

    const labelIdPartial = req.params.label_id_partial;

    //filter list
    const kits = KITS.filter(p => {
        return p.label_id.startsWith(labelIdPartial)
    });
   
    if(!kits)
    {
        return res.status(404).json({message: 'Could not find any kits matching'});
    }

    res.json({message: kits});

    
});

module.exports = router;
