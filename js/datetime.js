/**
 * Date and Time Display System
 * Actualiza la fecha y hora en tiempo real en el header
 */

/**
 * Update date and time in header
 */
function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    // Format: dd/mm/yyyy
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    dateElement.textContent = formattedDate;
    
    // Format: 24h hh:mm
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    timeElement.textContent = formattedTime;
}
