let map, directionsService, directionsRenderer;
let startMarker, endMarker;
let startLocation, endLocation;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: -8.569986, lng: 115.192680 },
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    map.addListener('click', function(event) {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {
    if (!startMarker) {
        startMarker = new google.maps.Marker({
            position: location,
            map: map,
            label: 'A',
            draggable: true
        });
        startLocation = location;
        document.getElementById('start-location').textContent = `${startLocation.lat().toFixed(6)}, ${startLocation.lng().toFixed(6)}`;
    } else if (!endMarker) {
        endMarker = new google.maps.Marker({
            position: location,
            map: map,
            label: 'B',
            draggable: true
        });
        endLocation = location;
        document.getElementById('end-location').textContent = `${endLocation.lat().toFixed(6)}, ${endLocation.lng().toFixed(6)}`;
        calculateDistanceAndFare();
        displayRoute(startLocation, endLocation);
    }
}

function resetLocations() {
    if (startMarker) startMarker.setMap(null);
    if (endMarker) endMarker.setMap(null);
    startLocation = endLocation = null;
    document.getElementById('start-location').textContent = '-';
    document.getElementById('end-location').textContent = '-';
    document.getElementById('distance').textContent = '-';
    document.getElementById('fare').textContent = '-';
    directionsRenderer.setDirections({ routes: [] });
}

function calculateDistanceAndFare() {
    if (!startLocation || !endLocation) return;

    const distanceService = new google.maps.DistanceMatrixService();
    distanceService.getDistanceMatrix({
        origins: [startLocation],
        destinations: [endLocation],
        travelMode: google.maps.TravelMode.DRIVING,
    }, function(response, status) {
        if (status === google.maps.DistanceMatrixStatus.OK) {
            const distance = response.rows[0].elements[0].distance.value / 1000;
            document.getElementById('distance').textContent = distance.toFixed(2);
            calculateFare(distance);
        } else {
            alert("Tidak dapat menghitung jarak.");
        }
    });
}

function calculateFare(distance) {
    const baseFare = 4765;
    const farePerKm = 2625;
    const fare = baseFare + (farePerKm * distance);
    document.getElementById('fare').textContent = formatCurrency(fare);
}

function formatCurrency(amount) {
    return "Rp " + amount.toLocaleString('id-ID') + ",-";
}

function displayRoute(start, end) {
    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);
        } else {
            alert("Gagal mendapatkan rute.");
        }
    });
}

function bookRide() {
    if (!startLocation || !endLocation) {
        alert("Harap pilih kedua lokasi!");
        return;
    }

    const startLatLng = `${startLocation.lat().toFixed(6)},${startLocation.lng().toFixed(6)}`;
    const endLatLng = `${endLocation.lat().toFixed(6)},${endLocation.lng().toFixed(6)}`;
    const customerName = document.getElementById('customer-name').value;

    if (!customerName) {
        alert("Nama pemesan wajib diisi!");
        return;
    }

    const orderDate = document.getElementById('order-date').value || new Date().toISOString().split('T')[0];
    const orderTime = document.getElementById('order-time').value || new Date().toTimeString().split(' ')[0].slice(0, 5);

    const fullDateTime = `${orderDate} ${orderTime}`;
    const message = `Pemesanan Transportasi\n\nNama Pemesan: ${customerName}\nTanggal Pemesanan: ${fullDateTime}\nTitik Awal: ${startLatLng}\nTitik Tujuan: ${endLatLng}\nTarif Total: ${formatCurrency(fare)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281339339147?text=${encoded
