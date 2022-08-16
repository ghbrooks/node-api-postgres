const express = require('express');
const app = express();

// Good Practice
const PORT = process.env.PORT || 3333;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});