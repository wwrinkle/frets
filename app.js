const STRING_RANGES = [{
  lowest: 64,
  highest: 79
}, {
  lowest: 59,
  highest: 63
}, {
  lowest: 55,
  highest: 58
}, {
  lowest: 50,
  highest: 54
}, {
  lowest: 45,
  highest: 49
}, {
  lowest: 40,
  highest: 44
}];
const strings = document.querySelectorAll('.string');

//check browser for webMIDI compatibility
if (navigator.requestMIDIAccess) {
    console.log('This browser supports WebMIDI!');
} else {
    console.log('WebMIDI is not supported in this browser.');
};

//find inputs and outputs
navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    console.log(midiAccess);

    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

//loop thru inputs and assign listener
function onMIDISuccess(midiAccess) {
    for (var input of midiAccess.inputs.values())
        input.onmidimessage = getMIDIMessage;
    }

function getMIDIMessage(midiMessage) {
    console.log(midiMessage);
};

function getMIDIMessage(message) {
  const [command, note, velocity] = message.data;
  if ((command >= 144 && command <= 150) && velocity > 0) {
    noteOn(command, note)
  }
  else if ((command >= 128 && command <= 134) || velocity === 0) {
    noteOff(command, note);
  }
}

function getFret(command, note) {
  // Too Low
  if (note < 40) {
    return;
  }

  let stringIndex;
  if ([144, 128].includes(command)) {
    stringIndex = STRING_RANGES.findIndex(string => note >= string.lowest && note <= string.highest);
  }
  else if (command >= 129 && command <= 134) {
    stringIndex = 134 - command;
  }
  else if (command >= 145 && command <= 150) {
    stringIndex = 150 - command;
  }

  // Command is not right or note is out of range
  if (stringIndex < 0) {
    return;
  }

  const string = strings[stringIndex];
  const lowestPitch = STRING_RANGES[stringIndex].lowest;
  const fretIndex = note - lowestPitch;

  return string.querySelectorAll('.note-fret .circle')[fretIndex];
}

function setFretOpacity(command, note, opacity) {
  const fret = getFret(command, note);
  if (fret) {
    fret.style.opacity = opacity;
  }
}

function noteOn(command, note) {
  setFretOpacity(command, note, 1);
}

function noteOff(command, note) {
  setFretOpacity(command, note, 0);
}

