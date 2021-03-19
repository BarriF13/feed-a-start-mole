function getSad() {
  return Date.now() + 1000
}

function getGone() {
  return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}
const moles = [
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-0')
  },
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-1')
  },
  {
    status: "sad",
    next: Date.now() + 1000,
    king: false,
    node: document.getElementById('hole-2')
  },
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-3')
  },
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-4')
  },
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-5')
  },
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-6')
  },
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-7')
  },
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-8')
  },
  {
    status: "sad",
    next: getSad(),
    king: false,
    node: document.getElementById('hole-9')
  }
];

function getNextStatus(mole) {
  switch (mole.status) {
    case 'sad':
      mole.next = getSad();
      mole.status = 'leaving';
      mole.node.src = './img/mole-leaving.png';
      break;
    case 'leaving':
      mole.next = getGone() ;
      mole.status = 'gone';
      mole.node.children[0].classList.add('gone')
      break;
  }
}
let runAgainAt = Date.now() + 100;

function nextFrame() {
  const now = Date.now()
  if (runAgainAt < now) {

    for (i of moles) {
      if (moles[i].next < now) {
        getNextStatus(mole[i]);
      }
    }
    runAgainAt = now + 100;
    requestAnimationFrame(nextFrame)
  }
}
nextFrame();