// ============================================
// WISATA AIR TERJUN KALIORANG - SCRIPT.JS
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // === TOAST NOTIFIKASI ===
    const toast = document.getElementById('toast');
    if (toast) {
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => toast.classList.remove('show'), 4100);

        const closeBtn = toast.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => toast.classList.remove('show'));
        }
    }

    // === LIGHTBOX - foto/video membesar saat diklik ===
    const lightbox      = document.getElementById('lightbox');
    const lightboxImg   = document.getElementById('lightboxImg');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const lightboxVideoSrc = document.getElementById('lightboxVideoSrc');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightbox) {

        // Klik setiap card
        document.querySelectorAll('.card').forEach(function (card) {

            card.style.cursor = 'pointer';

            card.addEventListener('click', function () {
                const img   = card.querySelector('img');
                const video = card.querySelector('video source') || card.querySelector('video');

                // Reset
                lightboxImg.style.display   = 'none';
                lightboxVideo.style.display = 'none';
                lightboxVideo.pause();

                if (img) {
                    lightboxImg.src         = img.src;
                    lightboxImg.style.display = 'block';
                } else if (video) {
                    const src = video.tagName === 'SOURCE' ? video.src : video.querySelector('source').src;
                    lightboxVideoSrc.src        = src;
                    lightboxVideo.load();
                    lightboxVideo.style.display = 'block';
                    lightboxVideo.play();
                }

                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        // Tutup lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            lightboxVideo.pause();
            lightboxImg.src = '';
            document.body.style.overflow = '';
        }

        lightboxClose.addEventListener('click', closeLightbox);

        // Klik di luar gambar = tutup
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });

        // Tekan ESC = tutup
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }

});
