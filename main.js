function sons() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5L_5r15xe/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        r= Math.floor(Math.random() * 255) + 1;
        g= Math.floor(Math.random() * 255) + 1;
        b= Math.floor(Math.random() * 255) + 1;
        document.getElementById("result").innerHTML= "Posso ouvir: " + results[0].label;
        document.getElementById("confidence").innerHTML= "Precisão: " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result").style.color= "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("confidence").style.color= "rgb(" + r + ", " + g + ", " + b + ")";
        img= document.getElementById("eleven");
        img1= document.getElementById("max");
        img2= document.getElementById("dustin");
        img3= document.getElementById("robin");
        if (results[0].label == "Palma") {
            img.src= "png_eleven-removebg-preview.png";
            img1.src= "max.gif";
            img2.src= "png_dustin-removebg-preview.png";
            img3.src= "png_robin-removebg-preview.png";
        } else if (results[0].label == "Background Noise") {
            img.src= "png_eleven-removebg-preview.png";
            img1.src= "png_max-removebg-preview.png";
            img2.src= "dustin.gif";
            img3.src= "png_robin-removebg-preview.png";
        } else if (results[0].label == "Estalar") {
            img.src= "eleven.gif";
            img1.src= "png_max-removebg-preview.png";
            img2.src= "png_dustin-removebg-preview.png";
            img3.src= "png_robin-removebg-preview.png";
        } else {
            img.src= "png_eleven-removebg-preview.png";
            img1.src= "png_max-removebg-preview.png";
            img2.src= "png_dustin-removebg-preview.png";
            img3.src= "robin.gif";
    }
    }
}