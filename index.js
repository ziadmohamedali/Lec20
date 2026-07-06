// the header sidebar section

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const offScreenMenu = document.querySelector(".off-screen-menu");

  if (hamburger && offScreenMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });
  }
});






document.addEventListener("DOMContentLoaded", () => {
  
  let products = ["Sky Blue Dinner Plate", "Cosmic Crackle Plate", "Bespoke Mosaic Kintsugi"];
  let prices = [49, 59, 180];
  let images = ["./images/Discover-img-2.jpg", "./images/product12.jpg", "./images/Discover-img-4.jpg"];

  const btnShowPanel = document.getElementById("btnShowPanel");
  const btnResetAll = document.getElementById("btnResetAll");
  const displayWrapper = document.getElementById("displayWrapper");
  const productForm = document.getElementById("productAdditionForm");
  const wishlistGrid = document.getElementById("wishlistGrid");
  
  const metricCount = document.getElementById("metricCount");
  const metricTotal = document.getElementById("metricTotal");

  const syncAndRenderDOM = () => {
    wishlistGrid.innerHTML = "";
    let subtotalCalculator = 0;
    metricCount.textContent = products.length;

    if (products.length === 0) {
        wishlistGrid.innerHTML = `<div style="text-align:center; padding:40px; color:#807F86; font-size:13px;">No items logged in workspace.</div>`;
        metricTotal.textContent = "$0.00";
        return;
    }

    for (let i = 0; i < products.length; i++) {
        subtotalCalculator += prices[i];

        const rowCard = document.createElement("div");
        rowCard.className = "wishlist-item-row";
        rowCard.setAttribute("data-index", i);

        rowCard.innerHTML = `
            <img src="${images[i]}" alt="Ceramic Specimen">
            <div class="row-info-block" id="infoBlock-${i}">
                <h5>${products[i]}</h5>
                <span>$${prices[i]}.00</span>
            </div>
            <div class="row-actions-block" id="actionsBlock-${i}">
                <button class="row-btn r-edit" onclick="enterInlineEditMode(${i})">Update</button>
                <button class="row-btn r-del" onclick="deleteItemRow(${i})">Delete</button>
            </div>
        `;
        wishlistGrid.appendChild(rowCard);
    }

    metricTotal.textContent = `$${subtotalCalculator.toFixed(2)}`;
  };

  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById("inputProdName");
    const priceInput = document.getElementById("inputProdPrice");
    const imgSelect = document.getElementById("selectProdImg");

    if (nameInput.value.trim() === "" || priceInput.value <= 0) {
        alert("Please enter valid parameters.");
        return;
    }

    products.push(nameInput.value.trim());
    prices.push(parseFloat(priceInput.value));
    images.push(imgSelect.value);

    nameInput.value = "";
    priceInput.value = "";
    
    syncAndRenderDOM();
  });

  window.enterInlineEditMode = (index) => {
    const infoBlock = document.getElementById(`infoBlock-${index}`);
    const actionsBlock = document.getElementById(`actionsBlock-${index}`);

    infoBlock.innerHTML = `
        <input type="text" id="editName-${index}" class="inline-edit-input" value="${products[index]}">
        <input type="number" id="editPrice-${index}" class="inline-edit-input" value="${prices[index]}" min="1">
    `;

    actionsBlock.innerHTML = `
        <button class="row-btn r-save" onclick="commitInlineChanges(${index})">Save</button>
        <button class="row-btn r-edit" onclick="cancelOperationalSync()">Cancel</button>
    `;
  };

  window.commitInlineChanges = (index) => {
    const updatedName = document.getElementById(`editName-${index}`).value.trim();
    const updatedPrice = parseFloat(document.getElementById(`editPrice-${index}`).value);

    if (updatedName === "" || isNaN(updatedPrice) || updatedPrice <= 0) {
        alert("Invalid input values.");
        return;
    }

    products[index] = updatedName;
    prices[index] = updatedPrice;

    syncAndRenderDOM();
  };

  window.cancelOperationalSync = () => {
    syncAndRenderDOM();
  };

  window.deleteItemRow = (index) => {
    products.splice(index, 1);
    prices.splice(index, 1);
    images.splice(index, 1);

    syncAndRenderDOM();
  };

  btnResetAll.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear the workspace?")) {
        products = [];
        prices = [];
        images = [];
        syncAndRenderDOM();
    }
  });

  btnShowPanel.addEventListener("click", () => {
    if (displayWrapper.style.opacity === "0") {
        displayWrapper.style.opacity = "1";
        displayWrapper.style.pointerEvents = "auto";
        btnShowPanel.textContent = "Hide Panel View";
    } else {
        displayWrapper.style.opacity = "0";
        displayWrapper.style.pointerEvents = "none";
        btnShowPanel.textContent = "Show Panel View";
    }
  });

  syncAndRenderDOM();
});
