'use strict';

var itemForm = document.getElementById('order-list');

function Customer(product,quantity,street,city,state,zip,phone,card,filepath) {
  this.product = [];
  this.quantity = [];
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.card = card;
  this.filepath = filepath;
}

function addToCart(event) {
  var newProduct = event.target.busItems.value;
  var newQuantity = event.target.itemQuantity.value;
  var newStreet = event.target.custStreet.value;
  var newCity = event.target.custCity.value;
  var newState = event.target.custCity.value;
  var newZip = event.target.custZip.value;
  var newPhone = event.target.custPhone.value;
  var newCard = event.target.custPhone.value;
  var newFilepath = 'img/' + newProduct + '.jpg';

  new Customer(newProduct,newQuantity,newStreet,newCity,newState,newZip,newPhone,newCard,newFilepath);
}

itemForm.addEventListener('submit',addToCart);
