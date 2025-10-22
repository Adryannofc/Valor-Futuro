export function createCard(img,titulo,descricao,button)
{
    const container = document.querySelector('.cards-container')
    const card = document.createElement('div')
    card.classList.add('card')

    
    const img = document.createElement('img');
    img.classList.add('card-img'); 
    img.src = img;
    img.alt = '';

    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = titulo;

    const p = document.createElement('p');
    p.classList.add('card-p')
    p.textContent = descricao;

    const button = document.createElement('button');
    button.classList.add('card-button');
    button.textContent = 'Saiba mais'

    container.appendChild(card);





}



//  <div class="cards-container">
//             <div class="card">
//                 <img src="../assets/img/man-with-sales-woman-car-showroom-convertido-de-jpg.webp" alt="Consórcios">
//                 <h3>Consórcios</h3>
//                 <p>Para automoveis, imoveis e serviços.</p>
//                 <button>Saiba mais</button>
//             </div>