function displaySidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "block";
}

function closeSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}


const navLinks = document.querySelectorAll(".sidebar_link"); // Get all links inside the sidebar

// This loop will hide all the sidebar links (if that's your goal)
navLinks.forEach(link => {
    link.onclick = 'none'; // Hide each sidebar link
});
