let increment = (value) => {
    return {
        type: "INCREMENT",
        value: value
    }
}

let decrement = (value) => {
    return {
        type: "DECREMENT",
        value: value
    }
}

export { increment, decrement };