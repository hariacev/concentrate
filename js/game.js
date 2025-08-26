const coverCardsArray = new Array(
  "images/T1.jpg",
  "images/T2.jpg",
  "images/T3.jpg",
  "images/T4.jpg",
  "images/T5.jpg",
  "images/T6.jpg",
  "images/T7.jpg",
  "images/T8.jpg",
  "images/T9.jpg",
  "images/T10.jpg",
  "images/T11.jpg",
  "images/T12.jpg",
  "images/T13.jpg",
  "images/T14.jpg",
  "images/T15.jpg",
  "images/T16.jpg"
);
const referenceImagesArray = new Array(
  "images/delfines.jpg",
  "images/delfines.jpg",
  "images/fondo.jpg",
  "images/fondo.jpg",
  "images/image3.jpg",
  "images/image3.jpg",
  "images/caribe.jpg",
  "images/caribe.jpg",
  "images/image1.jpg",
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image2.jpg",
  "images/image001.jpg",
  "images/image001.jpg",
  "images/planetaSaturno.jpg",
  "images/planetaSaturno.jpg"
);
var mixedArray = mixArray(referenceImagesArray);
var couplesIndexesArray = [];
var elementMemory = null;
var indexMemory = null;
var couplesArray = [];

function play(index) {
  if (!couplesIndexesArray.includes(index) && indexMemory != index) {
    uncoverCard(index);
    if (elementMemory == null) {
      indexMemory = index;
      elementMemory = mixedArray[index];
    } else {
      if (elementMemory == mixedArray[index]) {
        couplesIndexesArray.push(indexMemory);
        couplesIndexesArray.push(index);
        if (couplesIndexesArray.length == referenceImagesArray.length) {
          setTimeout(() => {
            alert("Lo has hecho genial");
          }, 30);
        }
      } else {
        let aux = indexMemory;
        setTimeout(() => {
          alert("Parece que has fallado");
        }, 30);
        setTimeout(() => {
          coverCard(index);
          coverCard(aux);
        }, 30);
      }
      elementMemory = null;
      indexMemory = null;
    }
  }
}

function mixArray(array) {
  for (
    let iterativeIndex = 0;
    iterativeIndex < array.length;
    iterativeIndex++
  ) {
    let randomIndex = randomNumberMinorThanLimit(array.length) - 1;
    let temporalVariable = array[iterativeIndex];
    array[iterativeIndex] = array[randomIndex];
    array[randomIndex] = temporalVariable;
  }
  return array;
}

function uncoverCard(index) {
  document.images[index].src = mixedArray[index];
}

function coverCard(index) {
  index = parseInt(index);
  document.images[index].src = coverCardsArray[index];
}

function randomNumberMinorThanLimit(limit) {
  let randomNumber = Math.ceil(Math.random() * parseInt(limit));
  return randomNumber;
}
