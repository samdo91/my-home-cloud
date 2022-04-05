const imageslist=["0.jpg","1.jpg","2.jpeg"]

const todayimges= imageslist[Math.floor(Math.random() * imageslist.length)]

const imagefile=document.createElement("img")

imagefile.src= `img/${todayimges}`
document.body.appendChild(imagefile)