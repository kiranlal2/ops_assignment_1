const galleryImages = document.querySelectorAll('.img-item img');
const modal = document.getElementById('sliderprops');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        openModal();
    });
});

function openModal() {
    modal.style.display = 'block';
    updateModalImage();
}

function updateModalImage() {
    modalImg.src = galleryImages[currentIndex].src;
    captionText.innerHTML = galleryImages[currentIndex].alt || 'Image ' + (currentIndex + 1);
}

function closeModal() {
    modal.style.display = 'none';
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateModalImage();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage();
}

closeBtn.onclick = closeModal;
prevBtn.onclick = showPrevImage;
nextBtn.onclick = showNextImage;

// Close modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}
