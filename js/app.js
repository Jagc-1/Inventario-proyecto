// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
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
if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}
toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})
sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
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
allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})
window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})
// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})


const listaItems = document.querySelectorAll('.side-dropdown li');

listaItems.forEach(item => {
    const a = item.querySelector('a');
    const id = a.getAttribute('id');

    a.addEventListener('click', function (event) {
        event.preventDefault();

        if (id === "add") {
            const dialogoHTML = `
                <dialog id="dialogo" class="dialogo">
				    <section class="titleAdd"> <h2>Agrega Nuevo Producto <button id="btnCerrar">X</button></h2></section>
					
					<section class="info">
					<p>Activos</p><input type="text" autofocus>
					<p>Marcas</p><input type="text">
					<p>Persona</p><input type="text">
					<p>Estado</p><input type="text">
					<p>TipoPersona</p><input type="text">
					<p>TipoMovAct</p><input type="text">
					<p>TipoActivo</p><input type="text">
					

					</section>
                    
					<button id="guardar" class="btnCerrar">Guardar</button>
                </dialog>
            `;
            document.body.insertAdjacentHTML('beforeend', dialogoHTML);
            const dialogo = document.getElementById("dialogo");
            dialogo.showModal();

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
        else if(id === "edit") {
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
				
				

				</section>
				
				<button id="guardar" class="btnCerrar">Guardar</button>
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
		}
		else if(id === "delete") {
			const dialogoHTML = `
			<dialog id="dialogo">
				<h2>Título de logo</h2>
				<p>Este es un ejemplo de contenido para una ventana de diálogo.</p>
				<button id="btnCerrar">Cerrar</button>
			</dialog>
		`;
		document.body.insertAdjacentHTML('beforeend', dialogoHTML);
		const dialogo = document.getElementById("dialogo");
		dialogo.showModal();

		const btnCerrar = dialogo.querySelector("#btnCerrar");
		btnCerrar.addEventListener('click', function () {
			dialogo.close();
			dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
		});
		}
		else if(id === "search") {
			const dialogoHTML = `
			<dialog id="dialogo">
				<h2>Diálogo</h2>
				<p>Este es un ejemplo de contenido para una ventana de diálogo.</p>
				<button id="btnCerrar">Cerrar</button>
			</dialog>
		`;
		document.body.insertAdjacentHTML('beforeend', dialogoHTML);
		const dialogo = document.getElementById("dialogo");
		dialogo.showModal();

		const btnCerrar = dialogo.querySelector("#btnCerrar");
		btnCerrar.addEventListener('click', function () {
			dialogo.close();
			dialogo.remove(); // Eliminar el diálogo del DOM cuando se cierra
		});
		}
		else{
			alert('Lo siento Error 404 :(')
		}
    });

	// const searchInput = document.getElementById('searchInput');
    // searchInput.addEventListener('input', function(event) {
    //     const searchTerm = event.target.value.toLowerCase().trim(); 

    //     const filteredDCCharacters = personajesDC.filter(personaje => {
    //         return personaje.nombre.toLowerCase().includes(searchTerm);
    //     });
    //     dcContainer.innerHTML = ''; 
    //     agregarPersonajes( dcContainer); 
    // });
});
