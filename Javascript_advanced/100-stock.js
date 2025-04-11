const stock = {
    macbook: 2,
    iphone: 4,
};

function processPayment(itemName) {
    itemName = itemName.toLowerCase();
    if (stock.hasOwnProperty(itemName) && stock[itemName] > 0) {
        stock[itemName] += -1;
    }
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    itemName = itemName.toLowerCase();
    console.log(`No more ${itemName} in stock`);
    console.log(`Payment is not being processed`);
}

function processOrder(itemName, callbackPayment, callbackError) {
    itemName = itemName.toLowerCase();
    console.log(`Verifying the stock of ${itemName}`);
    if (stock.hasOwnProperty(itemName) && stock[itemName] > 0) {
        callbackPayment(itemName);
    } else {
        callbackError(itemName);
    }
}

let product = prompt("Please enter the item you would like to purchase (Macbook, iPhone)")

product = product.toLowerCase();
if (stock[product] > 0) {
    processOrder(product, processPayment, processError);
} else {
    processOrder(product, processPayment, processError);
}