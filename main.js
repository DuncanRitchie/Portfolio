const url = window.location.pathname
const filename = url.substring(url.lastIndexOf('/'))
const newUrl = "https://www.duncanritchie.co.uk"+filename
// window.location.replace(newUrl)
// window.location.href = newUrl
window.location.assign(newUrl)