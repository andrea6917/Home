const container = document.querySelector('.container')
// const colors = ["#1864ca","#228c22","#64c965"]
// colors = ["#1864ca","#228c22","#64c965","#fed701","#c86464","#989686","#ffd37c","#ffffff"]
// const colors = ["#000000","#000000","#000000","#000000","#000000","#000000"]
const colors = ["#000000","#ffffff","#227de9","#edf50e","#fc812c","#ff0107"]
const weights = [500,10,5,3,2,1]

const containerW = 23;
const containerH = 45;
const tileSize = 8;


function init(sizeW, sizeH, seed) {
    container.style.setProperty('--sizeH', "100%")
    container.style.setProperty('--sizeW', "100%")

    const prob = [];

    for (let i = 0; i < colors.length; i++) {
      lastValue = 0
      if(i != 0) lastValue = prob[i-1]
      prob.push(weights[i] + lastValue)
    }

  for (let i = 0; i < sizeW; i++){
    const tiles = document.createElement('div')
    tiles.classList.add('tile')
    tiles.style.setProperty('--sizeH', sizeH)
    tiles.style.setProperty('--sizeW', 1)
    for (let j = 0; j < sizeH; j++) initTile(tileSize, seed, prob, tiles);
    container.appendChild(tiles)
  }

}

function initTile(size, seed, prob, tiles) {

    const tile = document.createElement('div')
    tile.classList.add('tile')
    // container.appendChild(tile)

    tile.style.setProperty('--sizeH', size)
    tile.style.setProperty('--sizeW', size)

    coin = Math.floor(Math.random() * 2) > 0;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')
    tile.appendChild(div);
    // container.appendChild(div)

    const number = Math.floor(Math.random() * prob[prob.length-1])

    if(coin){
      for (let j = 0; j < colors.length; j++) {
        if(prob[j] > number) {
            div.style.backgroundColor = colors[j]
            break;
        }
      }
    }
  }

  tiles.appendChild(tile)

}

init(containerW, containerH, "seed")