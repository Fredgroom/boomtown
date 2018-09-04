// Action Names
    const UPDATE_NEW_ITEM = 'UPDATE_NEW_ITEM'

    const RESET_NEW_ITEM = 'RESET_NEW_ITEM'

    const RESET_NEW_ITEM_IMAGE = 'RESET_NEW_ITEM_IMAGE'

// Action Creators

    const updateNewItem = (item) => {
        return {
            type: UPDATE_NEW_ITEM,
            payload: item 
        }  
    };
    const resetNewItem = () => {
        return {
            type: RESET_NEW_ITEM
        }
    };
    const resetNewItemImage = () => {
        return {
            type: RESET_NEW_ITEM_IMAGE
        }
    };

// Reducer
const ItemReducer = {
    title: 'Foo', 
    description: 'Foo',
    created: new Date(),
    imageurl: 'http://via.placeholder.com/350x250',
    itemowner: {},
    tags: []
};

export default (state = ItemReducer, action) => {
    switch(action.type) {
        case UPDATE_NEW_ITEM: {
            return {...state, ...action.payload}

        }
        case RESET_NEW_ITEM: {
            return ItemReducer;
        }
        case RESET_NEW_ITEM_IMAGE: {
            return {
                ...state, imagurl: ItemReducer.imageurl
            };
        }
        default: { 
            return state;
        }
    }
}


