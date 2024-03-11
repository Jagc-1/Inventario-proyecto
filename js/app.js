/* Importaciones para el funcinamiento de las ventanas modal */
import { addActive } from "./templatesG.js"
import { addMarcas } from "./templatesG.js"
import { addPeople } from "./templatesG.js"
import { addEstado } from "./templatesG.js"
import { addTipoPersona } from "./templatesG.js"
import { addTipoMovAct } from "./templatesG.js"
import { addTipoActivo } from "./templatesG.js"
import { addAsignacion } from "./templatesG.js"
// SIDEBAR DROPDOWN
document.body.innerHTML += ` 
<section id="sidebar">
		<a href="#" class="brand"><img class="logo" src="./images/logo-campus.png" alt="Logo"></i> CampusLands </a>
		<ul class="side-menu">
			<li id="active" data-accion="activos">
				<a href="#" class="active" ><i class="fa-solid fa-chart-line icon"></i> Activos <i class="fa-solid fa-angle-right  icon-right"></i></a> 
				<ul class="side-dropdown">
					<li><a id="add" href=""> Agregar</a></li>
					<li><a id="edit" href="">Editar</a></li>
					<li><a id="delete" href=""> Eliminar </a></li>
					<li><a id="search" href=""> Buscar </a></li>
				</ul>
			</li>
			<li id="marca"  data-accion="marcas">
				<a href="#" class="active" ><i class="fa-regular fa-window-maximize icon"></i> Marcas <i class="fa-solid fa-angle-right  icon-right"></i></a> 
				<ul class="side-dropdown">
					<li><a id="add_marca" href=""> Agregar</a></li>
					<li><a id="edit_marca" href="">Editar</a></li>
					<li><a id="delete_marca" href=""> Eliminar </a></li>
					<li><a id="search_marca" href=""> Buscar </a></li>
				</ul>
			</li>
			<li  data-accion="persona">
				<a  href="#" class="active" ><i class="fa-solid fa-user icon"></i> Persona <i class="fa-solid fa-angle-right  icon-right"></i></a> 
				<ul class="side-dropdown">
					<li><a id="add_persona" href=""> Agregar</a></li>
					<li><a id="edit_persona" href="">Editar</a></li>
					<li><a id="delete_persona" href=""> Eliminar </a></li>
					<li><a id="search_persona" href=""> Buscar </a></li>
				</ul>
			</li>
			<li  data-accion="estado">
				<a href="#" class="active"  ><i class="fa-solid fa-screwdriver-wrench icon"></i> Estado <i class="fa-solid fa-angle-right  icon-right"></i></a> 
				<ul class="side-dropdown">
					<li><a id="add_estado" href=""> Agregar</a></li>
					<li><a id="edit_estado" href="">Editar</a></li>
					<li><a id="delete_estado" href=""> Eliminar </a></li>
					<li><a id="search_estado" href=""> Buscar </a></li>
				</ul>
			</li>
			<li   data-accion="tipoPersona">
				<a href="#" class="active" ><i class="fa-solid fa-user-secret icon"></i> TipoPersona <i class="fa-solid fa-angle-right  icon-right"></i></a> 
				<ul class="side-dropdown">
					<li><a id="add_tipoPersona" href=""> Agregar</a></li>
					<li><a id="edit_tipoPersona" href="">Editar</a></li>
					<li><a id="delete_tipoPersona" href=""> Eliminar </a></li>
					<li><a id="search_tipoPersona" href=""> Buscar </a></li>
				</ul>
			</li>
			<li  data-accion="tipoMovAct">
				<a href="#" class="active"><i class="fa-solid fa-laptop icon"></i> TipoMovAct <i class="fa-solid fa-angle-right  icon-right"></i></a> 
				<ul class="side-dropdown">
					<li><a id="add_tipoMovAct" href=""> Agregar</a></li>
					<li><a id="edit_tipoMovAct" href="">Editar</a></li>
					<li><a id="delete_tipoMovAct" href=""> Eliminar </a></li>
					<li><a id="search_tipoMovAct" href=""> Buscar </a></li>
				</ul>
			</li>
			<li  data-accion="tipoActivo">
				<a href="#" class="active"><i class="fa-brands fa-slack icon"></i> TipoActivo <i class="fa-solid fa-angle-right  icon-right"></i></a> 
				<ul class="side-dropdown">
					<li><a id="add_tipoActivo" href=""> Agregar</a></li>
					<li><a id="edit_tipoActivo" href="">Editar</a></li>
					<li><a id="delete_tipoActivo" href=""> Eliminar </a></li>
					<li><a id="search_tipoActivo" href=""> Buscar </a></li>
				</ul>
			</li>
            <li data-accion="asignacion">
				<a href="#" class="active"><i class="fa-solid fa-earth-asia icon"></i> Asignacion <i class="fa-solid fa-angle-right  icon-right"></i></a> 
				<ul class="side-dropdown">
					<li><a id="add_asignacion" href=""> Crear Asignacion</a></li>
					<li><a id="edit_asignacion" href="">Asignar Activos</a></li>
					<li><a id="search_asignacion" href=""> Retornar Activo </a></li>
				</ul>
			</li>
			<li class="divider text" data-text="© 2024 Camper"> © 2024 Camper</li>
		</ul>
	</section>
	<!-- NAVBAR -->
	<section id="content">
		<!-- NAVBAR -->
		<nav>
			<i class='fa-solid fa-bars toggle-sidebar' ></i>
                <form id="searchForm">
                    <input type="text" id="searchInput" placeholder="Que Busca...." >
                    <button type="submit" id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
 			<span class="divider"></span>
			<div class="profile">
				<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
				<ul class="profile-link">
					<li><a href="#"><i class="fa-solid fa-user"></i> Profile</a></li>
					<li><a href="#"><i class="fa-solid fa-gear"></i> Settings</a></li>
					<li><a href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
				</ul>
			</div>
		</nav>
`
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
		else if (id === "add_asignacion") {
			const dialogoHTML = addAsignacion
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
				fetch('http://localhost:3000/asignacion', {
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




			// obtenerValorBuscado()
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
								<p>idTipo:  <span> ${objetoEncontrado.idTipo}</span></p>
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
							<h2>Buscar Producto <button id="btnCerrar">X</button></h2>
						</section>
						<div id="searchForm">   
							<input type="text" id="searchInput" placeholder="¿Qué producto busca?">
							<button id="searchEdit"><i class="fa-solid fa-magnifying-glass"></i></button>
						</div>
						<section class="infoE">
							<p>CC:   <span> ${objetoEncontrado.CC} </span> </p>
							<p>Nombre: <span>${objetoEncontrado.Nombre}</span> </p>
							<p>Tipo: <span> ${objetoEncontrado.Tipo} </span></p>
							<p>Estado: <span> ${objetoEncontrado.Estado}</span></p>
							<p>Numero: <span>${objetoEncontrado.Numero}</span></p>
							<p>Ubicacion: <span>${objetoEncontrado.Ubicaion} </span></p>
						</section>
						<button id="guardar" class="btnCerrar" >Aceptar</button>
					</dialog> `;
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
				<h2>Buscar Producto <button id="btnCerrar">X</button></h2>
			</section>
			<div id="searchForm">   
				<input type="text" id="searchInput" placeholder="¿Qué producto busca?">
				<button id="searchEdit"><i class="fa-solid fa-magnifying-glass"></i></button>
			</div>
			<section class="infoE">
			<p>idEstado: <span>${objetoEncontrado}</span> </p> 
			<p>Estado: <span>${objetoEncontrado}</span>  </p>
			</section>
			<button id="guardar" class="btnCerrar" >Aceptar</button>
			</dialog>`;
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
					<section class="infoE">
						<p>Tipo de persona:  <span>${objetoEncontrado.tipoPersona}</span>  </p>
						<p>Cargo:  <span>${objetoEncontrado.Cargo}</span> </p>
						<p>CC:  <span>${objetoEncontrado.CC}</span></p>
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
									<h2>Buscar Producto  <button id="btnCerrar">X</button></h2>
								</section>
								<form id="searchForm">
									<input type="text" id="searchInput" placeholder="Que producto Busca....">
									<button type="submit" id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
								</form> 
								<section class="infoE">
									<p>CodTransaccion: <span>${objetoEncontrado.CodTransaccion}</span></p>
									<p>nFormulario:  <span>${objetoEncontrado.nFormulario}</span> </p>
									<p>idMarca:  <span>${objetoEncontrado.idMarca}</span> </p>
									<p>idCategoria: <span>${objetoEncontrado.idCategoria}</span> </p>
									<p>serial:  <span>${objetoEncontrado.serial}</span> </p>
									<p>Inicio: <span>${objetoEncontrado.inicio}</span></p>
									<p>fin: <span>${objetoEncontrado.fin}</span></p>
									<p>nitProveedor:  <span>${objetoEncontrado.nitProveedor}</span> </p>
									<p>motivo: <span>${objetoEncontrado.motivo}</span> </p>
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
									<h2>Buscar Producto <button id="btnCerrar">X</button></h2>
								</section>
								<form id="searchForm">
									<input type="text" id="searchInput" placeholder="Que producto Busca....">
									<button type="submit" id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
								</form> 
								<section class="infoE">
									<p>CodTransaccion: <span> ${objetoEncontrado.CodTransaccion}</span></p> 
									<p>NFormulario:  <span>${objetoEncontrado.NFormulario}</span> </p> 
									<p>idMarca: <span>${objetoEncontrado.idMarca}</span> </p> 
									<p>idCategoria: <span>${objetoEncontrado.idCategoria}</span>  </p> 
									<p>idTipo: <span>${objetoEncontrado.idTipo}</span></p> 
									<p>ValorUnitario: <span>${objetoEncontrado.ValorUnitario}</span></p> 
									<p>idProveedor</p> ${objetoEncontrado.idProveedor}
									<p>serial: <span>${objetoEncontrado.serial}</span></p> 
									<p>idEmpresaResponsable: <span>${objetoEncontrado.idEmpresaResponsable}</span></p> 
									<p>idEstado: <span>${objetoEncontrado.idEstado}</span> </p> 
								</section>
								<button id="guardar" class="btnCerrar">Aceptar</button>
							</dialog>`;
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
		else if (ids === "search_asignacion") {
			let valorBuscado = prompt("ingrese el id a buscar")  /*Id del producto abuscar */
			fetch('http://localhost:3000/asignacion')
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
								<p>idTipo:  <span> ${objetoEncontrado.idTipo}</span></p>
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
	})
});

/* Inicio Buscar*/
const listaItems3 = document.querySelectorAll('.side-dropdown li');
listaItems3.forEach(item => {
	const a = item.querySelector('a');
	const ids = a.getAttribute('id');
	a.addEventListener('click', function (event) {
		event.preventDefault();
		if (ids === "edit") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/Inventario%20Campuslands')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, NFormulario, idMarca, idCategoria, idTipo, ValorUnitario, idProveedor, serial, idEmpresaResponsable, idEstado } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
                                    <p>CodTransaccion: <span><input type="text" id="newCodeTra" value="${CodTransaccion}"></span></p>
                                    <p>NroFormulario:  <span><input type="text" id="newNroFormulario" value="${NFormulario}"></span></p>
                                    <p>idMarca: 
											<span><select class="form-control" id="idMarca" >
												<option value="${idMarca}">${idMarca}</option>
												<option value="LG"> LG </option>
												<option value="COMPUMAX"> COMPUMAX </option>
												<option value="BENO">  BENO </option>
												<option value="ASUS">  ASUS </option>
												<option value="LENOVO">  LENOVO </option>
												<option value="HP">  HP </option>
								  			</select></span></p>

                                    <p>idCategoria: 
											<span><select class="form-control" id="idCategoria" >
												<option value="${idCategoria}">${idCategoria}</option>
												<option > Equipo de Computo </option>
												<option > Electrodomestico </option>
												<option > Juego </option>
											</select></span></p>
									
                                    <p>idTipo: 
											<span><select class="form-control" id="idTipo" >
												<option  value="${idTipo}"> ${idTipo}</option>
												<option value="Monitor"> Monitor </option>
												<option value="CPU"> CPU </option>
												<option value="Teclado"> Teclado </option>
												<option value="Mouse"> Mouse </option>
												<option value="Aire Ac"> Aire Acondicionado </option>
												<option value="Portatil"> Portatil </option>
												<option value="Impresora"> Impresora </option>
								  			</select></span></p>

                                    <p>Valor Unitario: <span><input type="text" id="Valor" value="${ValorUnitario}"></span></p>
                                    <p>idProveedor: <span><input type="text" id="idProveedor" value="${idProveedor}"></span></p>
                                    <p>Nro Serial: <span><input type="text" id="Serial" value="${serial}"></span></p>
                                    <p>EmpresaResponsable: <span><input type="text" id="EmpresaResponsable" value="${idEmpresaResponsable}"></span></p>
                                    <p>idEstado: 
										<span><select class="form-control" id="idEstado">
											<option value="${idEstado}">${idEstado}</option>
											<option >No Asignado</option>
											<option >Asignado</option>
											<option >Dado de Baja por Daño</option>
											<option >En Reparación y/o garantia</option>
										</select></span></p>
                                </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								CodTransaccion: document.getElementById("newCodeTra").value,
								NFormulario: document.getElementById("newNroFormulario").value,
								idMarca: document.getElementById("idMarca").value,
								idCategoria: document.getElementById("idCategoria").value,
								idTipo: document.getElementById("idTipo").value,
								ValorUnitario: document.getElementById("Valor").value,
								idProveedor: document.getElementById("idProveedor").value,
								serial: document.getElementById("Serial").value,
								idEmpresaResponsable: document.getElementById("EmpresaResponsable").value,
								idEstado: document.getElementById("idEstado").value
							};
							const url = `http://localhost:3000/Inventario%20Campuslands/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "edit_marca") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/Marcas')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { NombreMarca, Categoria, price, proveedor, idProveedor, nombreProveedor, tipo } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
								<dialog id="dialogo" class="dialogo">
									<section class="titleAdd">
										<h2> Editar Producto <button id="btnCerrar">X</button></h2>
									</section>
									<section class="infoE">
										<p>NombreMarca: <span><input type="text" id="newCodeTra" value="${NombreMarca}"></span></p>
										
										<p>Categoria:  
											<span><select class="form-control" id="newNroFormulario" >
											<option  value="${Categoria}">${Categoria}</option>
											<option value="Hardware">Hardware </option>
											<option value="Software"> Software </option>
									  		</select></span>
										</p>

										<p>IdTipo: 
										<span><select class="form-control" id="idMarca" >
											<option  value="${tipo}">${tipo}</option>
											<option value="Monitor"> Monitor </option>
											<option value="CPU"> CPU </option>
											<option value="Teclado"> Teclado </option>
											<option value="Mouse"> Mouse </option>
											<option value="Aire Ac"> Aire Acondicionado </option>
											<option value="Portatil"> Portatil </option>
											<option value="Impresora"> Impresora </option>
									  	</select></span></p>

										<p>price: <span><input type="text" id="idCategoria" value="${price}"></span></p>
										<p>proveedor: <span><input type="text" id="idTipo" value="${proveedor}"></span></p>
										<p>idProveedor: <span><input type="text" id="Valor" value="${idProveedor}"></span></p>
										<p>nombreProveedor: <span><input type="text" id="Proveedor" value="${nombreProveedor}"></span></p>
									</section>
									<button id="guardar" class="btnCerrar" >Aceptar</button>
								</dialog>
							`;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								NombreMarca: document.getElementById("newCodeTra").value,
								Categoria: document.getElementById("newNroFormulario").value,
								tipo: document.getElementById("idMarca").value,
								price: document.getElementById("idCategoria").value,
								proveedor: document.getElementById("idTipo").value,
								idProveedor: document.getElementById("Valor").value,
								nombreProveedor: document.getElementById("Proveedor").value,
							};
							const url = `http://localhost:3000/Marcas/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "edit_estado") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/estado')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { id, NombreEstado } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
								<dialog id="dialogo" class="dialogo">
									<section class="titleAdd">
										<h2> Editar Producto <button id="btnCerrar">X</button></h2>
									</section>
									<section class="infoE">
									<p>idEstado </p> <input id="idState" value="${id}" type="text" required>
									<p>Estado</p><input id="newState" type="text" value="${NombreEstado}" required> 
									</section>
									<button id="guardar" class="btnCerrar" >Aceptar</button>
								</dialog>
							`;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								NombreEstado: document.getElementById("newState").value,

							};
							const url = `http://localhost:3000/estado/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "edit_tipoMovAct") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");

			fetch('http://localhost:3000/tipoMovActivo')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, nFormulario, idMarca, idCategoria, serial, inicio, fin, nitProveedor, motivo } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
                                    <p>CodTransaccion: <span><input type="text" id="newCodeTra" value="${CodTransaccion}"></span></p>
                                    <p>NroFormulario:  <span><input type="text" id="newNroFormulario" value="${nFormulario}"></span></p>
                                    <p>idMarca: <span><input type="text" id="idMarca" value="${idMarca}"></span></p>
                                    <p>idCategoria: 
										<span><select class="form-control" id="idCategoria" required>
											<optionvalue="${idCategoria}">${idCategoria}</option>
											<option > Equipo de Computo </option>
											<option > Electrodomestico </option>
											<option > Juego </option>
										</select></span></p>
                                    <p>NroSerial: <span><input type="text" id="serial" value="${serial}"></span></p>
                                    <p>Puntoincial: <span><input type="text" id="idini" value="${inicio}"></span></p>
                                    <p>Puntofinal: <span><input type="text" id="idfin" value="${fin}"></span></p>
                                    <p>Nitproveedor: <span><input type="text" id="nit" value="${nitProveedor}"></span></p>
                                    <p>Motivo: 
										<span><select class="form-control" id="motivo" required>
											<option value="${motivo}"> ${motivo}</p>
											<option >No Asignado</option>
											<option >Asignado</option>
											<option >Dado de Baja por Daño</option>
											<option >En Reparación y/o garantia</option>
								  		</select></span></p>
                                </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								CodTransaccion: document.getElementById("newCodeTra").value,
								nFormulario: document.getElementById("newNroFormulario").value,
								idMarca: document.getElementById("idMarca").value,
								idCategoria: document.getElementById("idCategoria").value,
								serial: document.getElementById("serial").value,

								inicio: document.getElementById("idini").value,
								fin: document.getElementById("idfin").value,

								nitProveedor: document.getElementById("nit").value,
								motivo: document.getElementById("motivo").value
							};
							const url = `http://localhost:3000/tipoMovActivo/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "edit_persona") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");

			fetch('http://localhost:3000/personas')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CC, Nombre, Tipo, Estado, Numero, Ubicaion } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
									<p>CC: <span><input type="text" id="Cc" value="${CC}"></span></p>
                                    <p>Nombre: <span><input type="text" id="nombre" value="${Nombre}"></span></p>
									<p>Tipo: <span><input type="text" id="tipo" value="${Tipo}"></span></p>
									<p>Estado: 
										<span><select class="form-control" id="estado" >
											<option value="${Estado}"> ${Estado}</option>
											<option value="Activo"> Activo </option>
											<option value="Incativo"> Incativo </option> 
										</select></span></p>
										
									<p>Numero:  <span><input type="text" id="numero" value="${Numero}"></span></p>
									
                                    <p>Ubicacion: 
										<span><select class="form-control" id="ubicacion" >
											<option value="${Ubicaion}">${Ubicaion}</option>
											<option value="Casa">Casa</option>
											<option value="Personal">Personal</option>
											<option value="Profecionbal">Profesional</option>
											<option value="Otro">Otro</option>
								  		</select></span></p>
                                    </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								CC: document.getElementById("Cc").value,
								Nombre: document.getElementById("nombre").value,
								Tipo: document.getElementById("tipo").value,
								Estado: document.getElementById("estado").value,
								Numero: document.getElementById("numero").value,
								Ubicaion: document.getElementById("ubicacion").value,
							};
							const url = `http://localhost:3000/personas/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "edit_tipoPersona") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");

			fetch('http://localhost:3000/tipoPersona')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CC, tipoPersona, Cargo } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
									<p>tipoPersona: <span><input type="text" id="type" value="${tipoPersona}"></span></p>
                                    <p>Cargo: <span><input type="text" id="cargo" value="${Cargo}"></span></p>
									<p>CC: <span><input type="text" id="cc" value="${CC}"></span></p>
							
                                    </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								tipoPersona: document.getElementById("type").value,
								Cargo: document.getElementById("cargo").value,
								CC: document.getElementById("cc").value,

							};
							const url = `http://localhost:3000/tipoPersona/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "edit_tipoMovAct") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");

			fetch('http://localhost:3000/tipoMovActivo')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, nFormulario, idMarca, idCategoria, serial, inicio, fin, nitProveedor, motivo } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
									<p>CodTransaccion: <span><input type="text" id="codTras" value="${CodTransaccion}"></span></p>
                                    <p>CarnFormulariogo: <span><input type="text" id="nform" value="${nFormulario}"></span></p>
									<p>idMarca: <span><input type="text" id="marca" value="${idMarca}"></span></p>
									<p>idCategoria: <span><input type="text" id="categoria" value="${idCategoria}"></span></p>
									<p>serial: <span><input type="text" id="serial" value="${serial}"></span></p>
									<p>inicio: <span><input type="text" id="inico" value="${inicio}"></span></p>
									<p>fin: <span><input type="text" id="fin" value="${fin}"></span></p>
									<p>nitProveedor: <span><input type="text" id="nitProveedor" value="${nitProveedor}"></span></p>
									<p>motivo: <span><input type="text" id="motivo" value="${motivo}"></span></p>
                                    </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								CodTransaccion: document.getElementById("codTras").value,
								nFormulario: document.getElementById("nform").value,
								idMarca: document.getElementById("marca").value,
								idCategoria: document.getElementById("categoria").value,
								serial: document.getElementById("serial").value,
								inicio: document.getElementById("inico").value,
								fin: document.getElementById("fin").value,
								nitProveedor: document.getElementById("nitProveedor").value,
								motivo: document.getElementById("motivo").value,
							};
							const url = `http://localhost:3000/tipoMovActivo/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "edit_tipoActivo") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");

			fetch('http://localhost:3000/tipoActivo')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, NFormulario, idMarca, ValorUnitario, serial, idProveedor, idCategoria, idEmpresaResponsable, idEstado } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
									<p>CodTransaccion: <span><input type="text" id="codTras" value="${CodTransaccion}"></span></p>
                                    <p>NFormulario: <span><input type="text" id="nform" value="${NFormulario}"></span></p>
									<p>idMarca: 
										<span><select class="form-control" id="marca" required>
											<option value="${idMarca}">${idMarca}</option>
											<option value="LG"> LG </option>
											<option value="COMPUMAX"> COMPUMAX </option>
											<option value="BENO">  BENO </option>
											<option value="ASUS">  ASUS </option>
											<option value="LENOVO">  LENOVO </option>
											<option value="HP">  HP </option>
										</select></span></p>
										
									<p>idCategoria: 
										<span> <select class="form-control" id="categoria" required>
											<option value="${idCategoria}"></option>
											<option > Equipo de Computo </option>
											<option > Electrodomestico </option>
											<option > Juego </option>
										</select>
									<input type="text"  ></span></p>
									<p>idTipo: <span><input type="text" id="type" value="${idCategoria}"></span></p>
									<p>ValorUnitario: <span><input type="text" id="valor" value="${ValorUnitario}"></span></p>
									<p>idProveedor: <span><input type="text" id="proveedor" value="${idProveedor}"></span></p>
									<p>serial: <span><input type="text" id="serial" value="${serial}"></span></p>
									<p>idEmpresaResponsable: <span><input  id="responsable" value="${idEmpresaResponsable}"></span></p>
									<p>idEstado: <span><input type="text" id="estado" value="${idEstado}"></span></p>
                                    </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								CodTransaccion: document.getElementById("codTras").value,
								NFormulario: document.getElementById("nform").value,
								idMarca: document.getElementById("marca").value,
								idCategoria: document.getElementById("categoria").value,
								idTipo: document.getElementById("type").value,
								ValorUnitario: document.getElementById("valor").value,
								idProveedor: document.getElementById("proveedor").value,
								serial: document.getElementById("serial").value,
								idEmpresaResponsable: document.getElementById("responsable").value,
								idEstado: document.getElementById("estado").value,
							};
							const url = `http://localhost:3000/tipoActivo/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "edit_asignacion") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/asignacion')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, NFormulario, idMarca, idCategoria, idTipo, ValorUnitario, idProveedor, serial, idEmpresaResponsable, idEstado } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
                                    <p>CodTransaccion: <span><input type="text" id="newCodeTra" value="${CodTransaccion}"></span></p>
                                    <p>NroFormulario:  <span><input type="text" id="newNroFormulario" value="${NFormulario}"></span></p>
                                    <p>idMarca: 
											<span><select class="form-control" id="idMarca" >
												<option value="${idMarca}">${idMarca}</option>
												<option value="LG"> LG </option>
												<option value="COMPUMAX"> COMPUMAX </option>
												<option value="BENO">  BENO </option>
												<option value="ASUS">  ASUS </option>
												<option value="LENOVO">  LENOVO </option>
												<option value="HP">  HP </option>
								  			</select></span></p>

                                    <p>idCategoria: 
											<span><select class="form-control" id="idCategoria" >
												<option value="${idCategoria}">${idCategoria}</option>
												<option > Equipo de Computo </option>
												<option > Electrodomestico </option>
												<option > Juego </option>
											</select></span></p>
									
                                    <p>idTipo: 
											<span><select class="form-control" id="idTipo" >
												<option  value="${idTipo}"> ${idTipo}</option>
												<option value="Monitor"> Monitor </option>
												<option value="CPU"> CPU </option>
												<option value="Teclado"> Teclado </option>
												<option value="Mouse"> Mouse </option>
												<option value="Aire Ac"> Aire Acondicionado </option>
												<option value="Portatil"> Portatil </option>
												<option value="Impresora"> Impresora </option>
								  			</select></span></p>

                                    <p>Valor Unitario: <span><input type="text" id="Valor" value="${ValorUnitario}"></span></p>
                                    <p>idProveedor: <span><input type="text" id="idProveedor" value="${idProveedor}"></span></p>
                                    <p>Nro Serial: <span><input type="text" id="Serial" value="${serial}"></span></p>
                                    <p>EmpresaResponsable: <span><input type="text" id="EmpresaResponsable" value="${idEmpresaResponsable}"></span></p>
                                    <p>idEstado: 
										<span><select class="form-control" id="idEstado">
											<option value="${idEstado}">${idEstado}</option>
											<option >No Asignado</option>
											<option >Asignado</option>
											<option >Dado de Baja por Daño</option>
											<option >En Reparación y/o garantia</option>
										</select></span></p>
                                </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
								CodTransaccion: document.getElementById("newCodeTra").value,
								NFormulario: document.getElementById("newNroFormulario").value,
								idMarca: document.getElementById("idMarca").value,
								idCategoria: document.getElementById("idCategoria").value,
								idTipo: document.getElementById("idTipo").value,
								ValorUnitario: document.getElementById("Valor").value,
								idProveedor: document.getElementById("idProveedor").value,
								serial: document.getElementById("Serial").value,
								idEmpresaResponsable: document.getElementById("EmpresaResponsable").value,
								idEstado: document.getElementById("idEstado").value
							};
							const url = `http://localhost:3000/Inventario%20Campuslands/${idEditar}`;
							fetch(url, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
	});
});
/* Fin buscar*/

/* Inico de Eliminar */
const listaItems4 = document.querySelectorAll('.side-dropdown li');
listaItems4.forEach(item => {
	const a = item.querySelector('a');
	const ids = a.getAttribute('id');
	a.addEventListener('click', function (event) {
		event.preventDefault();
		if (ids === "delete") {
			// Llamada a la función para el caso específico de 'Inventario Campuslands'
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/Inventario%20Campuslands')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, NFormulario, idMarca, idCategoria, idTipo, ValorUnitario, idProveedor, serial, idEmpresaResponsable, idEstado } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
                                    <p>CodTransaccion: <span>${CodTransaccion}</span></p>
                                    <p>NroFormulario:  <span>${NFormulario}</span></p>
                                    <p>idMarca: <span>${idMarca}</span></p>
                                    <p>idCategoria: <span>${idCategoria}</span></p>
                                    <p>idTipo: <span>${idTipo}</span></p>
                                    <p>Valor Unitario: <span>${ValorUnitario}</span></p>
                                    <p>idProveedor: <span>${idProveedor}</span></p>
                                    <p>Nro Serial: <span>${serial}</span></p>
                                    <p>EmpresaResponsable: <span>${idEmpresaResponsable}</span></p>
                                    <p>idEstado: <span>${idEstado}</span></p>
                                </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
							};
							const url = `http://localhost:3000/Inventario%20Campuslands/${idEditar}`;
							fetch(url, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "delete_marca") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/Marcas')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { NombreMarca, Categoria, price, proveedor, idProveedor, nombreProveedor, tipo } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
								<dialog id="dialogo" class="dialogo">
									<section class="titleAdd">
										<h2> Editar Producto <button id="btnCerrar">X</button></h2>
									</section>
									<section class="infoE">
										<p>NombreMarca: <span>${NombreMarca}</span></p>
										<p>Categoria:  <span>${Categoria}</span></p>
										<p>tipo: <span>${tipo}</span></p>
										<p>price: <span>${price}</span></p>
										<p>proveedor: <span>${proveedor}</span></p>
										<p>idProveedor: <span>${idProveedor}</span></p>
										<p>nombreProveedor: <span>${nombreProveedor}</span></p>
									</section>
									<button id="guardar" class="btnCerrar" >Aceptar</button>
								</dialog>
							`;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
							};
							const url = `http://localhost:3000/Marcas/${idEditar}`;
							fetch(url, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "delete_estado") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/estado')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { id, NombreEstado } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
								<dialog id="dialogo" class="dialogo">
									<section class="titleAdd">
										<h2> Editar Producto <button id="btnCerrar">X</button></h2>
									</section>
									<section class="infoE">
									<p>idEstado </p> ${id}
									<p>Estado</p>${NombreEstado}
									</section>
									<button id="guardar" class="btnCerrar" >Aceptar</button>
								</dialog>
							`;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
							};
							const url = `http://localhost:3000/estado/${idEditar}`;
							fetch(url, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "delete_tipoMovAct") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/tipoMovActivo')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, nFormulario, idMarca, idCategoria, serial, inicio, fin, nitProveedor, motivo } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
                                    <p>CodTransaccion: <span>${CodTransaccion}</span></p>
                                    <p>NroFormulario:  <span>${nFormulario}</span></p>
                                    <p>idMarca: <span>${idMarca}</span></p>
                                    <p>idCategoria: <span>${idCategoria}</span></p>
                                    <p>NroSerial: <span>${serial}</span></p>
                                    <p>Puntoincial: <span>${inicio}</span></p>
                                    <p>Puntofinal: <span>${fin}</span></p>
                                    <p>Nitproveedor: <span>${nitProveedor}</span></p>
                                    <p>Motivo: <span>${motivo}</span></p>
                                </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
							};
							const url = `http://localhost:3000/tipoMovActivo/${idEditar}`;
							fetch(url, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "delete_persona") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/personas')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CC, Nombre, Tipo, Estado, Numero, Ubicaion } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
									<p>CC: <span>${CC}</span></p>
                                    <p>Nombre: <span>${Nombre}</span></p>
									<p>Tipo: <span>${Tipo}</span></p>
									<p>Estado: <span>${Estado}</span></p>
									<p>Numero:  <span>${Numero}</span></p>
                                    <p>Ubicacion: <span>${Ubicaion}</span></p>
                                    </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
							};
							const url = `http://localhost:3000/personas/${idEditar}`;
							fetch(url, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "delete_tipoPersona") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/tipoPersona')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CC, tipoPersona, Cargo } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
									<p>tipoPersona: <span>${tipoPersona}</span></p>
                                    <p>Cargo: <span>${Cargo}</span></p>
									<p>CC: <span>${CC}</span></p>
                                    </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
							};
							const url = `http://localhost:3000/tipoPersona/${idEditar}`;
							fetch(url, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "delete_tipoMovAct") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/tipoMovActivo')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, nFormulario, idMarca, idCategoria, serial, inicio, fin, nitProveedor, motivo } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
									<p>CodTransaccion: <span>${CodTransaccion}</span></p>
                                    <p>CarnFormulariogo: <span>${nFormulario}</span></p>
									<p>idMarca: <span>${idMarca}</span></p>
									<p>idCategoria: <span>${idCategoria}</span></p>
									<p>serial: <span>${serial}</span></p>
									<p>inicio: <span>${inicio}</span></p>
									<p>fin: <span>${fin}</span></p>
									<p>nitProveedor: <span>${nitProveedor}</span></p>
									<p>motivo: <span>${motivo}</span></p>
                                    </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
							};
							const url = `http://localhost:3000/tipoMovActivo/${idEditar}`;
							fetch(url, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
		else if (ids === "delete_tipoActivo") {
			let valorBuscado = prompt("Ingrese el ID del producto que desea editar");
			fetch('http://localhost:3000/tipoActivo')
				.then(response => response.json())
				.then(data => {
					const inventario = data;
					const objetoEncontrado = inventario.find(item => item.id === valorBuscado);
					if (objetoEncontrado) {
						console.log(objetoEncontrado);
						const idEditar = valorBuscado; // ID del producto que deseas editar
						// Obtener los datos del objeto encontrado
						const { CodTransaccion, NFormulario, idMarca, ValorUnitario, serial, idProveedor, idCategoria, idEmpresaResponsable, idEstado } = objetoEncontrado;
						// Construir el diálogo con los datos del objeto encontrado
						const dialogoHTML =
							`
                            <dialog id="dialogo" class="dialogo">
                                <section class="titleAdd">
                                    <h2> Editar Producto <button id="btnCerrar">X</button></h2>
                                </section>
                                <section class="infoE">
									<p>CodTransaccion: <span>${CodTransaccion}</span></p>
                                    <p>NFormulario: <span>${NFormulario}</span></p>
									<p>idMarca: <span>${idMarca}</span></p>
									<p>idCategoria: <span>${idCategoria}</span></p>
									<p>idTipo: <span>${idCategoria}</span></p>
									<p>ValorUnitario: <span>${ValorUnitario}</span></p>
									<p>idProveedor: <span>${idProveedor}</span></p>
									<p>serial: <span>${serial}</span></p>
									<p>idEmpresaResponsable: <span>${idEmpresaResponsable}</span></p>
									<p>idEstado: <span>${idEstado}</span></p>
                                    </section>
                                <button id="guardar" class="btnCerrar" >Aceptar</button>
                            </dialog>
                        `;
						// Insertar el diálogo en el DOM
						document.body.innerHTML += dialogoHTML;
						// Obtener referencias a elementos del diálogo
						const dialogo = document.getElementById("dialogo");
						const btnCerrar = document.getElementById("btnCerrar");
						const btnGuardar = document.getElementById("guardar");
						// Agregar evento de clic al botón de cerrar para cerrar el diálogo
						btnCerrar.addEventListener("click", () => {
							dialogo.close();
						});
						// Agregar evento de clic al botón de guardar para actualizar el producto
						btnGuardar.addEventListener("click", () => {
							const nuevosDatos = {
							};
							const url = `http://localhost:3000/tipoActivo/${idEditar}`;
							fetch(url, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(nuevosDatos),
							})
								.then(response => {
									if (!response.ok) {
										throw new Error('Error al actualizar el producto');
									}
									return response.json();
								})
								.then(data => {
									console.log('Producto actualizado correctamente:', data);
									// Cerrar el diálogo después de actualizar
									dialogo.close();
								})
								.catch(error => {
									console.error('Error al actualizar el producto:', error);
								});
						});
						// Mostrar el diálogo
						dialogo.showModal();
					}
					else {
						console.log('No se encontró ningún producto con el ID especificado:', valorBuscado);
					}
				})
				.catch(error => {
					console.error('Error al obtener el inventario:', error);
				});
		}
	});
});
/* Fin de Eliminar */
