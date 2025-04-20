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