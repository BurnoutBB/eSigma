function updateDateTime() {
    const now = new Date();

    const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate().toString().padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const dateTimeString = `Dziś jest ${dayOfWeek} <br> ${day} ${month} ${year}. Godzina: ${hours}:${minutes}:${seconds}`;

    document.getElementById('datetime').textContent = dateTimeString;
}

// Update the date and time immediately, then every second
updateDateTime();
setInterval(updateDateTime, 1000);
