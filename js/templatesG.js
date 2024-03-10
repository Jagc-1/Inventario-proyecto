export const addActive = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Nuevo Activo <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus required>
    <p>NroFormulario</p><input id="Nform" type="text"  required>
    <p>idMarca</p>
    <select class="form-control" id="idMarca" required>
        <option value=""></option>
        <option value="LG"> LG </option>
        <option value="COMPUMAX"> COMPUMAX </option>
        <option value="BENO">  BENO </option>
        <option value="ASUS">  ASUS </option>
        <option value="LENOVO">  LENOVO </option>
        <option value="HP">  HP </option>
      </select>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory" required>
      <option value=""></option>
      <option > Equipo de Computo </option>
      <option > Electrodomestico </option>
      <option > Juego </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idTipe" required>
      <option value=""></option>
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text" required>
    <p>idProveedor</p><input id="idProveedor"type="text" required>
    <p>Nro Serial</p><input id="idSerial"type="text" required>
    <p>idEmpresaResponsable</p><input id="idEnterprise" type="text" required>
    <p>idEstado					</p>
    <select class="form-control" id="idEstate">
      <option value=""></option>
      <option >No Asignado</option>
      <option >Asignado</option>
      <option >Dado de Baja por Daño</option>
      <option >En Reparación y/o garantia</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar" >Guardar</button>
</dialog>
`
export const addMarcas = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Nueva Marca<button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>Nit</p><input id="idMarca" type="text" autofocus required>
    <p>Nombre Marca</p><input id="Nform" type="text" required>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory" required>
      <option value=""></option>
      <option value="Hardware">Hardware </option>
      <option value="Software"> Software </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idType" required>
      <option value=""></option>
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text" required>
    <p>idProveedor</p><input id="idProveedor"type="text" required>
    <p> Nombre del Proveedor</p><input id="idEnterprise" type="text" required>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`
export const addPeople = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Persona <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CC</p><input id="idCc" type="text" autofocus required>
    <p>Nombre</p><input id="nombreP" type="text" required>
    <p>Tipo</p>
    <select class="form-control" id="idTipoP" required>
        <option value=""></option>
        <option value="Persona"> Persona </option>
        <option value="Proveedor"> Proveedor </option>
        <option value="Area">  Area </option>
     </select>
    <p>Estado</p>
    <select class="form-control" id="idTipe" required>
      <option value=""></option>
      <option value="Activo"> Activo </option>
      <option value="Incativo"> Incativo </option>
    </select>
    <p>Numero</p><input id="idNumero" type="number" required>
    <p>Ubicacion</p>
    <select class="form-control" id="idUbicate" required>
      <option value=""></option>
      <option value="Casa">Casa</option>
      <option value="Personal">Personal</option>
      <option value="Profecionbal">Profesional</option>
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
    <p>id Estado </p> <input id="idState" type="text" required>
    <p>Nuevo  Estado</p><input id="newState" type="text" required> 
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`
export const addTipoPersona = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Tipo De Persona <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>Tipo de persona</p><input id="idTypePeople" type="text" autofocus required>
    <p>Cargo</p><input id="idTypeCargo" type="text" required>
    <p>CC / identificador </p><input id="idCc" type="text" required>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`
export const addTipoMovAct = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Movimiento <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus  required>
    <p>NroFormulario</p><input id="Nform" type="text" required>
    <p>idMarca</p><input id="idMarca" type="text" required>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory" required>
      <option value=""></option>
      <option > Equipo de Computo </option>
      <option > Electrodomestico </option>
      <option > Juego </option>
    </select>
    <p>NroSerial</p><input id="idSerial"type="text" required>
    <p>Puntoincial</p><input id="idInicio" type="text" required>
    <p>Puntofinal</p><input id="idFinal" type="text" required>
    <p>Nitproveedor</p><input id="idProveedor"type="text" required placeholder="En caso de ser un dispositivo nuevo">
    <p>Motivo	</p>
    <select class="form-control" id="idEstate" required>
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
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus  required>
    <p>NroFormulario</p><input id="Nform" type="text" required>
    <p>idMarca</p>
    <select class="form-control" id="idMarca" required>
        <option value=""></option>
        <option value="LG"> LG </option>
        <option value="COMPUMAX"> COMPUMAX </option>
        <option value="BENO">  BENO </option>
        <option value="ASUS">  ASUS </option>
        <option value="LENOVO">  LENOVO </option>
        <option value="HP">  HP </option>
      </select>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory" required>
      <option value=""></option>
      <option > Equipo de Computo </option>
      <option > Electrodomestico </option>
      <option > Juego </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idTipe" required>
      <option value=""></option>
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text" required>
    <p>idProveedor</p><input id="idProveedor"type="text" required>
    <p>Nro Serial</p><input id="idSerial"type="text">
    <p>idEmpresaResponsable</p><input id="idEnterprise" type="text" required>
    <p>idEstado					</p>
    <select class="form-control" id="idEstate" required>
      option value=""></option>
      <option >No Asignado</option>
      <option >Asignado</option>
      <option >Dado de Baja por Daño</option>
      <option >En Reparación y/o garantia</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`
/*PENDIENTEEEE*/ 
export const addAsignacion = `
<dialog id="dialogo" class="dialogo">
    <section class="titleAdd"> <h2>Agrega Asignación <button id="btnCerrar">X</button></h2></section>
    <section class="info">
    <p>CodTransaccion</p><input id="idTransation" type="text" autofocus  required>
    <p>NroFormulario</p><input id="Nform" type="text" required>
    <p>idMarca</p>
    <select class="form-control" id="idMarca" required>
        <option value=""></option>
        <option value="LG"> LG </option>
        <option value="COMPUMAX"> COMPUMAX </option>
        <option value="BENO">  BENO </option>
        <option value="ASUS">  ASUS </option>
        <option value="LENOVO">  LENOVO </option>
        <option value="HP">  HP </option>
      </select>
    <p>idCategoria</p>
    <select class="form-control" id="idCategory" required>
      <option value=""></option>
      <option > Equipo de Computo </option>
      <option > Electrodomestico </option>
      <option > Juego </option>
    </select>
    <p>idTipo</p>
    <select class="form-control" id="idTipe" required>
      <option value=""></option>
      <option value="Monitor"> Monitor </option>
      <option value="CPU"> CPU </option>
      <option value="Teclado"> Teclado </option>
      <option value="Mouse"> Mouse </option>
      <option value="Aire Ac"> Aire Acondicionado </option>
      <option value="Portatil"> Portatil </option>
      <option value="Impresora"> Impresora </option>
    </select>
    <p>Valor Unitario</p><input id="idValor" type="text" required>
    <p>idProveedor</p><input id="idProveedor"type="text" required>
    <p>Nro Serial</p><input id="idSerial"type="text">
    <p>idEmpresaResponsable</p><input id="idEnterprise" type="text" required>
    <p>idEstado					</p>
    <select class="form-control" id="idEstate" required>
      <option value=""></option>
      <option >No Asignado</option>
      <option >Asignado</option>
      <option >Dado de Baja por Daño</option>
      <option >En Reparación y/o garantia</option>
    </select>
    </section>
    <button id="guardar" class="btnCerrar">Guardar</button>
</dialog>
`
/*pendiente el codigo de arriba*/