export const convertPTDateToDateObj = (date: string): Date | null => {
    if (!date) return null;

    const parts = date.split('/');
    if (parts.length !== 3) return null;

    const [day, month, year] = parts.map(Number);
    if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

    const dateObj = new Date(year, month - 1, day);

    if (dateObj.getFullYear() !== year ||
        dateObj.getMonth() !== month - 1 ||
        dateObj.getDate() !== day) {
        return null;
    }

    return dateObj;
}