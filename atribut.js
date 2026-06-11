document.getElementById('thanksBtn').addEventListener('click', function(e) {
    // Mengubah teks tombol setelah diklik
    this.innerText = "You're Awesome! ❤️";
    this.style.backgroundColor = "#ff527b";
    
    // Membuat efek konfeti sederhana di sekitar tombol
    for (let i = 0; i < 30; i++) {
        createConfetti(e.clientX, e.clientY);
    }
});

function createConfetti(x, y) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);

    // Menentukan arah acak untuk ledakan konfeti
    const xMove = (Math.random() - 0.5) * 300;
    const yMove = (Math.random() - 0.5) * 300 - 100; // cenderung agak ke atas dulu

    // Warna acak untuk konfeti
    const colors = ['#fb6f92', '#ffb3c6', '#ff85a1', '#ffe5ec', '#ffc2d1'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Mengatur posisi awal konfeti sesuai klik mouse
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;

    // Mengirim variabel kustom ke CSS untuk animasi
    confetti.style.setProperty('--x', `${xMove}px`);
    confetti.style.setProperty('--y', `${yMove}px`);

    // Hapus elemen setelah animasi selesai agar tidak memenuhi memori
    setTimeout(() => {
        confetti.remove();
    }, 1500);
}