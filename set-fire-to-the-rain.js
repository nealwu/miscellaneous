// Works on studio.substack.net

var SECONDS_PER_NOTE = 0.30;
var NOTE_MAPPING = {
'c': 4 * 261.63,
'd': 4 * 293.66,
'e': 4 * 329.63,
'f': 4 * 349.23,
'g': 4 * 392.00,
'a': 4 * 440.00,
'bb': 4 * 466.164,
'b': 4 * 493.88,
'': 0
};

var melody = [];
melody = ['a4', 'd4', 'f4', 'd4', 'a4', 'd4', 'f4', 'a4', 'a4', 'c4', 'f4', 'c4', 'a4', 'bb4', 'a4', 'g4', 'g4', 'c4', 'e4', 'c4', 'g4', 'c4', 'e4', 'bb4', 'bb4', 'd4', 'g4', 'd4', 'bb4', 'd4', 'g4', 'a4'];
var harmony1 = [];
harmony1 = ['d2', 'd2', 'd2', 'd2', 'd2', 'd2', 'd2', 'f2', 'f2', 'f2', 'f2', 'f2', 'f2', 'f2', 'f2', 'f2', 'c2', 'c2', 'c2', 'c2', 'c2', 'c2', 'c2', 'g2', 'g2', 'g2', 'g2', 'g2', 'g2', 'g2', 'g2', 'g2'];
var harmony2 = [];
harmony2 = ['d3', 'd3', 'd3', 'd3', 'd3', 'd3', 'd3', 'f3', 'f3', 'f3', 'f3', 'f3', 'f3', 'f3', 'f3', 'f3', 'c3', 'c3', 'c3', 'c3', 'c3', 'c3', 'c3', 'g3', 'g3', 'g3', 'g3', 'g3', 'g3', 'g3', 'g3', 'g3'];

function getNoteFreq(note) {
  if (note.length === 0) {
    return 0;
  }

  var number = note[note.length - 1] - '4';
  return Math.pow(2, number) * NOTE_MAPPING[note.substring(0, note.length - 1)];
}

function freq(t, notes) {
  for (var i = 0; i < notes.length; i++) {
    if (t % (notes.length * SECONDS_PER_NOTE) < (i + 1) * SECONDS_PER_NOTE) {
      return getNoteFreq(notes[i]);
    }
  }

  return notes[notes.length - 1];
}

return function(t) {
  return sin(freq(t, melody)) + sin(freq(t, harmony1)) + sin(freq(t, harmony2));

  function sin(x) {
    return Math.sin(2 * Math.PI * t * x);
  }
}
