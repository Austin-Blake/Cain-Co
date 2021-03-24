const _ = require('lodash');


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
    for (let i = 0; i < cart.length; i++) {
        const findId = Object.keys(cart[i]).reduce((object, key) => {
            if (key !== 'id') {
                object[key] = cart[i][key];
            }
            
            return object
        }, {})
        
        return findId;
    }
};

export const iterateStateFilter = (cart, payload, filterPayload) => {
                for (let i = 0; i < cart.length; i++) {
                    if (_.isEqual(filterId(cart[i]), filterId(payload)) === true) {
                        return true;
                       }
                   }
               };

export const iterateCartFilter = (cart, payload, filterPayload) => {
                for (let i = 0; i < cart.length; i++) {

                    if (_.isEqual(filterPayload(cart[i]), filterPayload(payload)) === true) {
                        return true;
                       }
                   }
};

