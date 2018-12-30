console.log(1492)
window.onload = function() {
  document.getElementById('img1').onclick=function() {
    document.getElementById('img1').src = 'pics/pic2.png'
  }

  var codes = []

  document.getElementById('submitBtn').onclick = function() {
    code = document.getElementById('textfield').value
    if (!codes.includes(code)) {
      var image = document.createElement('img')
      image.onload = function() {
        codes[codes.length] = code
        document.body.appendChild(document.createElement('br'))
        document.body.appendChild(image)
      }
      image.src = 'pics/'+ code +'.png'
    }
  }
}
