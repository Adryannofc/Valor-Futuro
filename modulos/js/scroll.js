

export function dinamiqueScroll() {
    console.log("teste")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                createCard("../assets/img/man-with-sales-woman-car-showroom-convertido-de-jpg.webp", "Consórcios", "Para automoveis, imoveis e serviços.");
                createCard("../assets/img/happy-customer-buying-brand-new-car-local-car-dealership-convertido-de-jpg.webp", "Seguros", "A sua blindagem patromonial com as coberturas certas");
                createCard("../assets/img/middle-age-hispanic-woman-using-laptop-holding-credit-card-home-convertido-de-jpg.webp", "Financiamento", "Financiamento com taxas imperdiveis");
            }
        })

    }, {})
    const container = document.querySelectorAll('.cards-container')
    container.forEach(el => observer.observe(el))
}
