// Function to handle drag events
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Function to allow dropping elements
function allowDrop(event) {
    event.preventDefault();
}

// Function to handle the drop event
function drop(event) {
    event.preventDefault();
    var roadmapId = event.dataTransfer.getData("text");
    console.log("Roadmap ID:", roadmapId);
    var roadmap = document.getElementById(roadmapId);
    console.log("Roadmap Element:", roadmap);
    var column = event.target.id;
    console.log("Column ID:", column);
    event.target.appendChild(roadmap); // Append to the target element, not $(this)
    if (roadmap) {
        var columnElement = document.getElementById(columnId);
        columnElement.appendChild(roadmap);
        updateRoadmapStatus(roadmapId, columnId);
    } else {
        console.error("Roadmap Element: null");
    }
}

