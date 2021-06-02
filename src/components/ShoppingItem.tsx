interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    picture: string;
}

var ShoppingItem = (function () {
    var item: Item = { id: 0, name: "", description: "", price: 0.00, picture: "" };

    var getItem = function () {
        return item;
    };

    var setItem = function (newItem: Item) {
        item = newItem;
    };

    return {
        getItem: getItem,
        setItem: setItem
    }

})();

var ShoppingCart = (function () {
    var cart: Item[];

    var addItem = function (item: Item) {
        cart.push(item);
    };

    var getSize = function () {
        return cart.length;
    };

    var getItemByIndex = function (index: number) {
        return cart[index];
    };

    var createAndAddItem = function (name: string, description: string, price: number, picture: string) {
        let tempItem: Item = { id: cart[cart.length - 1].id, name: name, description: description, price: price, picture: picture };
        addItem(tempItem);
    };

    var getTotal = function () {
        let total: number = 0;
        cart.forEach(function (item) {
            total += item.price;
        });
    };

    return {
        addItem: addItem,
        getSize: getSize,
        getItemByIndex: getItemByIndex,
        createAndAddItem: createAndAddItem,
        getTotal: getTotal
    }

})();

export default { ShoppingItem, ShoppingCart };