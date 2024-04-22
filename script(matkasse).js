document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    const orderSummary = document.getElementById('order-summary');
    const totalCost = document.getElementById('total-cost');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Hent verdier fra skjema
        const selectedBox = document.getElementById('meal-box').value;
        const selectedQuantity = document.getElementById('quantity').value;
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const address = document.getElementById('address').value;
        const postalCode = document.getElementById('postal-code').value;
        const city = document.getElementById('city').value;
        const phone = document.getElementById('phone').value;

        // Oppdater oppsummering
        orderSummary.innerHaTML = `
            <p><strong>Matkasse:</strong> ${selectedBox}</p>
            <p><strong>Mengde:</strong> ${selectedQuantity}</p>
            <p><strong>Leveringsinformasjon:</strong></p>
            <p>${firstName} ${lastName}</p>
            <p>${address}, ${postalCode} ${city}</p>
            <p><strong>Telefonnummer:</strong> ${phone}</p>
        `;

        // Beregn totalpris
        let total = 0;
        if (selectedBox === 'Vegansk') {
            total = selectedQuantity === '1-2' ? 679 : 979;
        } else if (selectedBox === 'Vegansk') {
            total = selectedQuantity === '3-4' ? 979 : 1000;
        }
        if (selectedBox === 'Vegetariansk') {
            total = selectedQuantity === '1-2' ? 679 : 979;
        } else if (selectedBox === 'Vegetariansk') {
            total = selectedQuantity === '3-4' ? 979 : 1000;
        }
        if (selectedBox === 'Sjømat') {
            total = selectedQuantity === '1-2' ? 879 : 1179;
        } else if (selectedBox === 'Sjømat') {
            total = selectedQuantity === '3-4' ? 1590: 1790;
        }
        if (selectedBox === 'Kjøtt og Fisk') {
            total = selectedQuantity === '1-2' ? 879 : 1179;
        } else if (selectedBox === 'Kjøtt og Fisk') {
            total = selectedQuantity === '3-4' ? 1590 : 1790;
        }
        if (selectedBox === 'Familiekasse (barnevennlig)') {
            total = selectedQuantity === '1-2' ? 779 : 1079;
        } else if (selectedBox === 'Familiekasse (barnevennlig)') {
            total = selectedQuantity === '3-4' ? 1590 : 1790;
        }

        totalCost.textContent = `Totalpris: ${total} kr`;
    });
});
