import _ from 'lodash'

export function createPlayingField(config) {
    if (_.size(config) < 3) throw new Error('func createPlayingField do not have all args')
    const { rows, cells, tableWidth, tableHeight } = config
    let numbArray = createNumbArray(rows, cells);
    const getUnicArrayVal = () => getValFromNumbArray(numbArray);
    const arr = [];

    for (let row = 0; row < rows; row++) {
        arr[row] = [];
        for (let cell = 0; cell < cells; cell++) {
            const value = getUnicArrayVal();
            const stylePosition = generateTableCellStyle(row, cell, tableWidth, tableHeight, rows, cells);

            arr[row][cell] = {
                value,
                stylePosition,
                position: {
                    cell,
                    row,
                }
            };
        }
    }
    const flattenArray = _.flatten(arr);
    return flattenArray;
}

function createNumbArray(rows, cells) {
    const increaseNumb = rows * cells;
    const nums = _.shuffle(_.range(increaseNumb).map(item => item + 1));
    return nums
}

function getValFromNumbArray(array) {
    const arrayLength = array.length;
    const randomNumb = _.random(0, arrayLength - 1);
    const randomValFromArray = array[randomNumb];
    _.pull(array, randomValFromArray);//remove selected item from array (mutate)
    return randomValFromArray;
}

function generateTableCellStyle(comcurrentRow, currentCell, tableWidth, tableHeight, rows, cells) {
    const width = _.ceil(tableWidth / rows, 2);
    const height = _.ceil(tableHeight / cells, 2);
    const left = _.ceil(currentCell * width, 2);
    const top = _.ceil(comcurrentRow * height, 2);
    const zIndex = _.random(1, 10);
    return {
        width: width+'px',
        height:height+'px',
        left:left+'px',
        top:top+'px',
        'z-index': zIndex
    }
}