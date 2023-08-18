export function getNumberWithComa(number) {
    if (number > 999999) {
        const mils = Math.floor(number/1000000);
        const rest = number%1000000;
        return `${mils},${(rest/1000).toString().padStart(7, '0')
        .replace('.', ',')}`
    };
    return (number/1000).toString().replace('.', ',')
};