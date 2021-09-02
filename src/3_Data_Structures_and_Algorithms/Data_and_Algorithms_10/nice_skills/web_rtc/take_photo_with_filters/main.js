var snapshotButton = document.querySelector('button#snapshot'),
    filterSelect = document.querySelector('select#filter'),
    video = document.querySelector('video'),
    canvas = document.querySelector('canvas'),
    constraints = {
        audio: false,
        video: true
    };

canvas.width = 480;
canvas.height = 360;

snapshotButton.onclick = function() {
    canvas.className = filterSelect.value;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
};

filterSelect.onchange = function() {
    video.className = filterSelect.value;
};

function handleSuccess(stream) {
    window.stream = stream; // make stream available to browser console
    video.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);