let mode = "ca";

function switchPortfolio() {
    if (mode === "ca") {
        document.getElementById("portfolio-ca").style.display = "none";
        document.getElementById("portfolio-us").style.display = "block";
        document.getElementById("mode-label").innerText = "USA";
        mode = "us";
    } else {
        document.getElementById("portfolio-us").style.display = "none";
        document.getElementById("portfolio-ca").style.display = "block";
        document.getElementById("mode-label").innerText = "Canada";
        mode = "ca";
    }
}
