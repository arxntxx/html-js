//ATRIBUTOS
const header = document.createElement("header");
const headertitle = document.createElement("h1");
const nav = document.createElement("nav"); 
const ul = document.createElement("ul");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

const a1 = document.createElement("a"); 
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");

const destacadoSection = document.createElement("section");
const marcasSection = document.createElement("section");
const ofertasSection = document.createElement("section");
const contactoSection = document.createElement("section");

const  destacadoTitulo = document.createElement("h2");
const  marcasTitulo = document.createElement("h2");
const  ofertasTitulo = document.createElement("h2");
const contactoTitulo = document.createElement("h2");

const formulario = document.createElement("form");
const destacadosDiv = document.createElement("div");
const marcasDiv = document.createElement("div");
const ofertasDiv = document.createElement("div");

const footer = document.createElement("footer");
const footerText = document.createElement("p");

//TEXTO
headertitle.textContent = "IMPRESORAS 3D";
a1.textContent = "IMPRESORAS DESTACADAS";
a2.textContent = "MARCAS";
a3.textContent = "OFERTAS";
a4.textContent = "CONTACTO";

destacadoTitulo.textContent = "IMPRESORAS DESTACADAS";
marcasTitulo.textContent = "MARCAS";
ofertasTitulo.textContent = "OFERTAS";
contactoTitulo.textContent = "CONTACTO";

footerText.textContent = "2024 Impresoras 3D";


//ENLACES
a1.href = '#destacados';
a2.href = '#marcas';
a3.href = '#ofertas';
a4.href = '#contacto';

//ID
destacadoSection.setAttribute('id', 'destacados');
marcasSection.setAttribute('id','marcas');
ofertasSection.setAttribute('id', 'ofertas');
contactoSection.setAttribute('id', 'contacto');
formulario.setAttribute('id', 'formulario-contacto');

//CLASES
destacadosDiv.classList.add('producto');
marcasDiv.classList.add('marca');
ofertasDiv.classList.add('oferta');

//UNIONES
document.body.appendChild(header);
header.appendChild(headertitle);
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);

document.body.appendChild(destacadoSection);
destacadoSection.appendChild(destacadoTitulo);

document.body.appendChild(marcasSection);
marcasSection.appendChild(marcasTitulo);

document.body.appendChild(ofertasSection);
ofertasSection.appendChild(ofertasTitulo);
//ofertasSection.appendChild(ofertasDiv);

document.body.appendChild(contactoSection);
contactoSection.appendChild(contactoTitulo);
contactoSection.appendChild(formulario);

document.body.appendChild(footer);
footer.appendChild(footerText);




