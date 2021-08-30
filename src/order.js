function takeOrder(orderNum, orders) {
  if (orders.length < 3) {
    orders.push(orderNum)
  }
};

function refundOrder(num, orders) {
  for (var i = 0; i < orders.length; i++){
    if (num === orders[i].orderNumber) {
      var refundedOrder = orders.indexOf(orders[i])
      orders.splice(refundedOrder, 1)
    }
  }
};

function listItems(orders) {
  var items = ''
  for (var i = 0; i < orders.length; i++) {
    if (i === (orders.length - 1)) {
      items += orders[i].item
    } else {
      items += orders[i].item + ", "
    }
  }
  return items
  };

  function searchOrder(orders, item) {
  var found = false
  for (var i = 0; i < orders.length; i++){
    if (orders[i].item === item) {
      found = true
    }
  }
  return found
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};