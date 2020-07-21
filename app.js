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
    var command = message.data[0];
    var note = message.data[1];
    var velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command

    switch (command) {
        case 144: // noteOn
            if (velocity > 0) {
                noteOn(note, velocity);
            } else {
                noteOff(note);
            }
            break;
        case 128: // noteOff
            noteOff(note);
            break;
    };
 

  function noteOn(note){
    if(note = 60) {
        oneZero.style['opacity'] = 1;
  };
    };
    
  };


  function noteOff(note) {
    
  };
  
  
//first string notes
const oneZero = document.getElementById('oneZero');
oneZero.addEventListener( 'noteOn', function () {
  if (message.data[1] = 60) {
  oneZero.style['opacity'] = 1;
  };
});

const oneOne = document.getElementById('oneOne');
oneOne.addEventListener('click', function () {
  oneOne.style['opacity'] = 1;
});

const oneTwo = document.getElementById('oneTwo');
oneTwo.addEventListener('click', function () {
  oneTwo.style['opacity'] = 1;
});

const oneThree = document.getElementById('oneThree');
oneThree.addEventListener('click', function () {
  oneThree.style['opacity'] = 1;
});

const oneFour = document.getElementById('oneFour');
oneFour.addEventListener('click', function () {
  oneFour.style['opacity'] = 1;
});

const oneFive = document.getElementById('oneFive');
oneFive.addEventListener('click', function () {
  oneFive.style['opacity'] = 1;
});

const oneSix = document.getElementById('oneSix');
oneSix.addEventListener('click', function () {
  oneSix.style['opacity'] = 1;
});

const oneSeven = document.getElementById('oneSeven');
oneSeven.addEventListener('click', function () {
  oneSeven.style['opacity'] = 1;
});

const oneEight = document.getElementById('oneEight');
oneEight.addEventListener('click', function () {
  oneEight.style['opacity'] = 1;
});

const oneNine = document.getElementById('oneNine');
oneNine.addEventListener('click', function () {
  oneNine.style['opacity'] = 1;
});

const oneTen = document.getElementById('oneTen');
oneTen.addEventListener('click', function () {
  oneTen.style['opacity'] = 1;
});

const oneEleven = document.getElementById('oneEleven');
oneEleven.addEventListener('click', function () {
  oneEleven.style['opacity'] = 1;
});
const oneTwelve = document.getElementById('oneTwelve');
oneTwelve.addEventListener('click', function () {
  oneTwelve.style['opacity'] = 1;
});

const oneThirteen = document.getElementById('oneThirteen');
oneThirteen.addEventListener('click', function () {
  oneThirteen.style['opacity'] = 1;
});

const oneFourteen = document.getElementById('oneFourteen');
oneFourteen.addEventListener('click', function () {
  oneFourteen.style['opacity'] = 1;
});

const oneFifteen = document.getElementById('oneFifteen');
oneFifteen.addEventListener('click', function () {
  oneFifteenfteen.style['opacity'] = 1;
});

