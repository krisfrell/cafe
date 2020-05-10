module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;
  this.commonPrice = oldCart.commonPrice || 0;

  if (this.totalPrice < 1000) {
    this.commonPrice = this.totalPrice + 99;
  } else {
    this.commonPrice = this.totalPrice;
  }


  this.add = function(item, id) {
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = {item: item, qty: 0, price: 0};
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  };

  this.show = function () {
    // let storedItem;
    //
    // for (let id in this.items) {
    //   storedItem = this.items[id];
    // }
    // // console.log(storedItem.item.title + storedItem.item.price + storedItem.qty + storedItem.price);
    // // return storedItem.item.title + ' ' + storedItem.item.price + ' ' + storedItem.qty + ' ' + storedItem.price;
    //
    // // return console.log(Object.getOwnPropertyNames(this.items));
    //
    // return this.items;

    let arr = [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }

    let itms = [];

    for (let i=0;i<arr.length;i++) {
      itms.push(arr[i].item.title + ' ' + arr[i].item.price + ' ' + arr[i].qty + ' ' + arr[i].price);
    }
    return itms;
    // return arr;
  };

  this.showTitle = function () {

    let arr = [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }

    let itms = [];

    for (let i=0;i<arr.length;i++) {
      itms.push(arr[i].item.title);
    }
    return itms;
  };

  this.showPrice = function () {
    let arr= [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }

    let itms = [];

    for (let i=0;i<arr.length;i++) {
      itms.push(arr[i].item.price);
    }
    return itms;
  };

  this.showQty = function () {
    let arr= [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }

    let itms = [];

    for (let i=0;i<arr.length;i++) {
      itms.push(arr[i].qty);
    }
    return itms;
  };

  this.showTotalPrice = function () {
    let arr= [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }

    let itms = [];

    for (let i=0;i<arr.length;i++) {
      itms.push(arr[i].price);
    }
    return itms;
  };

  this.reduceByOne = function(id) {
    this.items[id].qty--;
    this.items[id].price -= this.items[id].item.price;
    this.totalQty--;
    this.totalPrice -= this.items[id].item.price;

    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
  };

  this.removeItem = function(id) {
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };

  this.generateArray = function() {
    let arr = [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }
    return arr; 
  };
};