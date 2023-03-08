const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
    const { id, live_mode, type, date_created, user_id, api_version, action, data } = req.body;
    console.log({id, live_mode, type, date_created, user_id, api_version, action, data })
    res.sendStatus(201)
})

module.exports = router;