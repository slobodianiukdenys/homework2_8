const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/pull-request', (req, res) => {
    const { title, description, author, repository } = req.body;
    res.status(200).json({ message: 'Pull request created!' });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});