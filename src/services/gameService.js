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
    const width = _.ceil(tableWidth / rows, 0);
    const height = _.ceil(tableHeight / cells, 0);
    const left = _.ceil(currentCell * width, 0);
    const top = _.ceil(comcurrentRow * height, 0);
    const zIndex = _.random(1, 10);
    return {
        width: width+'px',
        height:height+'px',
        left:left+'px',
        top:top+'px',
        'z-index': zIndex
    }
}


export function shakePlayingFieldPosition(prevField,fieldConfig){
    const newPlayingField = _.shuffle(createPlayingField(fieldConfig));
    const recalculatedPrevField = prevField.map((field,index) => {
      const {value,...restNewField} = newPlayingField[index];
      return Object.assign({},field,restNewField)
    })
    return recalculatedPrevField;
}

export function getRightAnswersValue(tableSelectedSize){
    return _.range(Math.pow(tableSelectedSize,2)).map(item => item + 1)
}

export function resizePlayingField(playingField, { tableSelectedSize, tableWidth, tableHeight }) {
    const width = _.ceil(tableWidth / tableSelectedSize, 0);
    const height = _.ceil(tableHeight / tableSelectedSize, 0);
    return playingField.map(field => {
        const { position, stylePosition: prevStylePosition } = field;
        const left = _.ceil(position.cell * width, 0);
        const top = _.ceil(position.row * height, 0);
        const stylePosition = {
            ...prevStylePosition,
            width: width + 'px',
            height: height + 'px',
            left: left + 'px',
            top: top + 'px',
        }
        return {
            ...field,
            stylePosition
        }
    })
}