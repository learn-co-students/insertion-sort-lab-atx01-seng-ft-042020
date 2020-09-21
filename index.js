function findMinAndRemove(array) {
    let min = array[0] // starting min value
    let minIdx = 0 // starting index for min value
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minIdx = i
        }
    }
    array.splice(minIdx, 1) // remove min item 
    return min
}

function selectionSort(array) {
    const sortedArr = []

    while (array.length > 0) {
        sortedArr.push(findMinAndRemove(array))
    }
    return sortedArr
}
