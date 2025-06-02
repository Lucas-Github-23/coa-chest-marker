window.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("item-grid");

  const savedState = JSON.parse(localStorage.getItem("collectedItems")) || {};

  items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const img = document.createElement("img");
    img.src = `images/${item.image}`;
    img.alt = item.name;

    const name = document.createElement("div");
    name.classList.add("item-name");
    name.textContent = item.name;

    if (savedState[item.name]) {
      itemDiv.classList.add("collected");
    }

    itemDiv.appendChild(img);
    itemDiv.appendChild(name);
    grid.appendChild(itemDiv);

    itemDiv.addEventListener("click", () => {
      itemDiv.classList.toggle("collected");
      savedState[item.name] = itemDiv.classList.contains("collected");
      localStorage.setItem("collectedItems", JSON.stringify(savedState));
    });
  });
});