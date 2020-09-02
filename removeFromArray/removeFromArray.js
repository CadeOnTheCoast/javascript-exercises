const removeFromArray = function(arr, removedElements) {
    num = arr.indexOf(removedElements);
    arr.splice(num, 1);
    return arr;
}

module.exports = removeFromArray
