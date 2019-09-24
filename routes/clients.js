const router = require ('express').Router();
const Clients = require('../db/clients.json');

router.get('/', (req, res) => {
    res.send(Clients)
});
router.get('/client/:id', (req, res) => {
    let id = req.params.id;
    let client = Clients.find(client => client.id === Number(id))
    if(client) res.send(client);
    else res.sendStatus(404);
})
router.get('/:name', (req, res) => {
    let value = req.params.name;
    let client = Clients.find(client => client.name.toLowerCase().includes(value.toLowerCase()))
    if(client) res.send(client);
    else res.sendStatus(404)
})

module.exports = router;