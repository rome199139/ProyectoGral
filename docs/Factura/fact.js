class ItemFactura {
    constructor(producto, descripcion, cantidad, vlrUnitario, vlrTotal){
        this.producto = producto;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.vlrUnitario = vlrUnitario;
        this.vlrTotal = vlrTotal;
    }
}

class UI {
    static mostrarItemsFactura(){
        const arrayItemsFactura = DatosItemsFactura.traerItemsFactura();
        arrayItemsFactura.forEach((itemFactura)=> UI.agregarItemFactura(itemFactura));

    }

    static agregarItemFactura(itemFactura){
        const lista = document.querySelector('#facturas-list');
        const fila = document.createElement('tr');
        fila.innerHTML = `            
            <td>${itemFactura.producto}</td>
            <td>${itemFactura.descripcion}</td>
            <td>${itemFactura.cantidad}</td>
            <td>${itemFactura.vlrUnitario}</td>
            <td>${itemFactura.vlrTotal}</td>
            <td></td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        lista.appendChild(fila);

    }

    static eliminarItemFactura(el){        
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }

    }

    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container');
        const form = document.querySelector('#factura-form');
        container.insertBefore(div, form);

        setTimeout(()=>document.querySelector('.alert').remove(), 4000);
    }

    static limpiarCampos(){
        document.querySelector('#producto').value = '';
        document.querySelector('#descripcion').value = '';
        document.querySelector('#cantidad').value = '';
        document.querySelector('#vlrUnitario').value = '';
    }
}

class DatosItemsFactura {
    static traerItemsFactura(){
        let arrayItemsFactura;
        if(localStorage.getItem('arrayItemsFactura') === null){
            arrayItemsFactura = [];
        }else{
            arrayItemsFactura = JSON.parse(localStorage.getItem('arrayItemsFactura'));
        }
        return arrayItemsFactura;

    }

    static adicionarItemFactura(itemFactura){
        const arrayItemsFactura = DatosItemsFactura.traerItemsFactura();
        arrayItemsFactura.push(itemFactura);
        localStorage.setItem('arrayItemsFactura', JSON.stringify(arrayItemsFactura));

    }

    static removerItemFactura(vlrTotal){
        const arrayItemsFactura = DatosItemsFactura.traerItemsFactura();
        vlrTotal=parseInt(vlrTotal,10);        
        arrayItemsFactura.forEach((itemFactura, index)=>{            
            if(itemFactura.vlrTotal === vlrTotal){                
                arrayItemsFactura.splice(index, 1);
            }
        });
        localStorage.setItem('arrayItemsFactura', JSON.stringify(arrayItemsFactura));

    }
}

//Cargar datos al DOM (Pagina)
document.addEventListener('DOMContentLoaded', UI.mostrarItemsFactura());

//Control evento submit del formulario
document.querySelector('#factura-form').addEventListener('submit',(e) => {
    e.preventDefault();
    const producto = document.querySelector('#producto').value;
    const descripcion = document.querySelector('#descripcion').value;
    const cantidad = document.querySelector('#cantidad').value;
    const vlrUnitario = document.querySelector('#vlrUnitario').value;
    let vlrTotal = (cantidad * vlrUnitario);    

    if( producto === '' || descripcion === '' || cantidad === '' || vlrUnitario === '' ){
        UI.mostrarAlerta('No olvide incluir todos datos del item', 'danger');
    }else{
        const itemFactura = new ItemFactura(producto,descripcion,cantidad,vlrUnitario, vlrTotal);        
        DatosItemsFactura.adicionarItemFactura(itemFactura);
        UI.agregarItemFactura(itemFactura);
        UI.mostrarAlerta('Item agregado con exito a la grilla', 'success');
        UI.limpiarCampos();
    }
});

//Control evento click del elemento tabla seleccionado
document.querySelector('#facturas-list').addEventListener('click',(e)=>{
    UI.eliminarItemFactura(e.target);
    DatosItemsFactura.removerItemFactura(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.mostrarAlerta('El item seleccionado de la grilla fue eliminado correctamente', 'success');    
});