

const settings = [];

for (let i = 0;i < 8 ;i++){
  let el = {};
  el.color = '#d60000';
  el.score = 0;
  el.active = false;
  settings[i] = el;
}

settings[1].color = '#187811';
settings[2].color = '#2878fa';
settings[3].color = '#000000';
settings[4].color = '#babe00';
settings[5].color = '#ff3091';
settings[6].color = '#6b3632';
settings[7].color = '#4e04b5';


export default settings;