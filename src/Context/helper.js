import { isEqual } from 'lodash';


export const filterId = (payload) => {
    const findId = Object.keys(payload).reduce((object, key) => {
        if (key !== 'id') {
            object[key] = payload[key];
        }
        return object
    }, {})

    return findId;
}


export const filterCart = (cart) => {
    for (let c = 0; c < cart.length; c++) {
        const findId = Object.keys(cart[c]).reduce((object, key) => {
            if (key !== 'id') {
                object[key] = cart[c][key];
            }
            
            return object
        }, {})
        
        return findId;
    }
};

export const iterateStateFilter = (cart, payload, filterId) => {
                for (let i = 0; i < cart.length; i++) {
                    if (isEqual(filterId(cart[i]), filterId(payload)) === true) {
                        return true;
                       }
                   }
               };

export const iterateCartFilter = (cart, payloadAction, filterPayload) => {
                for (let j = 0; j < cart.length; j++) {

                    if (isEqual(filterPayload(cart[j]), filterPayload(payloadAction)) === true) {
                        return true;
                       }
                   }
};

export const filterByBrand = (products, brand) => {
    return products.filter((product) => {
        return product.brand.toLowerCase() === brand.toLowerCase();        
    });
};

//Creates products array set to the product Gender;
//Used for filtering products by gender;
export const filterByGender = (products, gender) => {
    return products.filter((product) => {
        return product.gender.toLowerCase() === gender.toLowerCase();
    });
};


export const filterAll = (brand, gender, choice) => {
  return gender.length > 0 && brand.length > 0 ? choice.filter((boot) => {
      return boot.brand === brand
    }) : console.log('choice',choice)
}


//Creates product array of Brand Names w/o repeating a name;
//Used for filtering products by Brand.
export const findBrandNames = (products) => {
    const foundBrand = products.map((product) => {
        let keyValue = Object.entries(product);
        return keyValue.filter((pair) => {
        return pair[0] === 'brand' ? pair[1] : null;
        });
    });
    const brandNames = foundBrand.map((item) => {
        return item[0][1];
    });
    return [...new Set(brandNames.sort())];
};