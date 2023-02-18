//tao initstate cho thăng useReducer là 1 object chứa 1 key là cart
//=> value là array chứa các product dc add vào
const initState = {
    cart: [],
};

//tạo hàm reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const newArr = [...state.cart];
            // console.log('new chưa if: ', newArr);
            if (newArr.length > 0) {
                for (var i = 0; i < newArr.length; i++) {
                    // console.log(i);
                    if (action.item.title === newArr[i].title) {
                        let count = newArr[i].count + 1;
                        newArr[i] = { ...newArr[i], count: count };
                        // console.log('sau change', newArr);
                        return { ...state, cart: [...newArr] };
                    }
                }
            }
            return { ...state, cart: [...state.cart, action.item] };
        case 'SUB_COUNT': //trừ bớt số lượng của 1 sp trong giỏ hàng, ví dụ 2sp giảm còn 1sp
            const newArray = [...state.cart];
            // console.log('new chưa if: ', newArray);
            if (newArray.length > 0) {
                console.log(action.item);
                for (var ii = 0; ii < newArray.length; ii++) {
                    // console.log(ii);
                    if (action.item.title === newArray[ii].title) {
                        let count = newArray[ii].count - 1;
                        newArray[ii] = { ...newArray[ii], count: count };
                        // console.log('sau change', newArray);
                        return { ...state, cart: [...newArray] };
                    }
                }
            }
            return { ...state, cart: [...state.cart, action.item] };
        case 'ADD_COUNT': //Theem số lượng của 1 sp trong giỏ hàng, ví dụ 2sp giảm còn 1sp
            const tamArray = [...state.cart];
            // console.log('new chưa if: ', tamArray);
            if (tamArray.length > 0) {
                console.log(action.item);
                for (var j = 0; j < tamArray.length; j++) {
                    // console.log(j);
                    if (action.item.title === tamArray[j].title) {
                        let count = tamArray[j].count + 1;
                        tamArray[j] = { ...tamArray[j], count: count };
                        // console.log('sau change', tamArray);
                        return { ...state, cart: [...tamArray] };
                    }
                }
            }
            return { ...state, cart: [...state.cart, action.item] };
        case 'CLEAR_ITEM': // xu ly clear item
            const toClearArr = [...state.cart];
            // console.log('new chưa if: ', toClearArr);
            if (toClearArr.length > 0) {
                console.log(action.item);
                for (var index = 0; index < toClearArr.length; index++) {
                    // console.log(index);
                    if (action.item.title === toClearArr[index].title) {
                        // let count = toClearArr[index].count + 1;
                        toClearArr[index] = { ...toClearArr[index], count: 0 };
                        // console.log('sau change', toClearArr);
                        return { ...state, cart: [...toClearArr] };
                    }
                }
            }
            return { ...state, cart: [...state.cart, action.item] };
        default:
            alert('default');
    }
};

export { initState };
export default reducer;
