class ShopItem{
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }

    set price(newprice){
        if (typeof(newprice) === "number" && newprice>0){
            this._price = newprice;}
        else{
            console.error(`${newprice} is not a valid value for an item price.`);
        }
            
    }

    get price(){
        return this._price;
    }


    set color(newcolor){
        if ((typeof(newcolor) === "string") && (newcolor.length>0)){
            this._color = newcolor;}
        else{
            console.error(`${newcolor} is not a valid value for an item color.`);
        }
            
    }

    get color(){
        return this._color;
    }

    set name(newname){
        if (typeof(newname) === "string" && newname.length>0){
            this._name = newname;}
        else{
            console.error(`${newname} is not a valid value for an item name.`);
        }
            
    }

    get color(){
        return this._color;
    }

    get name(){
        return this._name;
    }

    get description(){
        return `${this.color} ${this.name}`;
    }

    
    static ItemEquality(item1, item2){
        return (item1.name===item2.name && item1.color===item2.color && item1.price===item2.price);
    }

}

class CartEntry{
    constructor(item, count){
        this._id = -1;
        this.item = item;
        this.count = count;
    }

    set item(newItem){
        if (newItem.name === "undefined" || newItem.color === "undefined" || newItem.price === "undefined"){
            console.error(`Invalid item field(s)`);
        }
        else{
            this._item = newItem; 
        }
    }

    get item(){
        return new ShopItem(this._item.name,this._item.color,this._item.price);
    }

    set count(newcount){
        if (typeof(newcount) === "number" && newcount>0){
            this._count = newcount;
        }
        else{
            console.error(`${newcount} is not a valid value for an entry count.`);
        }
            
    }

    set id(newid){
        if (typeof(newid) === "number" && newid>0){
            this._id = newid;
        }
        else{
            console.error(`${newid} is not a valid value for an entry id.`);
        }
            
    }

    get id(){
        return this._id;
    }
    
    get count(){
        return this._count;
    }

    get total_price(){
        return this.item.price * this.count;
    }
}

class ShoppingCart{
    
    _items = [];

    constructor(){}

    Add(entry){
        if (entry.item === null || entry.item === undefined || entry.count === undefined){
            console.error(`Invalid entry`);
        }
        else{
            let j = this._items.findIndex((elem)=> ShopItem.ItemEquality(entry.item,elem.item))
            if (j === -1){
                entry.id = this._items.length+1;
                this._items.push(entry);
            }
            else{
                this._items[j].count+=entry.count;
            }
        }
    }

    Delete(id){
        if ( id<=this._items.length ){
            this._items.splice(id-1,1);
            for (let i = 0; i < this._items.length; i++) {
                this._items[i].id = i+1;
            }
        }
        else{
            console.error("Element does not exist");
        }
    }
}

let current = 1
const nam = document.getElementById("name");
const image = document.getElementById("carpic");
const select = document.getElementById("colorselect");
const input = document.getElementById("incount")
const cart = new ShoppingCart();
const orders = document.getElementById("orders");

function UpdateTable(){
    orders.innerHTML = "<tr><th>ID</th><th>Product</th><th>Count</th><th>Remove</th></tr>"
    cart._items.forEach(element => {
        orders.innerHTML += `<tr><td>${element.id}</td><td>${element.item.description}</td><td>${element.count}</td><td><button onclick="RemoveFromCart(${element.id})">X</button></td></tr>`
    });
}

function Next(){
    switch(current){
        case 1:{
            current = 2;
            nam.textContent = "Expensive Car";

            break;
        }
        case 2:{
            current = 3;
            nam.textContent = "Truck";
            break;
        }
        case 3:{
            current = 1;
            nam.textContent = "Cheap Car";
            break;
        }
    }
    image.src = `../media/car_${current}.png`
}

function Prev(){
    switch(current){
        case 3:{
            current = 2;
            nam.textContent = "Expensive Car";
            break;
        }
        case 1:{
            current = 3;
            nam.textContent = "Truck";
            break;
        }
        case 2:{
            current = 1;
            nam.textContent = "Cheap Car";
            break;
        }
    }
    image.src = `../media/car_${current}.png`
}

function AddToCart(){
    cart.Add(new CartEntry(new ShopItem(nam.textContent,select.value, 5),Number(input.value)));
    UpdateTable();
}

function RemoveFromCart(id){
    cart.Delete(id);
    UpdateTable();
}