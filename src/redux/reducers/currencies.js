
const currenciesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_CURRENCY': {
            if(action.currency === undefined) {
                return {
                    selectedCurrency: ''
                }
            }
            return {
                selectedCurrency: action.currency
            }
        }
        default:    
            return state;
    }
}

export default currenciesReducer;