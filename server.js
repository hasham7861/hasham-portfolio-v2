const express = require("express");

const app = express();

app.get('/api/customers', (req, res) =>{
    const customers = [
        {id:1, firstName: 'John', lastName: 'Doe'},
        {id:2, firstName: 'Steve', lastName: 'Smith'},
        {id:3, firstName: 'Mary', lastName: 'Swanson'},
    ];
    res.json(customers);
});

app.post('/messaged', (req,res) => {
  // Once send message makes a post request, mail the message to Owner of Site
  res.json([{"Message":"Your message was received by Hasham Alam"}]);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
