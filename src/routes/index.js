const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
    const { id, live_mode, type, date_created, user_id, api_version, action, data } = req.body;
    if (id, live_mode, type, date_created, user_id, api_version, action, data) {
        console.log({ id, live_mode, type, date_created, user_id, api_version, action, data })
        res.sendStatus(201)
    }else{
        res.sendStatus(500)
    }
    
})

module.exports = router;