function showNotification() {
    // Periksa apakah browser mendukung API Notifikasi
    if ('Notification' in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                // Tampilkan notifikasi
                var notification = new Notification('Notifikasi', {
                    body: 'Ini adalah contoh notifikasi.',
                    icon: 'solat.jpeg'
                });
            }
        });
    } else {
        alert('Browser tidak mendukung Notifikasi.');
    }
}

document.getElementById('tombol').addEventListener('click', showNotification);
