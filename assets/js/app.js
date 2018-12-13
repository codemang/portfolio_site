function enable(keyword) {
  $(".project-container").each(function(element) {
    if ($(this).find(".project-status-value").text().trim() === keyword || keyword === "All") {
      $(this).css("display", "block");
    } else {
      $(this).css("display", "none");
    }
  });
}

$(document).ready(function() {
  console.log("here");
  $(".project-filter").on("click", function(elm) {
    $(".project-filter-active").removeClass("project-filter-active");
    $(this).addClass("project-filter-active");
    if ($(this).text() === "All") {
      enable("All");
    } else if ($(this).text() === "Complete") {
      enable("Complete");
    } else if ($(this).text() === "In Progress") {
      enable("In Progress");
    } else if ($(this).text() === "Idea Phase") {
      enable("Idea");
    }
  });
});
