const menuData = [
    { id: 1, cat: "Pollos", nom: "Economico Broaster", desc: "1 Presa de pollo ala o pecho, papas fritas, porcionde arroz.", precio: 18, img: "../../images/m1.png" },
    { id: 2, cat: "Pollos", nom: "Economico Brasa", desc: "1 Presa de pollo pecho o pecho, papas fritas, porcionde arroz.", precio: 18, img: "../../images/m2.png" },
    { id: 3, cat: "Pollos", nom: "Cuarto Broaster", desc: "Cuarto Presa de pollo pecho, papas fritas, porcionde arroz.", precio: 28, img: "../../images/m3.png" },
    { id: 4, cat: "Pollos", nom: "Cuarto Brasa", desc: "Cuarto Presa de pollo pecho, papas fritas, porcionde arroz.", precio: 28, img: "../../images/m4.png" },
    { id: 5, cat: "Pollos", nom: "Cuarto 3 Presas Broaster", desc: "Cuarto 3 Presas de pollo pecho, papas fritas, porcion de arroz.", precio: 35, img: "../../images/m5.png" },
    { id: 6, cat: "Pollos", nom: "Cuarto 3 Presas Brasa", desc: "Cuarto 3 Presas de pollo pecho, papas fritas, porcion de arroz.", precio: 35, img: "../../images/m6.png" },
    { id: 7, cat: "Pollos", nom: "Pollo Entero Broaster C/G", desc: "Pollo entero.", precio: 98, img: "../../images/m7.png" },
    { id: 8, cat: "Pollos", nom: "Pollo Entero Brasa C/G", desc: "Pollo entero.", precio: 98, img: "../../images/m8.png" },
    { id: 9, cat: "Pollos", nom: "Pollo Entero Broaster S/G", desc: "Pollo entero sin guarnición.", precio: 78, img: "../../images/m9.png" },
    { id: 10, cat: "Pollos", nom: "Pollo Entero Brasa S/G", desc: "Pollo entero sin guarnición.", precio: 78, img: "images/m10.png" },
    { id: 11, cat: "Salchipapas", nom: "Salchipapa Simple", desc: "Rodajas de chorizo, papas fritas,trozos de carne.", precio: 18, img: "images/m11.png" },
    { id: 12, cat: "Salchipapas", nom: "Salchipapa Super", desc: "Rodajas de chorizo, papas fritas,trozos de carne, huevo.", precio: 22, img: "images/m12.png" },
    { id: 13, cat: "Salchipapas", nom: "Salchipollo Broaster", desc: "Presa de pollo, rodajas de chorizo, papas fritas,trozos de carne, huevo.", precio: 27, img: "images/m13.png" },
    { id: 14, cat: "Salchipapas", nom: "Milanesa Clasica", desc: "Milanesa de pollo, porción de arroz, platano frito, papas fritas.", precio: 20, img: "images/m14.png" },
    { id: 15, cat: "Hambueguesas", nom: "Hamburguesa Simple", desc: "Carne, quezo, tomate, lechuga, cebolla, papas fritas.", precio: 18, img: "images/m15.png" },
    { id: 16, cat: "Hambueguesas", nom: "Hamburguesa Super", desc: "Carne, quezo, tomate, lechuga, cebolla, papas fritas.", precio: 22, img: "images/m16.png" },
    { id: 17, cat: "Hambueguesas", nom: "Hamburguesa Doble", desc: "Doble carne, doble quezo, tomate, lechuga, cebolla, papas fritas.", precio: 26, img: "images/m17.png" },
    { id: 18, cat: "Hambueguesas", nom: "Hamburguesa Triple", desc: "Triple carne, triple quezo, tomate, lechuga, cebolla, papas fritas.", precio: 32, img: "images/m18.png" },
    { id: 19, cat: "Piqueos", nom: "Alitas 12 Piezas", desc: "Alitas, papas fritas.", precio: 35, img: "images/m19.png" },
    { id: 20, cat: "Piqueos", nom: "Salchialitas", desc: "Alitas, rodajas de chorizo, papas fritas.", precio: 37, img: "images/m20.png" },
    { id: 21, cat: "Piqueos", nom: "2 Alitas 12 Piezas", desc: "Alitas, rodajas de chorizo, papas fritas.", precio: 57, img: "images/m21.png" },
    { id: 22, cat: "Piqueos", nom: "Pipocas de Pollo", desc: "Pipocas de pollo.", precio: 15, img: "images/m22.png" },
    { id: 23, cat: "Carne", nom: "Chuleta de Res + Huevo", desc: "Carne de res, huevo, porción de arroz, papas fritas.", precio: 20, img: "images/m25.png" },
    { id: 24, cat: "Carne", nom: "Chicharron de pollo", desc: "Chicharron de pollo, papas fritas.", precio: 20, img: "images/m26.png" },
    { id: 25, cat: "Porciones", nom: "Porción arroz", desc: "Porción arroz Familiar", precio: 12, img: "images/m27.png" },
    { id: 26, cat: "Porciones", nom: "Porción platano", desc: "Porción platano Familiar", precio: 12, img: "images/m28.png" },
    { id: 27, cat: "Porciones", nom: "Porción papas", desc: "Porción papas Familiar", precio: 12, img: "images/m29.png" }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderMenu("Pollos"); 
    setupCategoryTabs();
    verificarHorario();
});

function renderMenu(categoria) {
    const container = document.getElementById('product-list');
    const title = document.querySelector('.category-title');
    
    if (title) title.innerText = categoria;
    container.innerHTML = "";

    const normalize = (text) => text.toLowerCase().trim().replace(/s$/, "");

    const filtrados = menuData.filter(item => 
        normalize(item.cat) === normalize(categoria)
    );

    if (filtrados.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; width:100%; color: #aaa; padding: 40px 20px;">
                <i class="fas fa-utensils" style="font-size: 3rem; margin-bottom: 10px;"></i>
                <p>Próximamente más productos en la categoría ${categoria}</p>
            </div>`;
        return;
    }

    filtrados.forEach(item => {
        const itemHtml = `
            <div class="product-item">
                <img src="${item.img}" class="prod-img" alt="${item.nom}" onerror="this.src='https://via.placeholder.com/150?text=Rosty+Pollos'">
                <div class="prod-info">
                    <div>
                        <h3>${item.nom}</h3>
                        <p>${item.desc}</p>
                    </div>
                    <div class="prod-price-row">
                        <span class="price">Bs. ${item.precio}</span>
                        <button class="add-btn" onclick="addToCart(${item.id})">AGREGAR</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += itemHtml;
    });
}

function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const nombreCategoria = tab.innerText.trim();
            renderMenu(nombreCategoria);
            
            window.scrollTo({ top: 150, behavior: 'smooth' });
        });
    });
}

function addToCart(id) {
    const producto = menuData.find(p => p.id === id);
    const itemEnCarrito = cart.find(item => item.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        cart.push({ ...producto, cantidad: 1 });
    }

    actualizarBarraFlotante();
}

function actualizarBarraFlotante() {
    const totalQty = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);

    const footer = document.getElementById('footer-cart');
    if (footer) {
        footer.style.display = totalQty > 0 ? 'flex' : 'none';
        document.getElementById('cart-qty').innerText = totalQty;
        document.getElementById('cart-total').innerText = totalPrice;
    }
    animateCart();
}

function openOrderSummary() {
    const listContainer = document.getElementById('cart-items-list');
    const subtotalLabel = document.getElementById('subtotal-val');
    const totalLabel = document.getElementById('final-total-val');
    
    listContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const subtotalItem = item.cantidad * item.precio;
        total += subtotalItem;

        listContainer.innerHTML += `
            <tr>
                <td class="qty-cell">${item.cantidad}x</td>
                <td class="name-cell">${item.nom}</td>
                <td class="price-cell">Bs. ${subtotalItem}</td>
                <td class="action-cell">
                    <span onclick="removeItem(${item.id})" style="cursor:pointer">🗑️</span>
                </td>
            </tr>
        `;
    });

    subtotalLabel.innerText = total;
    totalLabel.innerText = total;
    document.getElementById('order-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('order-modal').style.display = 'none';
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    if(cart.length === 0) {
        closeModal();
    } else {
        openOrderSummary();
    }
    actualizarBarraFlotante();
}

function irAFormulario() {
    closeModal();
    document.getElementById('data-modal').style.display = 'block';
}

function closeDataModal() {
    document.getElementById('data-modal').style.display = 'none';
}

function toggleDelivery(isDelivery) {
    document.getElementById('delivery-section').style.display = isDelivery ? 'block' : 'none';
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById('direccion').value = `https://www.google.com/maps?q=${lat},${lon}`;
            alert("Ubicación obtenida.");
        });
    }
}

function confirmarPedido() {
    const nombre = document.getElementById('nombre-cliente').value;
    const telf = document.getElementById('telefono-cliente').value;
    const entrega = document.querySelector('input[name="entrega"]:checked').value;
    const direccion = document.getElementById('direccion').value;
    const pago = document.getElementById('metodo-pago').value;

    if (!nombre || !telf) {
        alert("Por favor, completa tus datos.");
        return;
    }

    let mensaje = `*NUEVO PEDIDO - ROSTY POLLOS*\n\n`;
    mensaje += `*Cliente:* ${nombre}\n`;
    mensaje += `*Celular:* ${telf}\n`;
    mensaje += `*Tipo:* ${entrega}\n`;
    
    if(entrega === "Delivery") {
        mensaje += `*Dirección:* ${direccion}\n`;
    }
    
    mensaje += `*Pago:* ${pago}\n\n`;
    mensaje += `*PRODUCTOS:*\n`;

    let total = 0;
    cart.forEach(item => {
        mensaje += `- ${item.cantidad}x ${item.nom} (Bs. ${item.cantidad * item.precio})\n`;
        total += item.cantidad * item.precio;
    });

    mensaje += `\n*TOTAL A PAGAR: Bs. ${total}*`;

    const numeroWhatsApp = "59177111652"; 
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
}

function verificarHorario() {
    const statusElement = document.getElementById('store-status');
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
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.style.transform = "scale(1.2)";
        setTimeout(() => { badge.style.transform = "scale(1)"; }, 200);
    }
}


setInterval(verificarHorario, 60000);
