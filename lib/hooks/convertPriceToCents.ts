export function convertPriceToCents(priceInDollars: string) {
    // Convert to float
    const price = parseFloat(priceInDollars);

    // Convert to cents
    const priceInCents = Math.round(price * 100);

    return priceInCents;
}
