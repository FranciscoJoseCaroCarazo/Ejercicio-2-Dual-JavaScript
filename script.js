// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  lista();
  delLista();
  addLista();
}

function lista() {
  //Obtenemos la lista de elementos
  let selector = document.querySelector(".selected").parentElement.parentElement
    .childNodes;

  //Recorremos la lista
  let contador = 1;
  for (var i = 0; i < selector.length; i++) {
    //Si encuentra un elemento de la lista con un elemento HTML en su interior mete todo el contenido de ese elemento ene una variable y la mete en la misma posicion que le corresponde el la lista, le crea la clase correspondiente a su posicion y pasa al siguiente. Así hasta completar la lista entera
    if (selector[i] instanceof HTMLLIElement) {
      var li = selector[i].children;
      li[0].classList.add("element-" + contador);
      contador++;
    }
  }
}

function delLista() {
  //Obtenemos toda la lista y borramos las posiciones donde se encuantran los elementos pares.
  var listaCompleta = document.querySelectorAll("Li");
  listaCompleta[1].remove();
  listaCompleta[3].remove();
}

function addLista() {
  //Obtenemos el id del elemento List2
  var listNode = document.getElementById("list2");
  //Creamos el boton 1, le asignamos la clase y el contenido del boton
  var btn1 = document.createElement("Button");
  btn1.innerHTML = "Texto Ejemplo 1";
  btn1.classList.add("element-1");
  //Introducimos el boton en el LI
  var primerLi = document.createElement("Li");
  primerLi.appendChild(btn1);
  //Creamos el boton 2, le asignamos la clase y el contenido del boton
  var btn2 = document.createElement("Button");
  btn2.innerHTML = "Texto Ejemplo 3";
  btn2.classList.add("element-3");
  //Introducimos el boton en el LI
  var segundoLi = document.createElement("Li");
  segundoLi.appendChild(btn2);
  //Creamos el boton 3, le asignamos la clase y el contenido del boton
  var btn3 = document.createElement("Button");
  btn3.innerHTML = "Texto Ejemplo 5";
  btn3.classList.add("element-5");
  //Introducimos el boton en el LI
  var tercerLi = document.createElement("Li");
  tercerLi.appendChild(btn3);
  //Añadimos los diferentes LI a la lista
  listNode.appendChild(primerLi);
  listNode.appendChild(segundoLi);
  listNode.appendChild(tercerLi);
}
