const getItemFromLocalStorage = ()=>{
    const getItems = localStorage.getItem('phone');

    if(getItems){
        const storedCart = JSON.parse(getItems);
        return storedCart;
    }else{
        return [];
    }
};

const saveToLocalStored = id =>{
    const saveStingify = JSON.stringify(id);
    localStorage.setItem('phone', saveStingify);
}

const addToLocalStored = (id) =>{
    const storedItem = getItemFromLocalStorage();

    if(storedItem.includes(id)){
        alert('already exist this item');
    }else{
        storedItem.push(id)
        saveToLocalStored(storedItem)
    }
}

const removeFormLocalStorage = id =>{

    const storedItems = getItemFromLocalStorage();
    const remaingingItem = storedItems.filter(phone=> phone !== id);
    saveToLocalStored(remaingingItem)
}

export{addToLocalStored as addLocalStored, getItemFromLocalStorage as getLocalStore,
    removeFormLocalStorage

}


export const getCart = ()=>{
    const getItem = localStorage.getItem('cart');

    if(getItem){
        const storedCart = JSON.parse(getItem);
        return storedCart;
    }else{
        return [];
    }
};

export const saveToCart = id =>{
    const saveStingify = JSON.stringify(id);
    localStorage.setItem('cart', saveStingify);
}

export const addToCart = (id) =>{
    const storedCart = getCart();

    if(storedCart.includes(id)){
        alert('already exist this item');
    }else{
        storedCart.push(id)
        saveToCart(storedCart)
    }
}

export const removeCart = id =>{

    const storedCart = getCart();
    const remaingingCart = storedCart.filter(phone=> phone !== id);
    saveToCart(remaingingCart)
}
