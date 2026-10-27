const CATALOG = [
  {
    name: "Carne Vacuna",
    products: [
      ["Asado Plancha", 13899],
      ["Asado Cortado Banderita a 13 C.", 13999],
      ["Asado Especial 7C. (Ventana)", 21899],
      ["Bife Ancho de Costilla", 16999],
      ["Bife C/Lomo 10 Costillas", 17499],
      ["Bife C/Lomo 5 Costillas", 20499],
      ["Bife C/Lomo 8 Costillas", 18999],
      ["Bife de Cost. Angosto", 20499],
      ["Bife de Chorizo", 20899],
      ["Bife Tomahawk", 29999],
      ["Bola de Lomo", 14999],
      ["Colita de Cuadril", 18999],
      ["Cuadrada", 14999],
      ["Cuadril", 15499],
      ["Entraña", 24499],
      ["Lomo con Cordón", 24499],
      ["Matambre", 14999],
      ["Milanesa de Bola de Lomo", 15999],
      ["Milanesa de Cuadrada", 15999],
      ["Milanesa de Nalga", 18999],
      ["Milanesa de Peceto", 22999],
      ["Nalga con Tapa", 16999],
      ["Nalga sin Tapa", 17999],
      ["Ojo de Bife", 22999],
      ["Osobuco", 8999],
      ["Paleta", 14999],
      ["Tortuguita", 14999],
      ["Asado Completo (Asado C/Vacío C/Matambre)", 14499],
      ["Peceto", 21999],
      ["Picada Especial", 13499],
      ["Picada Común", 9999],
      ["Riñonada", 19999],
      ["Roast Beef", 14999],
      ["Tapa de Nalga", 13499],
      ["Tapa de Asado", 14499],
      ["Tapa de Cuadril (Picaña)", 16499],
      ["Tapa de Bife", 12999],
      ["Vacío", 18999]
    ]
  },
  {
    name: "Pollo / aves",
    products: [
      ["Pata y Muslo C/H", 3199],
      ["Pechugas S/H en Caja", 7399],
      ["Pata y Muslo Deshuesada", 4199],
      ["Suprema", 7899],
      ["Alitas", 2399],
      ["Milanesa de Pollo Elab.", 7699],
      ["Pollo x Cajón", null, "cajón"]
    ]
  },
  {
    name: "Cerdo",
    products: [
      ["Bondiola", 7499],
      ["Carré de Cerdo Cortado", 6999],
      ["Carré de Cerdo Entero", 6799],
      ["Carré Deshuesado", 10499],
      ["Churrasquito de Cerdo", 10499],
      ["Matambrito de Cerdo", 11999],
      ["Milanesa de Cerdo (Pulpa)", 9799],
      ["Panceta Ahumada Salada", 18999],
      ["Chorizo Colorado", 9999],
      ["Pechito con Manta", 6999],
      ["Pernil de Cerdo", 5499],
      ["Ribs de Cerdo", 11999],
      ["Solomillo", 11999],
      ["Paleta de Cerdo", 4299]
    ]
  },
  {
    name: "Embutidos por gancho",
    products: [
      ["Chorizo Puro Cerdo", 7499],
      ["Chorizo Bombón Cerdo", 7599],
      ["Morcilla Atada/Rosca", 4099],
      ["Morcilla Bombón", 4199],
      ["Salchicha Parrillera", 8599]
    ]
  },
  {
    name: "Achuras",
    products: [
      ["Chinchulín", 3299],
      ["Riñón", 3899],
      ["Molleja", 21999],
      ["Lengua", 8599],
      ["Mondongo", 7399],
      ["Hígado", 3299],
      ["Rabo", 7599]
    ]
  },
  {
    name: "Provoletas",
    products: [
      ["Provoleta Natalio Alba", 17735]
    ]
  }
];

const WHATSAPP_NUMBER = "5491128011111";
const productById = new Map();
const cart = new Map();
const money = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 0
});
const quantityFormat = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 2
});

function slugify(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function formatMoney(value) {
  const rounded = Math.round(value * 100);
  const whole = Math.trunc(rounded / 100);
  const cents = rounded % 100;
  return cents === 0
    ? `$ ${money.format(whole)}`
    : `$ ${money.format(whole)},${String(cents).padStart(2, "0")}`;
}

function createProductRow(category, name, price, unit) {
  const id = slugify(`${category}-${name}`);
  const item = { id, category, name, price, unit: unit || "kg" };
  productById.set(id, item);
  const quantityLabel = item.unit === "kg" ? "kilogramos" : item.unit;
  const row = document.createElement("article");
  row.className = "product-row";
  row.dataset.productId = id;
  row.innerHTML = `
    <div class="product-info">
      <span class="product-name"></span>
      <span class="product-price"></span>
    </div>
    <div class="quantity-control">
      <button type="button" data-delta="-1" aria-label="Quitar cantidad de ${name}">−</button>
      <input type="number" min="0" step="1" value="0" inputmode="numeric" pattern="[0-9]*" aria-label="Cantidad de ${name} en ${quantityLabel}">
      <button type="button" data-delta="1" aria-label="Agregar cantidad de ${name}">+</button>
      <span class="quantity-unit">${item.unit}</span>
    </div>`;
  row.querySelector(".product-name").textContent = name;
  row.querySelector(".product-price").innerHTML = price === null
    ? "<strong>Consultar precio</strong>"
    : `<strong>${formatMoney(price)}</strong> / ${item.unit}`;
  return row;
}

function renderCatalog() {
  const categoryNav = document.getElementById("category-nav");
  const productGroups = document.getElementById("product-groups");
  const navFragment = document.createDocumentFragment();
  const groupsFragment = document.createDocumentFragment();

  CATALOG.forEach((category) => {
    const categoryId = `categoria-${slugify(category.name)}`;
    const navLink = document.createElement("a");
    navLink.href = `#${categoryId}`;
    navLink.textContent = category.name;
    navLink.addEventListener("click", () => {
      document.getElementById(categoryId).open = true;
    });
    navFragment.append(navLink);

    const group = document.createElement("details");
    group.className = "product-category";
    group.id = categoryId;
    group.open = category === CATALOG[0];

    const summary = document.createElement("summary");
    summary.append(document.createTextNode(category.name));
    const count = document.createElement("span");
    count.className = "category-count";
    count.textContent = `${category.products.length} productos`;
    summary.append(count);

    const productList = document.createElement("div");
    productList.className = "product-list";
    category.products.forEach(([name, price, unit]) => {
      productList.append(createProductRow(category.name, name, price, unit));
    });
    group.append(summary, productList);
    groupsFragment.append(group);
  });

  categoryNav.replaceChildren(navFragment);
  productGroups.replaceChildren(groupsFragment);
}

function getQuantity(row) {
  const input = row.querySelector('input[type="number"]');
  const value = Math.floor(Number(input.value));
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function updateItem(row) {
  const id = row.dataset.productId;
  const item = productById.get(id);
  const quantity = getQuantity(row);
  row.classList.toggle("is-selected", quantity > 0);
  if (quantity > 0) {
    cart.set(id, { ...item, quantity });
  } else {
    cart.delete(id);
  }
  updateCart();
}

function renderCartItems(items) {
  const list = document.getElementById("cart-items");
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const line = document.createElement("li");
    line.className = "cart-item";
    const name = document.createElement("span");
    name.className = "cart-item-name";
    name.textContent = item.name;
    const quantity = document.createElement("small");
    quantity.textContent = `${quantityFormat.format(item.quantity)} ${item.unit}`;
    name.append(quantity);
    const subtotal = document.createElement("span");
    subtotal.className = "cart-item-total";
    subtotal.textContent = item.price === null ? "A cotizar" : formatMoney(item.price * item.quantity);
    line.append(name, subtotal);
    fragment.append(line);
  });

  list.replaceChildren(fragment);
}

function updateCart() {
  const items = [...cart.values()];
  const itemCount = items.length;
  const unpricedCount = items.filter((item) => item.price === null).length;
  const total = items.reduce((sum, item) => sum + (item.price === null ? 0 : item.price * item.quantity), 0);
  const totalLabel = document.getElementById("cart-total");
  const countLabel = document.getElementById("order-count");

  document.getElementById("order-count").textContent = itemCount === 0
    ? "Todavía no agregaste productos"
    : `${itemCount} ${itemCount === 1 ? "producto" : "productos"}`;
  document.getElementById("cart-empty").hidden = itemCount > 0;
  document.querySelector(".cart-fields").hidden = itemCount === 0;
  document.getElementById("send-order").disabled = itemCount === 0;
  totalLabel.textContent = itemCount === 0
    ? "A confirmar"
    : unpricedCount > 0 && total === 0
      ? "Consultar precio"
      : `${formatMoney(total)}${unpricedCount > 0 ? " + productos a cotizar" : ""}`;
  document.getElementById("cart-note").textContent = unpricedCount > 0
    ? "El cajón de pollo se cotiza por separado. Los precios, el stock y la entrega se confirman al recibir el pedido."
    : "Los precios, el stock y la entrega se confirman al recibir el pedido.";
  renderCartItems(items);
}

function buildWhatsAppMessage() {
  const items = [...cart.values()];
  const knownTotal = items.reduce((sum, item) => sum + (item.price === null ? 0 : item.price * item.quantity), 0);
  const lines = items.flatMap((item) => {
    const quantity = `${quantityFormat.format(item.quantity)} ${item.unit}`;
    const subtotal = item.price === null ? "precio a consultar" : formatMoney(item.price * item.quantity);
    return [`- ${item.name}:`, `   ${quantity} - ${subtotal}`];
  });
  const value = (id) => document.getElementById(id).value.trim();
  const region = document.querySelector('input[name="delivery-region"]:checked')?.value;
  const customer = [
    ["Nombre y negocio", value("customer-name")],
    ["Teléfono", value("customer-phone")],
    ["Zona de entrega", value("delivery-area")],
    ["Región", region]
  ].filter(([, text]) => text).map(([label, text]) => `${label}: ${text}`);
  const hasUnpriced = items.some((item) => item.price === null);
  const details = [
    "*PEDIDO MAYORISTA*",
    "Hola, quiero preparar este pedido:",
    "",
    "*PRODUCTOS*",
    ...lines,
    "",
    "*TOTAL ESTIMADO*",
    hasUnpriced
      ? `${formatMoney(knownTotal)} (más productos a cotizar)`
      : formatMoney(knownTotal),
    ""
  ];

  if (customer.length) details.push("*MIS DATOS*", ...customer, "");
  details.push(
    "*CONDICIONES*",
    "Precios, disponibilidad y entrega se confirman con el equipo.",
    "El pago es anticipado."
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details.join("\n"))}`;
}

renderCatalog();
updateCart();

document.getElementById("product-groups").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-delta]");
  if (!button) return;
  const row = button.closest(".product-row");
  const input = row.querySelector('input[type="number"]');
  input.value = Math.max(0, getQuantity(row) + Number(button.dataset.delta));
  updateItem(row);
});

document.getElementById("product-groups").addEventListener("input", (event) => {
  if (!event.target.matches('input[type="number"]')) return;
  updateItem(event.target.closest(".product-row"));
});

document.getElementById("product-groups").addEventListener("change", (event) => {
  if (!event.target.matches('input[type="number"]')) return;
  const row = event.target.closest(".product-row");
  event.target.value = getQuantity(row);
});

document.getElementById("cart-toggle").addEventListener("click", (event) => {
  const panel = document.getElementById("pedido");
  const expanded = panel.dataset.expanded !== "true";
  panel.dataset.expanded = String(expanded);
  event.currentTarget.setAttribute("aria-expanded", String(expanded));
  event.currentTarget.textContent = expanded ? "Cerrar pedido" : "Revisar pedido";
});

document.getElementById("send-order").addEventListener("click", () => {
  if (cart.size === 0) return;
  window.open(buildWhatsAppMessage(), "_blank", "noopener,noreferrer");
});
