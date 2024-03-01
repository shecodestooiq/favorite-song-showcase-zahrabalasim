function displaySongInfo() {
    function displaySongInfo() {
        event.preventDefault()
        const favSongName = document.getElementById("songName").value;
        const youtubeLink = document.getElementById("youtubeLink").value;
        const songDescription = document.getElementById("description").value;
        const year = document.getElementById("year").value;
        
        const youtubeEmbedLink = youtubeLink.replace("watch?v=", "embed/");
        
        document.getElementById("songNameDisplay").innerText = "Song Name: " + songName;
        document.getElementById("descriptionDisplay").innerText = "Description: " + description;
        document.getElementById("yearDisplay").innerText = "Year First Listened: " + year;
        document.getElementById("youtubeVideo").innerHTML = '<iframe width="560" height="315" src="' + youtubeEmbedLink + '" frameborder="0" allowfullscreen></iframe>';
    }
    
        const divShow = document.getElementById("displayShow")
        diveShow.style.display = "block";
        const formhide = document.getElementById('get-Info')
        formhide.style.display = "none";
     
    
    
    
        window.open(displaySongInfo(), "_blank");
    
    
    document.getElementById("songform").addEventListener("submit", displaySongInfo);
    
    
}
module.exports = {
    displaySongInfo: displaySongInfo,
};