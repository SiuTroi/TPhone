const CURRENCY_STYLE = new Intl.NumberFormat('it-IT', {
    style: "currency",
    currency: "VND"
})

export function fortmatCurrency(number) {
    return CURRENCY_STYLE.format(number)
}