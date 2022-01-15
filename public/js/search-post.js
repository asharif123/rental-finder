async function formHandler(event, searchObj = {} ) {
    event.preventDefault();
    const city_name = searchObj.city_name || document.querySelector("#city_name").value;
    const state_name = searchObj.state_name || document.querySelector("#state_name").value;
    const minimum_budget = searchObj.minimum_budget || document.querySelector("#minimum_budget").value;
    const maximum_budget = searchObj.maximum_budget || document.querySelector("#maximum_budget").value;

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

document.querySelectorAll(".search-history-btn").forEach(node => node.addEventListener("click", (e)=> {
    const searchObj = {
        maximum_budget: e.target.dataset.maximum_budget,
        city_name: e.target.dataset.city_name,
        state_name: e.target.dataset.state_name,
        minimum_budget: e.target.dataset.minimum_budget
    }
    formHandler(e, searchObj);
}))

document.querySelector(".search-form").addEventListener("submit", formHandler);