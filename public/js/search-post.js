async function formHandler(event) {
    event.preventDefault();
    const city_name = document.querySelector("#city_name").value;
    const state_name = document.querySelector("#state_name").value;
    const minimum_budget = document.querySelector("#minimum_budget").value;
    const maximum_budget = document.querySelector("#maximum_budget").value;
// Add new search
const response = await fetch (`/search`, {
    method: "POST",
    body: JSON.stringify({
        city_name,
        state_name,
        minimum_budget,
        maximum_budget,
    }),
    headers: {
        "Content-Type": "application/json",
    },
});
  if (response.ok) {
    document.location.replace(`/results`);
  } else {
    alert("cannot find any properties");
}
}

document.querySelector(".search-form").addEventListener("submit", formHandler);