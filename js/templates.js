export const addActive = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Nuevo Activo <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus>
    <p>NroFormulario</p><input id="Nform" type="text">
    <p>idMarca</p>
    <select class="form-control" id="idMarca">
        <option value="LG"> LG </option>
        <option value="COMPUMAX"> COMPUMAX </option>
        <option value="BENO">  BENO </option>
        <option value="ASUS">  ASUS </option>
        <option value="LENOVO">  LENOVO </option>
        <option value="HP">  HP </option>
      </select>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory">
      <option > Equipo de Computo </option>
      <option > Electrodomestico </option>
      <option > Juego </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idTipe">
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text">
    <p>idProveedor</p><input id="idProveedor"type="text">
    <p>Nro Serial</p><input id="idSerial"type="text">
    <p>idEmpresaResponsable</p><input id="idEnterprise" type="text">
    <p>idEstado					</p>
    <select class="form-control" id="idEstate">
      <option >No Asignado</option>
      <option >Asignado</option>
      <option >Dado de Baja por Daño</option>
      <option >En Reparación y/o garantia</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`

export const addMarcas = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Nueva Marca<button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>Nit</p><input id="idTransation" type="text" autofocus>
    <p>Nombre Marca</p><input id="Nform" type="text">
    <p>idCategoria</p>
    <select class="form-control" id="idCategory">
      <option value="Hardware">Hardware </option>
      <option value="Software"> Software </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idTipe">
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text">
    <p>idProveedor</p><input id="idProveedor"type="text">
    <p>Proveedor</p><input id="idEnterprise" type="text">
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`

export const addPeople = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Persona <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CC</p><input id="idTransation" type="text" autofocus>
    <p>Nombre</p><input id="Nform" type="text">
    <p>Tipo</p>
    <select class="form-control" id="idMarca">
        <option value="Persona"> Persona </option>
        <option value="Proveedor"> Proveedor </option>
        <option value="Area">  Area </option>
     </select>
    <p>Estado</p>
    <select class="form-control" id="idTipe">
      <option value="Activo"> Activo </option>
      <option value="Incativo"> Incativo </option>
    </select>
    <p>Numero</p><input id="idValor" type="text">
    <p>Ubicaion</p>
    <select class="form-control" id="idEstate">
      <option value="Casa">Casa</option>
      <option valuePersonalPersonal</option>
      <option value="Profecionbal">Profecionbal</option>
      <option value="Otro">Otro</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`
export const addEstado = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Nuevo Producto <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus>
    <p>NroFormulario</p><input id="Nform" type="text">
    <p>idMarca</p>
    <select class="form-control" id="idMarca">
        <option value="LG"> LG </option>
        <option value="COMPUMAX"> COMPUMAX </option>
        <option value="BENO">  BENO </option>
        <option value="ASUS">  ASUS </option>
        <option value="LENOVO">  LENOVO </option>
        <option value="HP">  HP </option>
      </select>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory">
      <option > Equipo de Computo </option>
      <option > Electrodomestico </option>
      <option > Juego </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idTipe">
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text">
    <p>idProveedor</p><input id="idProveedor"type="text">
    <p>Nro Serial</p><input id="idSerial"type="text">
    <p>idEmpresaResponsable</p><input id="idEnterprise" type="text">
    <p>idEstado					</p>
    <select class="form-control" id="idEstate">
      <option >No Asignado</option>
      <option >Asignado</option>
      <option >Dado de Baja por Daño</option>
      <option >En Reparación y/o garantia</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`
export const addTipoPersona = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Tipo De Persona <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>Tipo de persona</p><input id="idTransation" type="text" autofocus>
    <p>Cargo</p><input id="Nform" type="text">
    <p>CC / identificador </p><input id="idValor" type="text">
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`

export const addTipoMovAct = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Movimiento <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus>
    <p>NroFormulario</p><input id="Nform" type="text">
    <p>Valor Unitario</p><input id="idValor" type="text">
    <p>idProveedor</p><input id="idProveedor"type="text">
    <p>Nro Serial</p><input id="idSerial"type="text">
    <p>idEmpresaResponsable</p><input id="idEnterprise" type="text">
    <p>idEstado	</p>
    <select class="form-control" id="idEstate">
      <option >No Asignado</option>
      <option >Asignado</option>
      <option >Dado de Baja por Daño</option>
      <option >En Reparación y/o garantia</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`

export const addTipoActivo = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Activo <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus>
    <p>NroFormulario</p><input id="Nform" type="text">
    <p>idMarca</p>
    <select class="form-control" id="idMarca">
        <option value="LG"> LG </option>
        <option value="COMPUMAX"> COMPUMAX </option>
        <option value="BENO">  BENO </option>
        <option value="ASUS">  ASUS </option>
        <option value="LENOVO">  LENOVO </option>
        <option value="HP">  HP </option>
      </select>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory">
      <option > Equipo de Computo </option>
      <option > Electrodomestico </option>
      <option > Juego </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idTipe">
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text">
    <p>idProveedor</p><input id="idProveedor"type="text">
    <p>Nro Serial</p><input id="idSerial"type="text">
    <p>idEmpresaResponsable</p><input id="idEnterprise" type="text">
    <p>idEstado					</p>
    <select class="form-control" id="idEstate">
      <option >No Asignado</option>
      <option >Asignado</option>
      <option >Dado de Baja por Daño</option>
      <option >En Reparación y/o garantia</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`

export const addAsignacion = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Asignación <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus>
    <p>NroFormulario</p><input id="Nform" type="text">
    <p>idMarca</p>
    <select class="form-control" id="idMarca">
        <option value="LG"> LG </option>
        <option value="COMPUMAX"> COMPUMAX </option>
        <option value="BENO">  BENO </option>
        <option value="ASUS">  ASUS </option>
        <option value="LENOVO">  LENOVO </option>
        <option value="HP">  HP </option>
      </select>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory">
      <option > Equipo de Computo </option>
      <option > Electrodomestico </option>
      <option > Juego </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idTipe">
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text">
    <p>idProveedor</p><input id="idProveedor"type="text">
    <p>Nro Serial</p><input id="idSerial"type="text">
    <p>idEmpresaResponsable</p><input id="idEnterprise" type="text">
    <p>idEstado					</p>
    <select class="form-control" id="idEstate">
      <option >No Asignado</option>
      <option >Asignado</option>
      <option >Dado de Baja por Daño</option>
      <option >En Reparación y/o garantia</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`
