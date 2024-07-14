// Find matching hwid in the data array

const findMatchStore = (list, shop_name) =>{
    const filteredArray = list.filter(item => item.shop_name === shop_name);
    console.log(filteredArray.length);
    return filteredArray.length === 1
}

export default findMatchStore;