var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var s = "<b>Customer Id: " + result.text + "</b><br/>";
            resultDiv.innerHTML = s;
        }, 
        function (error) {
            alert("Scanning failed: " + error);
        }
    );

}
