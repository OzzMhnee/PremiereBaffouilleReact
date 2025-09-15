export const parsePrice = (priceString) => {
    return parseFloat(priceString.replace('€', '').replace(',', '.').trim());
};

export const sortCards = (cards, sortType) => {
    switch(sortType) {
        case 'price-asc':
            return [...cards].sort((a, b) => parsePrice(a.footer) - parsePrice(b.footer));
        case 'price-desc':
            return [...cards].sort((a, b) => parsePrice(b.footer) - parsePrice(a.footer));
        case 'title-asc':
            return [...cards].sort((a, b) => a.title.localeCompare(b.title));
        case 'title-desc':
            return [...cards].sort((a, b) => b.title.localeCompare(a.title));
        default:
            return cards;
    }
};


// [...cards] signifie qu'on crée une nouvelle copie du tableau cards avant de le trier.
// Cela évite de modifier le tableau original, ce qui est important en React pour éviter des effets inattendus.