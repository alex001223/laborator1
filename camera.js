var video = document.getElementById("video"); function on_cam_success(stream){
video.srcObject = stream; }
function on_cam_error(err)
{
alert("error."+err.message); }

var constraints = { audio: false, video: true }; navigator.mediaDevices.getUserMedia(constraints) .then(on_cam_success)
.catch(on_cam_error); 
function capteaza(){
	
var c = document.getElementById("canvas"); c.width = video.width;
c.height = video.height;
var ctx = c.getContext("2d");
ctx.drawImage(video, 0, 0, 640, 480); }

video.addEventListener('loadedmetadata', function() {
    var c = document.getElementById("canvas");
    c.width = video.videoWidth;
    c.height = video.videoHeight;
    var ctx = c.getContext("2d");
    ctx.drawImage(video, 0, 0, c.width, c.height);
});
