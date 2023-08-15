// na osnovu podataka napravite tabelu:

// th: Ime, Prezime, DatumRodjenja, Godine, MestoRodjenja
// td: vasi podaci, npr: Omer, Curic, 01.01.2003, 20, Bolnica

const data = [
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
	{
		ime: "nikola",
		prezime: "glisovic",
		datumRodjenja: "1.1.1.1",
		godine: "stagod",
		mestoRodjenja: "bolnica",
	},
];

const btn = document.querySelector("#click");
const body = document.querySelector("body");
body.innerHTML += `<table id="tabela">
    <tr>
    <th>Ime</th>
    <th>Prezime</th>
    <th>DatumRodjenja</th>
    <th>Godine</th>
    <th>Mesto Rodjenja</th>
    </tr>
</table>`;

const tabela = document.getElementById("tabela");

console.log(tabela);

const bttn = document.querySelector("#click");
bttn.addEventListener("click", () => {
	data
		.map((element) => {
			// let tr = document.createElement("tr");
			// let td1 = document.createElement("td");
			// let td2 = document.createElement("td");
			// let td3 = document.createElement("td");
			// let td4 = document.createElement("td");
			// let td5 = document.createElement("td");

			// td1.innerHTML = element.ime;
			// td2.innerHTML = element.prezime;
			// td3.innerHTML = element.datumRodjenja;
			// td4.innerHTML = element.godine;
			// td5.innerHTML = element.mestoRodjenja;

			// tr.appendChild(td1);
			// tr.appendChild(td2);
			// tr.appendChild(td3);
			// tr.appendChild(td4);
			// tr.appendChild(td5);
			// tabela.appendChild(tr);

			tabela.innerHTML += `<tr>
		    <td>${element.ime}</td>
		    <td>${element.prezime}</td>
		    <td>${element.datumRodjenja}</td>
		    <td>${element.godine}</td>
		    <td>${element.mestoRodjenja}</td>
		    </tr>`;
		})
		.join("");
});

console.log(body.innerHTML);

// console.dir(table);
