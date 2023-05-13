document.addEventListener("DOMContentLoaded", function(){
    var colors = ["#D4DED8", "#F8D6DD", "#BDBD93", "#DF8B67", "#F1C35F", "#CFB5A0", "#AD866E"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
