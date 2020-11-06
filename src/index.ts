import { fabric } from 'fabric';

function init() {
  console.log(fabric);

  let canvasContainer = document.createElement('div');
  canvasContainer.id = 'canvas';

  document.body.appendChild(canvasContainer);

  let canvas = new fabric.Canvas('canvas');
  let rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: 'red',
  });
}

init();
