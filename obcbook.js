<!-- WalKemulan ver 060625 -->        
  <script>
        let map, directionsService, directionsRenderer;
        let startMarker, endMarker;
        let startLocation, endLocation;
        let geocoder;
        let distanceService;
        let fare;
        let geocodeTimeout; // Untuk menangani debounce

        function initMap() {
            // Inisialisasi peta dengan pusat default
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11,
                center: { lat: -8.569986,  lng: 115.192680 },  // Lokasi default (misal: Dalung)
            });

            directionsService = new google.maps.DirectionsService();
            directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            geocoder = new google.maps.Geocoder();
            distanceService = new google.maps.DistanceMatrixService();

            // Menambahkan event listener untuk klik pada peta
            map.addListener('click', function(event) {
                placeMarker(event.latLng);
            });

            // Menambahkan event listener pada input manual untuk deteksi lokasi
            document.getElementById('start-input').addEventListener('input', function() {
                debounceGeocode('start-input', 'start-location');
            });

            document.getElementById('end-input').addEventListener('input', function() {
                debounceGeocode('end-input', 'end-location');
            });
        }

        function placeMarker(location) {
            // Jika marker awal belum ada, buat marker untuk lokasi awal
            if (!startMarker) {
                startMarker = new google.maps.Marker({
                    position: location,
                    map: map,
                    label: 'A',
                    draggable: true
                });
                startLocation = location;
                document.getElementById('start-location').textContent = `${startLocation.lat().toFixed(6)}, ${startLocation.lng().toFixed(6)}`;
            } 
            // Jika marker akhir belum ada, buat marker untuk lokasi tujuan
            else if (!endMarker) {
                endMarker = new google.maps.Marker({
                    position: location,
                    map: map,
                    label: 'B',
                    draggable: true
                });
                endLocation = location;
                document.getElementById('end-location').textContent = `${endLocation.lat().toFixed(6)}, ${endLocation.lng().toFixed(6)}`;
                
                // Hitung jarak, tarif, dan tampilkan lintasan setelah kedua lokasi dipilih
                calculateDistanceAndFare();
                displayRoute(startLocation, endLocation);
            }
        }
			//ngawitin: by Yan! atur jeda input lokasi manual
   function debounceGeocode(inputId, locationId) {
        clearTimeout(geocodeTimeout); // Hapus timeout sebelumnya jika ada

        geocodeTimeout = setTimeout(() => {
            console.log(`Melakukan geocode untuk: ${inputId}`);
            geocodeLocation(inputId, locationId);
        }, 5000); // Jeda 5 detik sebelum geocode dijalankan
    }
			//pamuput: by Yan! atur jeda input lokasi manual  
    
        function resetLocations() {
            // Menghapus marker dan lokasi yang dipilih
            if (startMarker) {
                startMarker.setMap(null);
                startMarker = null;
                startLocation = null;
                document.getElementById('start-location').textContent = "-";
            }
            if (endMarker) {
                endMarker.setMap(null);
                endMarker = null;
                endLocation = null;
                document.getElementById('end-location').textContent = "-";
            }

            // Reset informasi tarif dan jarak
            document.getElementById('distance').textContent = "-";
            document.getElementById('fare').textContent = "-";

            // Hapus lintasan yang sudah digambar
            directionsRenderer.setDirections({ routes: [] });

            // Reset input manual
            document.getElementById('start-input').value = '';
            document.getElementById('end-input').value = '';
        }

function calculateDistanceAndFare() {
    if (!startLocation || !endLocation) {
        return;
    }

    // Mendapatkan waktu saat ini (jam dan menit)
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Mengatur tarif dasar dan tarif per km
    let baseFare = 4765;  // Tarif dasar dalam Rp
    let farePerKm = 2625;  // Tarif per km dalam Rp

    // Menentukan apakah sekarang adalah jam sibuk (busy time)
    if ((currentHour >= 7 && currentHour < 9) || (currentHour >= 17 && currentHour < 19)) {
        // Jika dalam jam sibuk, naikkan tarif dasar dan tarif per km
        baseFare = baseFare * 1.3; // Mengalikan tarif dasar dengan faktor 1.3
        farePerKm = farePerKm * 1.2; // Mengalikan tarif per km dengan faktor 1.2
    }

    // Menghitung jarak antara lokasi awal dan tujuan menggunakan DistanceMatrixService
    distanceService.getDistanceMatrix({
        origins: [startLocation],
        destinations: [endLocation],
        travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) => {
        if (status === google.maps.DistanceMatrixStatus.OK) {
            const distance = response.rows[0].elements[0].distance.value / 1000;  // Jarak dalam km
            const duration = response.rows[0].elements[0].duration.text;  // Durasi perjalanan

            // Update jarak di halaman (tetap dalam format desimal)
            document.getElementById('distance').textContent = distance.toFixed(2);  // Menampilkan 2 angka desimal

            // Menghitung total tarif berdasarkan jarak dan tarif dasar
            fare = baseFare + (farePerKm * distance);  // Total tarif

            // Pembulatan total tarif ke angka bulat (tanpa sen)
            fare = Math.round(fare);

            // Format harga dengan pembulatan dan tanpa sen
            const formattedFare = formatCurrency(fare);
          
			// Pembulatan total tarif ke ratusan terdekat
			fare = Math.round(fare / 100) * 100;
          
            // Update tarif di halaman
            document.getElementById('fare').textContent = formattedFare;
        } else {
            alert("Tidak dapat menghitung jarak. Coba lagi.");
        }
    });
}

function formatCurrency(amount) {
    // Format angka dengan pemisah ribuan
    return "Rp " + amount.toLocaleString('id-ID') + ",-";
}

function displayRoute(start, end) {
    // Membuat rute dengan DirectionsService
    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (response, status) => {
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

            // Mengambil koordinat titik awal dan tujuan
            const startLatLng = `${startLocation.lat().toFixed(6)},${startLocation.lng().toFixed(6)}`;
            const endLatLng = `${endLocation.lat().toFixed(6)},${endLocation.lng().toFixed(6)}`;

            // Membaca nama pemesan
            const customerName = document.getElementById('customer-name').value;
      // Cek apakah nama pemesan sudah diisi
    if (!customerName) {
        alert("Nama pemesan wajib diisi!");
        return; // Jika nama kosong, hentikan proses
    }

   // Membaca tanggal pemesanan
    const orderDate = document.getElementById('order-date').value;
    // Membaca waktu pemesanan
    const orderTime = document.getElementById('order-time').value;

    // Jika tanggal atau waktu tidak diisi, gunakan tanggal dan waktu saat ini
    const currentDate = new Date();
    const displayDate = orderDate ? orderDate : currentDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
    const displayTime = orderTime ? orderTime : currentDate.toTimeString().split(' ')[0].slice(0, 5); // Format HH:MM

    // Gabungkan tanggal dan waktu menjadi satu string
    const fullDateTime = `${displayDate} :: ${displayTime}`;

            // Membuat URL Google Maps dengan titik awal dan tujuan
            const googleMapsUrlStart = `https://www.google.com/maps?q=${startLatLng}`;
            const googleMapsUrlEnd = `https://www.google.com/maps?q=${endLatLng}`;

// Fungsi substitusi angka untuk penyamaran tarif
function encodeFare(fare) {
    const key = { '0': 'X', '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F', '7': 'G', '8': 'H', '9': 'I' };
    return fare.toString().split('').map(digit => key[digit] || digit).join('');
}

// Fungsi untuk mendekripsi tarif jika diperlukan
function decodeFare(encodedFare) {
    const reverseKey = { 'X': '0', 'A': '1', 'B': '2', 'C': '3', 'D': '4', 'E': '5', 'F': '6', 'G': '7', 'H': '8', 'I': '9' };
    return encodedFare.split('').map(char => reverseKey[char] || char).join('');
}

// Contoh penggunaan
const encodedFare = encodeFare(fare); // Enkripsi

// Membuat pesan WhatsApp
const message = `*Pemesanan Transportasi*\n*Ojek Bali Murah*\n\nNama Pemesan: *${customerName}*\nTanggal Pemesanan: *${fullDateTime}*\nTitik Awal Penjemputan:\n${googleMapsUrlStart}\nTitik Tujuan:\n${googleMapsUrlEnd}\nTarif Total: *${formatCurrency(fare)}*\nCode Booking: *${encodedFare}* --`;

            // Meng-encode pesan agar bisa dikirimkan dengan benar melalui URL
            const encodedMessage = encodeURIComponent(message);

            // Membuat URL WhatsApp untuk berbagi pesan
            const whatsappUrl = `https://wa.me/6281339339147?text=${encodedMessage}`;

            // Membuka WhatsApp di tab baru dengan pesan yang telah di-encode
            window.open(whatsappUrl, '_blank');
        }

        // Fungsi untuk menangani debounce input lokasi
        function debounceGeocode(inputId, locationId) {
            clearTimeout(geocodeTimeout);
            geocodeTimeout = setTimeout(() => {
                geocodeLocation(inputId, locationId);
            }, 800); // 800ms delay untuk menunggu sampai pengguna berhenti mengetik
        }

        function geocodeLocation(inputId, locationId) {
            const address = document.getElementById(inputId).value;
            if (address === "") return;

            geocoder.geocode({ address: address }, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    const location = results[0].geometry.location;
                    if (inputId === "start-input") {
                        if (startMarker) startMarker.setMap(null);  // Hapus marker lama
                        startMarker = new google.maps.Marker({
                            position: location,
                            map: map,
                            label: 'A'
                        });
                        startLocation = location;
                        document.getElementById(locationId).textContent = `${location.lat().toFixed(6)}, ${location.lng().toFixed(6)}`;
                    } else if (inputId === "end-input") {
                        if (endMarker) endMarker.setMap(null);  // Hapus marker lama
                        endMarker = new google.maps.Marker({
                            position: location,
                            map: map,
                            label: 'B'
                        });
                        endLocation = location;
                        document.getElementById(locationId).textContent = `${location.lat().toFixed(6)}, ${location.lng().toFixed(6)}`;
                    }
                    // Hitung jarak dan tarif setelah lokasi ditemukan
                    if (startLocation && endLocation) {
                        calculateDistanceAndFare();
                        displayRoute(startLocation, endLocation);
                    }
                } else {
                    alert("Lokasi tidak ditemukan. Coba lagi.");
                }
            });
        }

        function detectLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    if (startMarker) startMarker.setMap(null);  // Hapus marker lama
                    startMarker = new google.maps.Marker({
                        position: userLocation,
                        map: map,
                        label: 'A'
                    });
                    startLocation = userLocation;
                    document.getElementById('start-location').textContent = `${userLocation.lat().toFixed(6)}, ${userLocation.lng().toFixed(6)}`;
                    map.setCenter(userLocation);
                }, function() {
                    alert("Gagal mendeteksi lokasi.");
                });
            } else {
                alert("Geolokasi tidak didukung oleh browser ini.");
            }
        }
    </script>
<!-- HirKemulan --> 
