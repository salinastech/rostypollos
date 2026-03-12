const menuData = [
    {
        id: 1,
        cat: "Pollos",
        nom: "Economico Broaster",
        desc: "1 Presa de pollo ala o pecho, papas fritas, porcionde arroz.",
        precio: 18,
        img: "images/p1.webp",
    },
    {
        id: 2,
        cat: "Pollos",
        nom: "Economico Brasa",
        desc: "1 Presa de pollo pecho o pecho, papas fritas, porcionde arroz.",
        precio: 18,
        img: "images/p2.webp",
    },
    {
        id: 3,
        cat: "Pollos",
        nom: "Cuarto Broaster",
        desc: "Cuarto Presa de pollo pecho, papas fritas, porcionde arroz.",
        precio: 28,
        img: "images/p3.webp",
    },
    {
        id: 4,
        cat: "Pollos",
        nom: "Cuarto Brasa",
        desc: "Cuarto Presa de pollo pecho, papas fritas, porcionde arroz.",
        precio: 28,
        img: "images/p4.webp",
    },
    {
        id: 5,
        cat: "Pollos",
        nom: "Cuarto 3 Presas Broaster",
        desc: "Cuarto 3 Presas de pollo pecho, papas fritas, porcionde arroz.",
        precio: 35,
        img: "images/p5.webp",
    },
    {
        id: 6,
        cat: "Pollos",
        nom: "Cuarto 3 Presas Brasa",
        desc: "Pique de res, milanesa de pollo, mozzarella, huevo y papas fritas.",
        precio: 35,
        img: "images/p6.webp",
    },
    {
        id: 7,
        cat: "Pollos",
        nom: "Pollo Entero Broaster C/G",
        desc: "Pollo entero.",
        precio: 98,
        img: "images/p7.webp",
    },
    {
        id: 8,
        cat: "Pollos",
        nom: "Pollo Entero Brasa C/G",
        desc: "Pollo entero.",
        precio: 98,
        img: "images/p8.webp",
    },
    {
        id: 9,
        cat: "Pollos",
        nom: "Pollo Entero Broaster S/G",
        desc: "Pique de res, milanesa de pollo, mozzarella, huevo y papas fritas.",
        precio: 78,
        img: "images/p9.webp",
    },
    {
        id: 10,
        cat: "Pollos",
        nom: "Pollo Entero Brasa S/G",
        desc: "Pique de res, milanesa de pollo, mozzarella, huevo y papas fritas.",
        precio: 78,
        img: "images/p10.webp",
    },
    {
        id: 21,
        cat: "Salchipapas",
        nom: "Salchipapa Simple",
        desc: "Rodajas de chorizo, papas fritas,trozos de carne.",
        precio: 18,
        img: "images/s1.webp",
    },
    {
        id: 22,
        cat: "Salchipapas",
        nom: "Salchipapa Super",
        desc: "Rodajas de chorizo, papas fritas,trozos de carne, huevo.",
        precio: 22,
        img: "images/s2.webp",
    },
    {
        id: 23,
        cat: "Salchipapas",
        nom: "Salchipollo Broaster",
        desc: "Presa de pollo, odajas de chorizo, papas fritas,trozos de carne, huevo.",
        precio: 27,
        img: "images/s3.webp",
    },
    {
        id: 24,
        cat: "Salchipapas",
        nom: "Salchipipocas",
        desc: "Presas de Pollo, rodajas de chorizo, papas fritas.",
        precio: 25,
        img: "images/s4.webp",
    },
    {
        id: 25,
        cat: "Hambueguesas",
        nom: "Hamburguesa Simple",
        desc: "Carne, quezo, tomate, lechuga, cebolla, papas fritas.",
        precio: 18,
        img: "images/h1.webp",
    },
    {
        id: 31,
        cat: "Hambueguesas",
        nom: "Hamburguesa Super",
        desc: "Carne, quezo, tomate, lechuga, cebolla, papas fritas.",
        precio: 22,
        img: "images/h2.webp",
    },
    {
        id: 32,
        cat: "Hambueguesas",
        nom: "Hamburguesa Doble",
        desc: "Doble carne, doble quezo, tomate, lechuga, cebolla, papas fritas.",
        precio: 26,
        img: "images/h3.webp",
    },
    {
        id: 33,
        cat: "Hambueguesas",
        nom: "Hamburguesa Triple",
        desc: "Triple carne, triple quezo, tomate, lechuga, cebolla, papas fritas.",
        precio: 30,
        img: "images/h4.webp",
    },
        {
        id: 34,
        cat: "Hambueguesas",
        nom: "Salchi Burguer",
        desc: "Carne, tomate, lechuga, cebolla, rodajas de chorizo, papas fritas.",
        precio: 32,
        img: "images/h5.webp",
    },
    {
        id: 41,
        cat: "Piqueos",
        nom: "Alitas 12 Piezas",
        desc: "Alitas, papas fritas.",
        precio: 35,
        img: "images/m19.webp",
    },
    {
        id: 42,
        cat: "Piqueos",
        nom: "Salchialitas",
        desc: "Alitas, rodajas de chorizo, papas fritas.",
        precio: 37,
        img: "images/m20.webp",
    },
    {
        id: 43,
        cat: "Piqueos",
        nom: "2 Alitas 12 Piezas",
        desc: "Alitas, rodajas de chorizo, papas fritas.",
        precio: 57,
        img: "images/m21.webp",
    },
    {
        id: 44,
        cat: "Piqueos",
        nom: "Pipocas de Pollo",
        desc: "Pipocas de pollo, papas fritas.",
        precio: 15,
        img: "images/m22.webp",
    },
        {
        id: 45,
        cat: "Piqueos",
        nom: "Chicharron de pollo",
        desc: "Chicharrón de pollo, papas fritas.",
        precio: 20,
        img: "images/m22.webp",
    },
    {
        id: 51,
        cat: "Carne",
        nom: "Chuleta de Res + Huevo",
        desc: "Chuleta de Res,arroz, huevo y papas fritas.",
        precio: 20,
        img: "images/c1.webp",
    },
        {
        id: 52,
        cat: "Carne",
        nom: "Chuleta de Cerdo",
        desc: "Chuleta de Cerdo, arroz y papas fritas.",
        precio: 20,
        img: "images/c2.webp",
    },
    {
        id: 53,
        cat: "Carne",
        nom: "Milanesa de Res",
        desc: "Milanesa de res, arroz, papas fritas.",
        precio: 20,
        img: "images/c3.webp",
    },
    {
        id: 61,
        cat: "Porciones",
        nom: "Porción arroz",
        desc: "Porción arroz Mediano",
        precio: 6,
        img: "images/m27.webp",
    },
    {
        id: 62,
        cat: "Porciones",
        nom: "Porción platano",
        desc: "Porción platano Mediano",
        precio: 6,
        img: "images/m28.webp",
    },
    {
        id: 63,
        cat: "Porciones",
        nom: "Porción papas",
        desc: "Porción papas Mediano",
        precio: 6,
        img: "images/m29.webp",
    },
    {
        id: 64,
        cat: "Porciones",
        nom: "Porción arroz",
        desc: "Porción arroz Familiar",
        precio: 12,
        img: "images/m27.webp",
    },
    {
        id: 65,
        cat: "Porciones",
        nom: "Porción platano",
        desc: "Porción platano Familiar",
        precio: 12,
        img: "images/m28.webp",
    },
    {
        id: 66,
        cat: "Porciones",
        nom: "Porción papas",
        desc: "Porción papas Familiar",
        precio: 12,
        img: "images/m29.webp",
    },
        {
        id: 67,
        cat: "Promos",
        nom: "Porción papas",
        desc: "Porción papas Familiar",
        precio: 12,
        img: "images/m29.webp",
    },
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    renderMenu("Pollos");
    setupCategoryTabs();
    verificarHorario();
    
    const categorias = [...new Set(menuData.map(item => item.cat))];
    categorias.forEach(c => preloadImages(c));
});

function preloadImages(categoria) {
    const filtrados = menuData.filter(item => item.cat === categoria);
    filtrados.forEach(item => {
        const img = new Image();
        img.src = item.img;
    });
}

function renderMenu(categoria) {
    const container = document.getElementById("product-list");
    const title = document.querySelector(".category-title");
    if (title) title.innerText = categoria;
    
    container.innerHTML = "";

    const normalize = (text) => text.toLowerCase().trim().replace(/s$/, "");
    const filtrados = menuData.filter(
        (item) => normalize(item.cat) === normalize(categoria)
    );

    if (filtrados.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">Próximamente...</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    filtrados.forEach((item) => {
        const productCard = document.createElement("div");
        productCard.className = "product-item";
        productCard.innerHTML = `
            <div class="img-placeholder">
                <img src="${item.img}" 
                     class="prod-img" 
                     alt="${item.nom}" 
                     loading="lazy"
                     onload="this.parentElement.classList.add('loaded')"
                     onerror="this.src=''">
            </div>
            <div class="prod-info">
                <div>
                    <h3>${item.nom}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="prod-price-row">
                    <span class="price">Bs. ${Math.floor(item.precio)}</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">AGREGAR</button>
                </div>
            </div>
        `;
        fragment.appendChild(productCard);
    });
    
    container.appendChild(fragment);
}

function setupCategoryTabs() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            const nombreCategoria = tab.innerText.trim();
            renderMenu(nombreCategoria);

            window.scrollTo({ top: 150, behavior: "smooth" });
        });
    });
}

function addToCart(id) {
    const producto = menuData.find((p) => p.id === id);
    const itemEnCarrito = cart.find((item) => item.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        cart.push({ ...producto, cantidad: 1 });
    }

    actualizarBarraFlotante();
}

function actualizarBarraFlotante() {
    const totalQty = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.cantidad * item.precio,
        0,
    );

    const footer = document.getElementById("footer-cart");
    if (footer) {
        footer.style.display = totalQty > 0 ? "flex" : "none";
        document.getElementById("cart-qty").innerText = Math.floor(totalQty);
        document.getElementById("cart-total").innerText = Math.floor(totalPrice);
    }
    animateCart();
}

function openOrderSummary() {
    const listContainer = document.getElementById("cart-items-list");
    const subtotalLabel = document.getElementById("subtotal-val");
    const totalLabel = document.getElementById("final-total-val");

    listContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const subtotalItem = item.cantidad * item.precio;
        total += subtotalItem;

        listContainer.innerHTML += `
            <tr>
                <td class="qty-cell">${item.cantidad}x</td>
                <td class="name-cell">${item.nom}</td>
                <td class="price-cell">Bs. ${Math.floor(subtotalItem)}</td>
                <td class="action-cell">
                    <button class="btn-delete" onclick="removeItem(${item.id})" title="Eliminar producto">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    subtotalLabel.innerText = Math.floor(total);
    totalLabel.innerText = Math.floor(total);
    document.getElementById("order-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("order-modal").style.display = "none";
}

function removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    if (cart.length === 0) {
        closeModal();
    } else {
        openOrderSummary();
    }
    actualizarBarraFlotante();
}

function irAFormulario() {
    closeModal();
    document.getElementById("data-modal").style.display = "block";
}

function closeDataModal() {
    document.getElementById("data-modal").style.display = "none";
}

function toggleDelivery(isDelivery) {
    document.getElementById("delivery-section").style.display = isDelivery
        ? "block"
        : "none";
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById("direccion").value =
                `https://www.google.com/maps?q=${lat},${lon}`;
            alert("Ubicación obtenida.");
        });
    }
}

function confirmarPedido() {
    const nombre = document.getElementById("nombre-cliente").value;
    const telf = document.getElementById("telefono-cliente").value;
    const entrega = document.querySelector('input[name="entrega"]:checked').value;
    const direccion = document.getElementById("direccion").value;
    const pago = document.getElementById("metodo-pago").value;

    if (!nombre || !telf) {
        alert("Por favor, completa tus datos.");
        return;
    }

    let mensaje = `*NUEVO PEDIDO - ROSTY POLLOS*\n\n`;
    mensaje += `*Cliente:* ${nombre}\n`;
    mensaje += `*Celular:* ${telf}\n`;
    mensaje += `*Tipo:* ${entrega}\n`;

    if (entrega === "Delivery") {
        mensaje += `*Dirección:* ${direccion}\n`;
    }

    mensaje += `*Pago:* ${pago}\n\n`;
    mensaje += `*PRODUCTOS:*\n`;

    let total = 0;
    cart.forEach((item) => {
        const sub = item.cantidad * item.precio;
        mensaje += `- ${item.cantidad}x ${item.nom} (Bs. ${Math.floor(sub)})\n`;
        total += sub;
    });

    mensaje += `\n*TOTAL A PAGAR: Bs. ${Math.floor(total)}*`;

    const numeroWhatsApp = "59177111652";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}

function verificarHorario() {
    const statusElement = document.getElementById("store-status");
    if (!statusElement) return;

    const ahora = new Date();
    const horaActual = ahora.getHours();

    const horaApertura = 11;
    const horaCierre = 24;

    if (horaActual >= horaApertura && horaActual < horaCierre) {
        statusElement.textContent = "Abierto";
        statusElement.className = "status-open";
    } else {
        statusElement.textContent = "Cerrado";
        statusElement.className = "status-closed";
    }
}

function animateCart() {
    const badge = document.querySelector(".cart-badge");
    if (badge) {
        badge.style.transform = "scale(1.2)";
        setTimeout(() => {
            badge.style.transform = "scale(1)";
        }, 200);
    }
}

setInterval(verificarHorario, 60000);
