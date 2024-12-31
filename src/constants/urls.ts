const currentDate = new Date();
const currentMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;

export const CALENDLY_URL = `https://calendly.com/diogonascii/aula-de-matematica-online-1-hora?back=1&month=${currentMonth}`;