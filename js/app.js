/* Importaciones para el funcinamientto de las ventanas modal */
import { addActive } from "./templatesG.js"
import { addMarcas } from "./templatesG.js"
import { addPeople } from "./templatesG.js"
import { addEstado } from "./templatesG.js"
import { addTipoPersona } from "./templatesG.js"
import { addTipoMovAct } from "./templatesG.js"
import { addTipoActivo } from "./templatesG.js"

// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item => {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();
		if (!this.classList.contains('active')) {
			allDropdown.forEach(i => {
				const aLink = i.parentElement.querySelector('a:first-child');
				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}
		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');
if (sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item => {
		item.textContent = '-'
	})
	allDropdown.forEach(item => {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item => {
		item.textContent = item.dataset.text;
	})
}
toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
	if (sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item => {
			item.textContent = '-'
		})
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		})
	}
})
sidebar.addEventListener('mouseleave', function () {
	if (this.classList.contains('hide')) {
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item => {
			item.textContent = '-'
		})
	}
})
sidebar.addEventListener('mouseenter', function () {
	if (this.classList.contains('hide')) {
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		})
	}
})
// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');
imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})

// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');
allMenu.forEach(item => {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');
	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
		men
	})
})
window.addEventListener('click', function (e) {
	if (e.target !== imgProfile) {
		if (e.target !== dropdownProfile) {
			if (dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}
	allMenu.forEach(item => {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');
		if (e.target !== icon) {
			if (e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})

// PROGRESSBAR
/* Inicio ADD DATA*/
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item => {
	item.style.setProperty('--value', item.dataset.value)
})
const listaItems = document.querySelectorAll('.side-dropdown li');
listaItems.forEach(item => {
	const a = item.querySelector('a');
	const id = a.getAttribute('id');
	a.addEventListener('click', function (event) {
		event.preventDefault();
		if (id === "add") {
			const dialogoHTML = addActive

			document.body.insertAdjacentHTML('beforeend', dialogoHTML);
			const dialogo = document.getElementById("dialogo");
			dialogo.showModal();
			const guardar = document.getElementById("guardar");
			guardar.addEventListener('click', function () {
				const datosAGuardar = {
					id: document.getElementById("idSerial").value,
					CodTransaccion: document.getElementById("idTransation").value,
					NFormulario: document.getElementById("Nform").value,
					idMarca: document.getElementById("idMarca").value,
					idCategoria: document.getElementById("idCategory").value,
					idTipo: document.getElementById("idTipe").value,
					ValorUnitario: document.getElementById("idValor").value,
					idProveedor: document.getElementById("idProveedor").value,
					serial: document.getElementById("idSerial").value,
					idEmpresaResponsable: document.getElementById("idEnterprise").value,
					idEstado: document.getElementById("idEstate").value
				};
				fetch('http://localhost:3000/Inventario%20Campuslands', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(datosAGuardar),
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('No se pudo realizar la solicitud al servidor JSON');
						}
						return response.json();
					})
					.then(data => {
						// Aquí puedes manejar la respuesta del servidor si lo deseas
						console.log('Datos guardados correctamente:', data);
						alert('Datos guardados correctamente');
						alert(idTrans);
					})
					.catch(error => {
						console.error('Error al guardar datos:', error);
						alert('Error al guardar datos');
					});

			});
			const btnCerrar = dialogo.querySelector("#btnCerrar");
			btnCerrar.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
			const btnCerrara = dialogo.querySelector(".btnCerrar");
			btnCerrara.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});


		}
		else if (id === "add_marca") {
			const dialogoHTML = addMarcas;
			document.body.insertAdjacentHTML('beforeend', dialogoHTML);
			const dialogo = document.getElementById("dialogo");
			dialogo.showModal();
			const guardar = document.getElementById("guardar");
			guardar.addEventListener('click', function () {
				const datosAGuardar = {
					id: document.getElementById("idMarca").value,
					Nit: document.getElementById("idMarca").value,
					NombreMarca: document.getElementById("Nform").value,
					Categoria: document.getElementById("idCategory").value,
					tipo: document.getElementById("idType").value,
					price: document.getElementById("idValor").value,
					proveedor: document.getElementById("idValor").value,
					idProveedor: document.getElementById("idProveedor").value,
					nombreProveedor: document.getElementById("idEnterprise").value
				};

				fetch('http://localhost:3000/Marcas', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(datosAGuardar),
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('No se pudo realizar la solicitud al servidor JSON');
						}
						return response.json();
					})
					.then(data => {
						// Aquí puedes manejar la respuesta del servidor si lo deseas
						console.log('Datos guardados correctamente:', data);
						alert('Datos guardados correctamente');
						alert(idTrans);
					})
					.catch(error => {
						console.error('Error al guardar datos:', error);
						alert('Error al guardar datos');
					});

			});
			const btnCerrar = dialogo.querySelector("#btnCerrar");
			btnCerrar.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
			const btnCerrara = dialogo.querySelector(".btnCerrar");
			btnCerrara.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
		}
		else if (id === "add_persona") {
			const dialogoHTML = addPeople;
			document.body.insertAdjacentHTML('beforeend', dialogoHTML);
			const dialogo = document.getElementById("dialogo");
			dialogo.showModal();
			const guardar = document.getElementById("guardar");
			guardar.addEventListener('click', function () {
				const datosAGuardar = {
					id: document.getElementById("idCc").value,
					CC: document.getElementById("idCc").value,
					Nombre: document.getElementById("nombreP").value,
					Tipo: document.getElementById("idTipoP").value,
					Estado: document.getElementById("idTipe").value,
					Numero: document.getElementById("idNumero").value,
					Ubicaion: document.getElementById("idUbicate").value,
				};
				fetch('http://localhost:3000/personas', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(datosAGuardar),
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('No se pudo realizar la solicitud al servidor JSON');
						}
						return response.json();
					})
					.then(data => {
						// Aquí puedes manejar la respuesta del servidor si lo deseas
						console.log('Datos guardados correctamente:', data);
						alert('Datos guardados correctamente');
						alert(idTrans);
					})
					.catch(error => {
						console.error('Error al guardar datos:', error);
						alert('Error al guardar datos');
					});

			});
			const btnCerrar = dialogo.querySelector("#btnCerrar");
			btnCerrar.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
			const btnCerrara = dialogo.querySelector(".btnCerrar");
			btnCerrara.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
		}
		else if (id === "add_estado") {
			const dialogoHTML = addEstado;
			document.body.insertAdjacentHTML('beforeend', dialogoHTML);
			const dialogo = document.getElementById("dialogo");
			dialogo.showModal();
			const guardar = document.getElementById("guardar");
			guardar.addEventListener('click', function () {
				const datosAGuardar = {
					id: document.getElementById("idState").value,
					NombreEstado: document.getElementById("newState").value,
				};
				fetch('http://localhost:3000/estado', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(datosAGuardar),
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('No se pudo realizar la solicitud al servidor JSON');
						}
						return response.json();
					})
					.then(data => {
						// Aquí puedes manejar la respuesta del servidor si lo deseas
						console.log('Datos guardados correctamente:', data);
						alert('Datos guardados correctamente');
						alert(idTrans);
					})
					.catch(error => {
						console.error('Error al guardar datos:', error);
						alert('Error al guardar datos');
					});

			});
			const btnCerrar = dialogo.querySelector("#btnCerrar");
			btnCerrar.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
			const btnCerrara = dialogo.querySelector(".btnCerrar");
			btnCerrara.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
		}
		else if (id === "add_tipoPersona") {
			const dialogoHTML = addTipoPersona;
			document.body.insertAdjacentHTML('beforeend', dialogoHTML);
			const dialogo = document.getElementById("dialogo");
			dialogo.showModal();
			const guardar = document.getElementById("guardar");
			guardar.addEventListener('click', function () {
				const datosAGuardar = {
					id: document.getElementById("idCc").value,
					tipoPersona: document.getElementById("idTypePeople").value,
					Cargo: document.getElementById("idTypeCargo").value,
					CC: document.getElementById("idCc").value
				};
				fetch('http://localhost:3000/tipoPersona', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(datosAGuardar),
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('No se pudo realizar la solicitud al servidor JSON');
						}
						return response.json();
					})
					.then(data => {
						// Aquí puedes manejar la respuesta del servidor si lo deseas
						console.log('Datos guardados correctamente:', data);
						alert('Datos guardados correctamente');
						alert(idTrans);
					})
					.catch(error => {
						console.error('Error al guardar datos:', error);
						alert('Error al guardar datos');
					});

			});
			const btnCerrar = dialogo.querySelector("#btnCerrar");
			btnCerrar.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
			const btnCerrara = dialogo.querySelector(".btnCerrar");
			btnCerrara.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
		}
		else if (id === "add_tipoMovAct") {
			const dialogoHTML = addTipoMovAct;
			document.body.insertAdjacentHTML('beforeend', dialogoHTML);
			const dialogo = document.getElementById("dialogo");
			dialogo.showModal();
			const guardar = document.getElementById("guardar");
			guardar.addEventListener('click', function () {
				const datosAGuardar = {
					id: document.getElementById("Nform").value,
					CodTransaccion: document.getElementById("idTransation").value,
					nFormulario: document.getElementById("Nform").value,
					idMarca: document.getElementById("idMarca").value,
					idCategoria: document.getElementById("idCategory").value,
					serial: document.getElementById("idSerial").value,
					inicio: document.getElementById("idInicio").value,
					fin: document.getElementById("idFinal").value,
					nitProveedor: document.getElementById("idProveedor").value,
					motivo: document.getElementById("idEstate").value
				};
				fetch('http://localhost:3000/tipoMovActivo', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(datosAGuardar),
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('No se pudo realizar la solicitud al servidor JSON');
						}
						return response.json();
					})
					.then(data => {
						// Aquí puedes manejar la respuesta del servidor si lo deseas
						console.log('Datos guardados correctamente:', data);
						alert('Datos guardados correctamente');
						alert(idTrans);
					})
					.catch(error => {
						console.error('Error al guardar datos:', error);
						alert('Error al guardar datos');
					});

			});
			const btnCerrar = dialogo.querySelector("#btnCerrar");
			btnCerrar.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
			const btnCerrara = dialogo.querySelector(".btnCerrar");
			btnCerrara.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
		}
		else if (id === "add_tipoActivo") {
			const dialogoHTML = addTipoActivo;
			document.body.insertAdjacentHTML('beforeend', dialogoHTML);
			const dialogo = document.getElementById("dialogo");
			dialogo.showModal();
			const guardar = document.getElementById("guardar");
			guardar.addEventListener('click', function () {
				const datosAGuardar = {
					id: document.getElementById("idSerial").value,
					CodTransaccion: document.getElementById("idTransation").value,
					NFormulario: document.getElementById("Nform").value,
					idMarca: document.getElementById("idMarca").value,
					idCategoria: document.getElementById("idCategory").value,
					idTipo: document.getElementById("idTipe").value,
					ValorUnitario: document.getElementById("idValor").value,
					idProveedor: document.getElementById("idProveedor").value,
					serial: document.getElementById("idSerial").value,
					idEmpresaResponsable: document.getElementById("idEnterprise").value,
					idEstado: document.getElementById("idEstate").value
				};
				fetch('http://localhost:3000/tipoActivo', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(datosAGuardar),
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('No se pudo realizar la solicitud al servidor JSON');
						}
						return response.json();
					})
					.then(data => {
						// Aquí puedes manejar la respuesta del servidor si lo deseas
						console.log('Datos guardados correctamente:', data);
						alert('Datos guardados correctamente');
						alert(idTrans);
					})
					.catch(error => {
						console.error('Error al guardar datos:', error);
						alert('Error al guardar datos');
					});
			});
			const btnCerrar = dialogo.querySelector("#btnCerrar");
			btnCerrar.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
			const btnCerrara = dialogo.querySelector(".btnCerrar");
			btnCerrara.addEventListener('click', function () {
				dialogo.close();
				dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
			});
		}
	});
});
/**Fin ADD DATA */


/*Inico De  Buscar */
const allProgress2 = document.querySelectorAll('main .card .progress');
allProgress2.forEach(item => {
	item.style.setProperty('--value', item.dataset.value)
})
const listaItems2 = document.querySelectorAll('.side-dropdown li');
listaItems2.forEach(item => {
	const a = item.querySelector('a');
	const ids = a.getAttribute('id');
	a.addEventListener('click', function (event) {
		event.preventDefault();
		if (ids === "search") {
			let valorBuscado = prompt("ingrese el id a buscar")  /*Id del producto abuscar */
			fetch('http://localhost:3000/Inventario%20Campuslands')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const dialogoHTML = `
						<dialog id="dialogo" class="dialogo">
							<section class="titleAdd">
								<h2> Buscar Producto <button id="btnCerrar">X</button></h2>
							</section>
							<div id="searchForm">   
								<input type="text" id="searchInput" placeholder="¿Qué producto busca?">
								<button id="searchEdit"><i class="fa-solid fa-magnifying-glass"></i></button>
							</div>
							<section class="infoE">
								<p>CodTransaccion: <span>${objetoEncontrado.CodTransaccion}</span></p>
								<p>NroFormulario:  <span>${objetoEncontrado.NFormulario}</span></p>
								<p>idMarca: <span>${objetoEncontrado.idMarca} </span></p>
								<p>idCategoria: <span> ${objetoEncontrado.idCategoria} </span> </p>
								<p>idTipo: <span> <span> ${objetoEncontrado.idTipo}</span></p>
								<p>Valor Unitario: <span>${objetoEncontrado.ValorUnitario}</span> </p>
								<p>idProveedor: <span> ${objetoEncontrado.idProveedor}</span></p>
								<p>Nro Serial: <span> ${objetoEncontrado.serial}</span> </p>
								<p>EmpresaResponsable: <span> ${objetoEncontrado.idEmpresaResponsable}</span> </p>
								<p>idEstado: <span>${objetoEncontrado["idEstado"]}</span> </p>
							</section>
							<button id="guardar" class="btnCerrar" >Aceptar</button>
						</dialog>
					`;
						document.body.insertAdjacentHTML('beforeend', dialogoHTML);
						const dialogo = document.getElementById("dialogo");
						dialogo.showModal();
						const btnCerrar = dialogo.querySelector("#btnCerrar");
						btnCerrar.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnCerrara = dialogo.querySelector(".btnCerrar");
						btnCerrara.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnSearchEdit = dialogo.querySelector("#searchEdit");
						btnSearchEdit.addEventListener('click', function () {
							alert("Hola");
						});
						console.log("Objeto encontrado:", objetoEncontrado);
					} else {
						console.log("No se encontró ningún objeto con el valor buscado en el ID.");
						/*AGREGAR UNA VENTAN DE ERROR*/
					}
				})
				.catch(error => console.error('Error al obtener los datos:', error));
		}
		else if (ids === "search_marca") {
			let valorBuscado = prompt("ingrese el id a buscar")  /*Id del producto abuscar */
			fetch('http://localhost:3000/Marcas')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const dialogoHTML = `
						<dialog id="dialogo" class="dialogo">
							<section class="titleAdd">
								<h2>Editar Producto <button id="btnCerrar">X</button></h2>
							</section>
							<div id="searchForm">   
								<input type="text" id="searchInput" placeholder="¿Qué producto busca?">
								<button id="searchEdit"><i class="fa-solid fa-magnifying-glass"></i></button>
							</div>
							<section class="infoE">
							<p>Nit: <span>${objetoEncontrado.Nit}</span></p>
							<p>Nombre Marca: <span> ${objetoEncontrado.NombreMarca} </span> </p>
							<p>idCategoria: <span> ${objetoEncontrado.Categoria} </span> </p>
							<p>idTipo: <span> ${objetoEncontrado.tipo} </span> </p>
							<p>Valor Unitario: <span> ${objetoEncontrado.price} </span> </p>
							<p>proveedor: <span> ${objetoEncontrado.proveedor} </span> </p>
							<p>idProveedor: <span> ${objetoEncontrado.proveedor} </span> </p>
							<p> Nombre del Proveedor: <span> ${objetoEncontrado.nombreProveedor} </span> </p>
							</section>
							<button id="guardar" class="btnCerrar" >Aceptar</button>
						</dialog>
					`;

						document.body.insertAdjacentHTML('beforeend', dialogoHTML);
						const dialogo = document.getElementById("dialogo");
						dialogo.showModal();
						const btnCerrar = dialogo.querySelector("#btnCerrar");
						btnCerrar.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnCerrara = dialogo.querySelector(".btnCerrar");
						btnCerrara.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnSearchEdit = dialogo.querySelector("#searchEdit");
						btnSearchEdit.addEventListener('click', function () {
							alert("Hola");
						});
						console.log("Objeto encontrado:", objetoEncontrado);
					} else {
						console.log("No se encontró ningún objeto con el valor buscado en el ID.");
						/*AGREGAR UNA VENTAN DE ERROR*/
					}
				})
		}
		else if (ids === "search_persona") {
			let valorBuscado = prompt("ingrese el id a buscar")  /*Id del producto abuscar */
			fetch('http://localhost:3000/personas')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const dialogoHTML = `
		<dialog id="dialogo" class="dialogo">
			<section class="titleAdd">
				<h2>Editar Producto <button id="btnCerrar">X</button></h2>
			</section>
			<div id="searchForm">   
				<input type="text" id="searchInput" placeholder="¿Qué producto busca?">
				<button id="searchEdit"><i class="fa-solid fa-magnifying-glass"></i></button>
			</div>
			<section class="infoE">
				<p>CC:   <span> ${objetoEncontrado.CC} </span> </p>
				<p>Nombre: <span>${objetoEncontrado.Nombre}</span> </p>
				<p>Tipo: <span> ${objetoEncontrado.Tipo} </span></p>$
				<p>Estado: <span> ${objetoEncontrado.Estado}</span></p>
				<p>Numero: <span>${objetoEncontrado.Numero}</span></p>
				<p>Ubicacion: <span>${objetoEncontrado.Ubicaion} </span></p>
			</section>
			<button id="guardar" class="btnCerrar" >Aceptar</button>
		</dialog>
	`;
						document.body.insertAdjacentHTML('beforeend', dialogoHTML);
						const dialogo = document.getElementById("dialogo");
						dialogo.showModal();
						const btnCerrar = dialogo.querySelector("#btnCerrar");
						btnCerrar.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnCerrara = dialogo.querySelector(".btnCerrar");
						btnCerrara.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnSearchEdit = dialogo.querySelector("#searchEdit");
						btnSearchEdit.addEventListener('click', function () {
							alert("Hola");
						});
						console.log("Objeto encontrado:", objetoEncontrado);
					} else {
						console.log("No se encontró ningún objeto con el valor buscado en el ID.");
						/*AGREGAR UNA VENTAN DE ERROR*/
					}
				})
		}
		else if (ids === "search_estado") {
			let valorBuscado = prompt("ingrese el id a buscar")  /*Id del producto abuscar */
			fetch('http://localhost:3000/estado')
				.then(response => response.json())
				.then(data => {

					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const dialogoHTML = `
			<dialog id="dialogo" class="dialogo">
			<section class="titleAdd">
				<h2>Editar Producto <button id="btnCerrar">X</button></h2>
			</section>
			<div id="searchForm">   
				<input type="text" id="searchInput" placeholder="¿Qué producto busca?">
				<button id="searchEdit"><i class="fa-solid fa-magnifying-glass"></i></button>
			</div>
			<section class="infoE">
			<p>id Estado${objetoEncontrado} </p> 
			<p>Estado  ${objetoEncontrado}</p>
			</section>
			<button id="guardar" class="btnCerrar" >Aceptar</button>
		</dialog>
	`;
						document.body.insertAdjacentHTML('beforeend', dialogoHTML);
						const dialogo = document.getElementById("dialogo");
						dialogo.showModal();
						const btnCerrar = dialogo.querySelector("#btnCerrar");
						btnCerrar.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnCerrara = dialogo.querySelector(".btnCerrar");
						btnCerrara.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnSearchEdit = dialogo.querySelector("#searchEdit");
						btnSearchEdit.addEventListener('click', function () {
							alert("Hola");
						});
						console.log("Objeto encontrado:", objetoEncontrado);
					} else {
						console.log("No se encontró ningún objeto con el valor buscado en el ID.");
						/*AGREGAR UNA VENTAN DE ERROR*/
					}
				})
		}
		else if (ids === "search_tipoPersona") {
			let valorBuscado = prompt("ingrese el id a buscar")  /*Id del producto abuscar */
			fetch('http://localhost:3000/tipoPersona')
				.then(response => response.json())
				.then(data => {

					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const dialogoHTML = `
		<dialog id="dialogo" class="dialogo">
			<section class="titleAdd">
				<h2>Editar Producto <button id="btnCerrar">X</button></h2>
			</section>
			<form id="searchForm">
				<input type="text" id="searchInput" placeholder="Que producto Busca....">
				<button type="submit" id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
			</form> 
			<section class="infoBorar">
				<div>
				<p>Tipo de persona</p>${objetoEncontrado.tipoPersona}
				<p>Cargo</p>${objetoEncontrado.Cargo}
				<p>CC</p>${objetoEncontrado.CC}
				</div>
				<div><button class="btnBorrar" id="btnBorrar">Borrar</button></div>
			</section>
			<button id="guardar" class="btnCerrar">Aceptar</button>
		</dialog>
	`;
						document.body.insertAdjacentHTML('beforeend', dialogoHTML);
						const dialogo = document.getElementById("dialogo");
						dialogo.showModal();
						const btnCerrar = dialogo.querySelector("#btnCerrar");
						btnCerrar.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnCerrara = dialogo.querySelector(".btnCerrar");
						btnCerrara.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnSearchEdit = dialogo.querySelector("#searchEdit");
						btnSearchEdit.addEventListener('click', function () {
							alert("Hola");
						});
						console.log("Objeto encontrado:", objetoEncontrado);
					} else {
						console.log("No se encontró ningún objeto con el valor buscado en el ID.");
						/*AGREGAR UNA VENTAN DE ERROR*/
					}
				})
		}
		else if (ids === "search_tipoMovAct") {
			let valorBuscado = prompt("ingrese el id a buscar")  /*Id del producto abuscar */
			fetch('http://localhost:3000/tipoMovActivo')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const dialogoHTML = `
		<dialog id="dialogo" class="dialogo">
			<section class="titleAdd">
				<h2>Editar Producto <button id="btnCerrar">X</button></h2>
			</section>
			<form id="searchForm">
				<input type="text" id="searchInput" placeholder="Que producto Busca....">
				<button type="submit" id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
			</form> 
			<section class="infoBorar">
				<div>
				<p>CodTransaccion</p>${objetoEncontrado.CodTransaccion},
				<p>nFormulario</p>${objetoEncontrado.nFormulario},
				<p>idMarca</p>${objetoEncontrado.idMarca},
				<p>idCategoria</p>${objetoEncontrado.idCategoria},
				<p>serial</p>${objetoEncontrado.serial},
				<piniciop>${objetoEncontrado.inicio},
				<p>fin</p>${objetoEncontrado.fin},
				<p>nitProveedor</p>${objetoEncontrado.nitProveedor},
				<p>motivo</p>${objetoEncontrado.motivo}
				</div>
				<div><button class="btnBorrar" id="btnBorrar">Borrar</button></div>
			</section>
			<button id="guardar" class="btnCerrar">Aceptar</button>
		</dialog>
	`;
						document.body.insertAdjacentHTML('beforeend', dialogoHTML);
						const dialogo = document.getElementById("dialogo");
						dialogo.showModal();
						const btnCerrar = dialogo.querySelector("#btnCerrar");
						btnCerrar.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnCerrara = dialogo.querySelector(".btnCerrar");
						btnCerrara.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnSearchEdit = dialogo.querySelector("#searchEdit");
						btnSearchEdit.addEventListener('click', function () {
							alert("Hola");
						});
						console.log("Objeto encontrado:", objetoEncontrado);
					} else {
						console.log("No se encontró ningún objeto con el valor buscado en el ID.");
						/*AGREGAR UNA VENTAN DE ERROR*/
					}
				})
		}
		else if (ids === "search_tipoActivo") {
			var valorBuscado = prompt("ingrese el id a buscar")  /*Id del producto abuscar */
			fetch('http://localhost:3000/tipoActivo')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const dialogoHTML = `
		<dialog id="dialogo" class="dialogo">
			<section class="titleAdd">
				<h2>Editar Producto <button id="btnCerrar">X</button></h2>
			</section>
			<form id="searchForm">
				<input type="text" id="searchInput" placeholder="Que producto Busca....">
				<button type="submit" id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
			</form> 
			<section class="infoBorar">
				<div>
				<p>CodTransaccion</p> ${objetoEncontrado.CodTransaccion},
				<p>NFormulario</p> ${objetoEncontrado.NFormulario},
				<p>idMarca</p> ${objetoEncontrado.idMarca},
				<p>idCategoria</p> ${objetoEncontrado.idCategoria},
				<p>idTipo</p> ${objetoEncontrado.idTipo},
				<p>ValorUnitario</p> ${objetoEncontrado.ValorUnitario},
				<p>idProveedor</p> ${objetoEncontrado.idProveedor},
				<p>serial</p> ${objetoEncontrado.serial},
				<p>idEmpresaResponsable</p> ${objetoEncontrado.idEmpresaResponsable},
				<p>idEstado</p> ${objetoEncontrado.idEstado},
				</div>
				<div><button class="btnBorrar" id="btnBorrar">Borrar</button></div>
			</section>
			<button id="guardar" class="btnCerrar">Aceptar</button>
		</dialog>
	`;
						document.body.insertAdjacentHTML('beforeend', dialogoHTML);
						const dialogo = document.getElementById("dialogo");
						dialogo.showModal();
						const btnCerrar = dialogo.querySelector("#btnCerrar");
						btnCerrar.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnCerrara = dialogo.querySelector(".btnCerrar");
						btnCerrara.addEventListener('click', function () {
							dialogo.close();
							dialogo.remove();
						});
						const btnSearchEdit = dialogo.querySelector("#searchEdit");
						btnSearchEdit.addEventListener('click', function () {
							alert("Hola");
						});
						console.log("Objeto encontrado:", objetoEncontrado);
					} else {
						console.log("No se encontró ningún objeto con el valor buscado en el ID.");
						/*AGREGAR UNA VENTAN DE ERROR*/
					}
				})
		}
	});
});
/*Fin De Buscar */



















// const searchInput = document.getElementById('searchInput');
// let products = []; // Array para almacenar los productos


// fetch('./../data/campusData.json')
// 	.then(response => response.json())
// 	.then(data => {
// 		products = data; // Almacenar los productos en el array products
// 	})
// 	.catch(error => {
// 		console.error('Error al cargar los productos:', error);
// 	});

// searchInput.addEventListener('input', function(event) {
// 	const searchTerm = event.target.value.toLowerCase().trim();

// 	const filteredProducts = products.filter(product => {
// 		return product.name.toLowerCase().includes(searchTerm);
// 	});
// });

// function displayFilteredProducts(filteredProducts) {
// 	const dialogo = document.getElementById('dialogo'); // Obtener la referencia al diálogo

// 	// Limpiar el contenido existente dentro del diálogo
// 	const infoE = dialogo.querySelector('.infoE');
// 	infoE.innerHTML = '';

// 	// Construir y agregar los elementos de producto al diálogo
// 	filteredProducts.forEach(product => {
// 		const productElement = document.createElement('div');
// 		productElement.textContent = `${product.name} - $${product.price}`;
// 		infoE.appendChild(productElement);
// 	});
// }

