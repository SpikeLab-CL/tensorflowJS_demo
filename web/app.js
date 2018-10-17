
async function run(){
    const model = await tf.loadModel('model.json');
    function predictNumber(){
        canv = document.getElementById("input_canvas");
        input_ = tf.fromPixels(canv, numChannels=1);
        input_ = tf.image.resizeBilinear(input_,[28,28]);
        input_ = tf.reshape(input_,[1,28,28,1]);
        prediction = model.predict(input_)
        p = tf.argMax(prediction, axis=1);
        d = p.dataSync()
        document.getElementById("prediction").innerHTML = "Haz dibujado: " + d[0];
    }
    predictNumber();
}

function clearCanvas(){
    canvas = document.getElementById("input_canvas");
    const context = canvas.getContext('2d');
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("prediction").innerHTML = "";
}