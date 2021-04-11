const camera = document.getElementById('camera')
const cameraDetails = document.getElementById('camera-details')

const constraint = {
  audio: false,
  video: true
}

navigator.mediaDevices.getUserMedia(constraint)
.then(mediaStream => {
  camera.srcObject = mediaStream
  camera.onloadeddata = (event) => {
    camera.play()
  }
  const tracks = mediaStream.getTracks()[0]
  const detailsComponent = `
    <div>
     <label>label: <span>${tracks.label}</span></label>
     <label>status: <span>${tracks.readyState}</span></label>
    </div>
  `
  cameraDetails.innerHTML = detailsComponent
})