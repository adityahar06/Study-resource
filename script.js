document.getElementById("but").addEventListener("click", function () {
    let searchValue = document.getElementById("place").value.trim().toLowerCase();
    
    if (searchValue.includes("1st")) {
        document.getElementById("year1").scrollIntoView({ behavior: "smooth" });
    } else if (searchValue.includes("2nd")) {
        document.getElementById("year2").scrollIntoView({ behavior: "smooth" });
    } else if (searchValue.includes("3rd")) {
        document.getElementById("year3").scrollIntoView({ behavior: "smooth" });
    } else {
        alert("Year not found!");
    }
});
