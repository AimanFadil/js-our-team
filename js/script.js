//MILESTONE 1
let membri = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & Ceo",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },

    {
        nome:"Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },
]

//MILESTONE 2
 for(let i = 0; i<=membri.length; i++){
    console.log(membri[i] );
    /* console.log(membri.nome)
    console.log(membri.ruolo)
    console.log(membri.foto) */
    //altrimenti
    /* for(key in membri){
        console.log(membri[key])
    } */
} 

//MILESTONE 3
let mostarAvideo = '';
 for (let i = 0; i < membri.length; i++) {
    mostarAvideo += `
        <tr>
            <td>${membri[i].nome}</td>
            <td>${membri[i].ruolo}</td>
            <td><img class="p-3"src="./img/${membri[i].foto}" alt="${membri[i].nome}" /></td>
        </tr>
    `;
 }

 document.getElementById('membri').innerHTML = mostarAvideo;

