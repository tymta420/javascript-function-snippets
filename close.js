const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';