const Lyceum = require('../models/lyceum')

const index = (req, res) => {
    console.log('running ')
    Lyceum.find()
            .then(result => {
                res.status(200).json(result)
            })
}

const store = (req, res) => {
    
    const item = new Lyceum(req.body)

    item.save()
            .then(result => res.json({ 'message': 'Added New Question and Answer'}))
            .catch(err => console.log(err))
}


module.exports = {
    index, store
}