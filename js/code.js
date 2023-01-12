//$(document).ready(function () {
//cuando carga la página html se ejecutan las funciones
$(document).ready(function () {
  $("#imputRamo").hide();
  $("#buttonguar").hide();
});

function selectedProduct() {
  /* Para obtener el texto */
  var combo = document.getElementById("ProductSelect");
  var selected = combo.options[combo.selectedIndex].text;
   $("#imputRamo").hide(100);
 $("#selectOperativa").hide(100);
    $("#buttonguar").hide(100);

  if (selected == "Autos") {
    $("#imputRamo").show(1000);

  } else {
    $("#imputRamo").hide(1000);
    Swal.fire({
      title: "<strong>En <u>Construcción</u></strong>",
      icon: "info",
      html: "Pronto <b>Habilitaremos</b> esta opcion, ",
      showCloseButton: true,

      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
    });
  }
}

jQuery(document).ready(function () {
  jQuery($("#imputsincomas")).keypress(function (tecla) {
    if (tecla.charCode < 48 || tecla.charCode > 57) {
      return false;
    }
  });
});


function buscarnumero(){
    var x = $("#imputsincomas").val();
    $("#selectOperativa").hide(100);
    $("#buttonguar").hide(100);
    if (x == "1243"){
        
        $("#selectOperativa").empty();
        let miSelect = '<select id="opeSelect"  class="form-select" ><option selected value="AltaPo">Alta de póliza</option><option value="Proy">Proyecto ampliado</option></select><label for="floatingSelect">Seleccione operativa</label>';
        $("#selectOperativa").append(miSelect); 
        $("#selectOperativa").show(1000); 
        $("#buttonguar").show(100);
    }
    if (x == "1251"){
        $("#selectOperativa").empty();
        let miSelect = '<select id="opeSelect" class="form-select" disabled><option selected value="AltaGr">Alta de grupo</option></select><label for="floatingSelect">Seleccione operativa</label>';
        $("#selectOperativa").append(miSelect);  
        $("#selectOperativa").show(1000); 
        $("#buttonguar").show(100);
    }else if(x.length == 4 && x != "1251" && x != "1243"){
        Swal.fire({
            title: "<strong>No <u>Valido</u></strong>",
            icon: "info",
            html: "Ramo <b>No valido</b> para este producto, ",
            showCloseButton: true,
      
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
          });
    }

    }


function guardar(){
    var combo = document.getElementById("ProductSelect");
    var selected = combo.options[combo.selectedIndex].text;
    var x = $("#imputsincomas").val();
    var combo2 = document.getElementById("opeSelect");
    var selectedOpe = combo2.options[combo2.selectedIndex].text;
    let valor ={

        selectedproduct : selected,
        ramo : x,
        opertiva : selectedOpe

    }
    var min = 1;
    var max = 99999999;
    
    var z = Math.floor(Math.random()*(max-min+1)+min);
    sessionStorage.setItem(z,JSON.stringify(valor));
}

function listar(){
    $("#tablebox").empty();
    let tabla = `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Ramo</th>
        <th scope="col">Operativa</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">`;

    for (const [key, value] of Object.entries(sessionStorage)) {
       
       
        let usuariojscript = JSON.parse(value);

        tabla +=`<tr>
        <th scope="row">key</th>
        <td>${usuariojscript.selectedproduct}</td>
        <td>${usuariojscript.ramo}</td>
        <td>${usuariojscript.opertiva}</td>
        </tr>`; 
    
    };
    tabla +=`</tbody>
    </table>`; 
    $("#tablebox").append(tabla);


}
