// ini javascript


document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
     // Mencegah pengiriman form

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value;
    
    // Validasi sederhana
    if (!name || !date || !gender || !message) {
        alert('Semua kolom harus diisi!');
        return;
    }
    
    // Menampilkan hasil
    document.getElementById('output-name').innerText = name;
    document.getElementById('output-date').innerText = date;
    document.getElementById('output-gender').innerText = gender.value;
    document.getElementById('output-message').innerText = message;
    
    // Reset form setelah submit
    document.getElementById('message-form').reset();
});