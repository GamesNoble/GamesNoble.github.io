function handleImageError(image) {
    image.onerror = null; 
    image.src = '/misc/images/placeholder.png';
}
