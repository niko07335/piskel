/* eslint-disable max-len */
// // import * as App from './Controllers/App';
// // import * as AppModel from './Models/AppModel';
import './Views/AppView';
// eslint-disable-next-line no-unused-vars
import css from './Views/app-view.css';

const frames = document.querySelector('.frames');

function changeCanvas() {
  const activeFrame = document.querySelector('.active-frame');
  const mainCanvas = document.querySelector('#canvas-main');
  const ctx = mainCanvas.getContext('2d');
  const W = mainCanvas.width;
  const H = mainCanvas.height;
  ctx.clearRect(0, 0, W, H);
  const image = new Image();
  const img = `${activeFrame.style.backgroundImage.slice(5, -2)}`;
  image.src = img;
  ctx.drawImage(image, 0, 0);
}

function changeActiveFrame(item) {
  while (document.querySelector('.active-frame')) {
    document.querySelector('.active-frame').classList.remove('active-frame');
  }
  item.classList.add('active-frame');
  changeCanvas();
}

function checkQueue() {
  const allFrames = frames.children;
  for (let i = 0; i + 1 < allFrames.length; i += 1) {
    const item = allFrames[i];
    item.id = `frame${i + 1}`;
    item.querySelector('.num-frame__text').innerHTML = i + 1;
  }
}

function delFrame(item) {
  if (item.classList.contains('active-frame')) {
    let delIndex = item.id.replace(/\D+/g, '');
    if (delIndex < 2) delIndex = 2;
    else delIndex -= 1;
    document.querySelector(`#frame${delIndex}`).classList.add('active-frame');
  }
  item.parentElement.removeChild(item);
  checkQueue();
  changeCanvas();
}

function copyFrame(item) {
  const cloned = item.cloneNode(true);
  item.parentNode.insertBefore(cloned, item.nextSibling);
  checkQueue();
  changeActiveFrame(cloned);
}

function frameSelected() {
  let clickTarget = window.event.target;
  let action;
  while (clickTarget !== this) {
    if (clickTarget.tagName === 'DIV') {
      action = clickTarget.dataset.frameAction;
      break;
    }
    clickTarget = clickTarget.parentElement;
  }
  console.log(action);
  if (action === 'changeActiveFrame') changeActiveFrame(clickTarget.parentElement);
  else if (action === 'none');
  else if (action === 'delFrame') delFrame(clickTarget.parentElement);
  else if (action === 'copyFrame') copyFrame(clickTarget.parentElement);
  else if (!clickTarget.hasAttribute('data-frame-action')) changeActiveFrame(clickTarget);
}

function addFrame() {
  const count = frames.childElementCount;
  const newDiv = document.createElement('div');

  newDiv.className = 'frame';
  newDiv.id = `frame${frames.childElementCount}`;
  newDiv.innerHTML = `
        <div class="num-frame" data-frame-action='changeActiveFrame'>
          <p class="num-frame__text">${frames.childElementCount}</p>
        </div>
        <div class="del-frame" data-frame-action='delFrame'>
          <p class="del-frame__text">del</p>
        </div>
        <div class="copy-frame" data-frame-action='copyFrame'>
          <p class="copy-frame__text">copy</p>
        </div>`;
  frames.insertBefore(newDiv, frames.children[count - 1]);
  newDiv.style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAED0lEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4DcC8AAB2WfxiAAAAABJRU5ErkJggg==';

  changeActiveFrame(newDiv);
}

const mainCanvas = document.querySelector('#canvas-main');
const ctx = mainCanvas.getContext('2d');
const W = mainCanvas.width;
const H = mainCanvas.height;
const pixels = 64; // const na let

function getCanvas() {
  function canvasMove() {
    ctx.fillStyle = 'red'; // pen color
    const step = [W / pixels, H / pixels];
    const X = window.event.layerX;
    const Y = window.event.layerY;
    const positionX = Math.floor(X / step[0]);
    const positionY = Math.floor(Y / step[1]);
    ctx.fillRect(step[0] * positionX, step[1] * positionY, step[0], step[1]);
    mainCanvas.addEventListener('mouseup', () => {
      mainCanvas.removeEventListener('mousemove', canvasMove);
    });
  }
  mainCanvas.addEventListener('mouseup', () => {
    const img = mainCanvas.toDataURL('image/png');
    const frame = document.querySelector('.active-frame');
    frame.setAttribute('style', `background: url('${img}');  background-size: cover`);
  });
  mainCanvas.addEventListener('mousemove', canvasMove);
}

// ctx.fillStyle = '#fff0';
// ctx.fillRect(0, 0, W, H);
mainCanvas.addEventListener('mousedown', getCanvas);
document.querySelector('.frames').addEventListener('click', frameSelected);
document.querySelector('#add-frame-button').addEventListener('click', addFrame);
