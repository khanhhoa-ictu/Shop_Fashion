import { productTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const category = (state = { data: [], page: 1, totalpage: null }, action) => {
    switch (action.type) {
        case productTypes.SET_CATEGORY_PRODUCT: {
            return {
                ...state,
                data: action.data
            }
        }
        case productTypes.ADD_CATEGORY_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_CATEGORY_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_CATEGORY_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_CATEGORY_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_CATEGORY: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case productTypes.CATEGORY_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.CATEGORY_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const publisher = (state = { data: [], page: 1, totalpage: null }, action) => {
    switch (action.type) {
        case productTypes.SET_PUBLISHSER: {
            return {
                ...state,
                data: action.data
            }
        }
        case productTypes.ADD_PUBLISHER_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_PUBLISHER_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_PUBLISHER_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_PUBLISHER_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_PUBLISHER: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case productTypes.PUBLISHER_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.PUBLISHER_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const author = (state = {data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case productTypes.SET_AUTHOR: {
            return {
                ...state,
                data: action.data
            }
        }
        case productTypes.ADD_AUTHOR_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_AUTHOR_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_AUTHOR_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_AUTHOR_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_AUTHOR: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case productTypes.AUTHOR_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.AUTHOR_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const bill = (state = { data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case productTypes.BILL_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.BILL_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case productTypes.BILL_SET_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case productTypes.UPDATE_ISSEND_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_ISSEND_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        default: return state
    }
}
const product = (state = {
    data: [], page: 1, totalpage: null
}, action) => {
    switch(action.type){
        case productTypes.SET_PRODUCT: {
            return {
                ...state, 
                data: action.data
            }
        }
        case productTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case productTypes.ADD_PRODUCT_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_PRODUCT_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_PRODUCT_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_PRODUCT: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        default: return state
    }
}
export default combineReducers({
    category,
    publisher,
    product, 
    author,
    bill
})