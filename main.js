const sidebar = document.querySelector(".sidebar");

function displaySidebar(){
    sidebar.style.display = "block";
};

function closeSidebar(){
    sidebar.style.display = "none";
};


document.getElementById("about_section").addEventListener("click", function() {
    window.location.href = "#about";
    sidebar.style.display = "none";
});


document.getElementById("feature_section").addEventListener("click", function() {
    window.location.href = "#features-items";
    sidebar.style.display = "none";
});


document.getElementById("form_section").addEventListener("click", function() {
    window.location.href = "#form";
    sidebar.style.display = "none";
});