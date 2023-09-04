const getColor = () => {
   //hex code
   const randomNumber = Math.floor(Math.random() * 16777215)
   const randomColor = "#"+ randomNumber.toString(16);
   document.body.style.backgroundColor = randomColor;
   document.getElementById("color-code").innerText = randomColor;
   document.getElementById("color-code").style.color = randomColor;
  let replaceColor = randomColor.replace("#", "")
  
  };

const copyColorCode = () => {
   const randomColor = document.getElementById("color-code").innerText;
   navigator.clipboard.writeText(randomColor).then(() => {
     showNotification("Copied your Hex Code! " +randomColor);
   });
 };
 
 const showNotification = (message) => {
   const notification = document.getElementById("notification");
   notification.innerText = message;
   notification.style.opacity = 1;
   setTimeout(() => {
     notification.style.opacity = 0;
   }, 2000); // Show the notification for 2 seconds
 };

// calling event
document.querySelector(".btn").addEventListener(
   "click",
   getColor 
)
document.getElementById("copy-code").addEventListener("click", copyColorCode);
// initial calling
getColor()


//next implementation is to Add a button as select rgbcode
//And add functionality to convert hexcode into a rgb code and store 
//Add eventlistener on button 

