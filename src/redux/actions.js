export const SELECT_CURRENCY = 'SELECT_CURRENCY'
export const GET_CONTRIBUTIONS = 'GET_CONTRIBUTIONS'

export const selectCurrency = (currency) => {
    return {
        type: SELECT_CURRENCY,
        currency
    }
}

export const getContributions = (contributions) => {
    return {
        type: GET_CONTRIBUTIONS,
        contributions
    }
}