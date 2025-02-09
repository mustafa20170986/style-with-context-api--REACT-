const express = require('express');
const emu = express();

emu.set('storename', 'EMU-mart');
emu.set('currency', 'ETH');
emu.set('regulardiscount', '19');
emu.set('vipdiscount', 30);
emu.set('discount', '10');

// Database
const db = {
  '101': { 'name': 'oni', vip: true },
  '104': { 'name': 'emu', vip: true },
  '103': { 'name': 'sumaiya', vip: true }
};

// Login middleware
const login = (req, res, next) => {
  const userid = req.query.userid; // Get the user ID from the query parameter
  
  // Check if the userid is valid and exists in the database
  if (!userid || !db[userid]) {
    return res.send('<h1>User not found, please check and try again.</h1>'); // Return error if user is invalid or missing
  }
  
  // If the user is found, store their data and discount info in res.locals
  const user = db[userid];
  res.locals.user = user;
  res.locals.discount = user.vip ? 30 : 10;
  
  next(); // Proceed to the next middleware or route handler
};

// Home route
emu.get('/', login, (req, res) => {
  const sname = res.app.get('storename');
  const user = res.locals.user;
  
  // If the user exists, send a welcome message and display their discount
  if (user) {
    res.send(`
      <h1>Welcome to ${sname}, ${user.name}!</h1>
      <p>Your discount: ${res.locals.discount}%</p>
    `);
  }
});

// Product route
emu.get('/product/:id', login, (req, res) => {
  const sname = res.app.get('storename');
  const cur = res.app.get('currency');
  const id = req.params.id; // Product ID from the URL
  const price = 18000; // Sample price of the product
  
  // Calculate the discounted price based on the user's discount
  const dic = price - (price * res.locals.discount / 100);
  
  res.send(`
    <h1>Product ${id} at ${sname} is:</h1>
    <p>Original Price: ${price} ${cur}</p>
    <p>Discounted Price: ${dic} ${cur}</p>
    <p>Your discount: ${res.locals.discount}%</p>
  `);
});

// Offer route
emu.get('/offer', login, (req, res) => {
  const sname = res.app.get('storename');
  const discount = res.locals.discount;
  
  res.send(`<h1>Hey, check out the discount in ${sname} up to ${discount}%!</h1>`);
});

emu.listen(4000, () => {
  console.log("Emu is listening");
});
