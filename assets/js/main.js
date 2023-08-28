// document
//   .querySelector(".activity-card-button")
//   .addEventListener("click", function () {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://www.boredapi.com/api/activity", true);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var response = JSON.parse(xhr.responseText);
//         var activity = response.activity;
//         var target = document.querySelector("#activity-card-texts");
//         target.textContent = activity;
//       } else if (xhr.readyState === 4) {
//         console.error("Error fetching data");
//       }
//     };
//     xhr.send();
//   });

// function fetchAndDisplayActivity() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://www.boredapi.com/api/activity", true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var response = JSON.parse(xhr.responseText);
//       var activity = response.activity;
//       var target = document.querySelector("#activity-card-texts");
//       target.textContent = "You Can, " + activity;
//     } else if (xhr.readyState === 4) {
//       console.error("Error fetching data");
//     }
//   };
//   xhr.send();
// }

// document
//   .querySelector(".activity-card-button")
//   .addEventListener("click", fetchAndDisplayActivity);
// document
//   .querySelector("#activity-card")
//   .addEventListener("click", fetchAndDisplayActivity);
document.addEventListener("DOMContentLoaded", function () {
  const reloadButton = document.getElementById("reloadButton");
  const activityCardContent = document.querySelector(".activity-card-content");

  function fetchActivity() {
    fetch("http://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => {
        const newActivity = data.activity;
        activityCardContent.textContent = newActivity;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Initial fetch and display
  fetchActivity();

  reloadButton.addEventListener("click", fetchActivity);
});
