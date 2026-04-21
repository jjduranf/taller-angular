1. Asincronismo: ¿Por qué usamos un Observable y un .subscribe() en lugar
de simplemente asignar el resultado de la función http.get() a nuestra
variable?

Por lo general usamos Observable junto a .subscribe() debido a las peticiones HTTP quienes no devuelven los datos de forma
inmediata, o conocidas por ser asíncronas. Al llamar una funion http.get() se obtiene un Observable que representan datos a
futuro que entraran en el sistema ejecutando el codigo sin obtener la respuesta del servidor mas no la información de la lista
que se desea emplear, por esta razón al asignar directamente a la variable el resultado se guarda un Observable y no los datos.
Por esta razón utilizar .suscribe() es necesario para comprender o escuchar el Observable y ejecutar un bloque de codigo al 
momento que los datos entran para garantizar su uso adecuado.

2. Modularización: ¿Qué sucede si olvidamos declarar nuestro
SerieListComponent en el arreglo de declarations del módulo, pero
intentamos usar su selector en el app.component.html?

Al momento de olvidar declarar nuestro SerieListComponent en la Modularización dentro del arreglo declarations de un módulo, 
el modelo no podra reconocerlo como parte de la aplicacion incluso empleando su selector en el archivo HTML ya que, el 
framework generara un error indicando que no se reconoce el elemento seleccionado. Esto se debe a que la modularización 
organiza la aplicación de tal forma que los módulos actuen como registros de los componentes disponibles, por esta razón 
cada componente debe de estar declarado de la forma adecuada porque de ser lo contrario el modelo lo tomara como un dato 
inexistente lo que impide que se compile y se renderice correctamente en la interfaz.
