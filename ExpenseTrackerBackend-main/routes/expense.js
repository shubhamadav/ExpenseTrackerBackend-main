const express = require('express');
const expenseController = require('../controller/expense');
const userauthentication = require('../middleware/auth');

const router = express.Router();

// ... Other routes ...

// Add pagination route for getting expenses
router.get('/getexpenses', userauthentication.authenticate, async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    try {
        const { data, total } = await getPaginatedData(page, pageSize);
        res.json({ data, total });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
