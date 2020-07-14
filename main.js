var app = new Vue({
    el: "#app",
    data: {
        nombre: "Michelle",
        titulo_lista: "Lenguajes:",
        titulo_else: "Aprendí Todo",
        mostrar_titulo_lista: true,
        lenguajes: ['HTML', 'CSS', 'Vue','Firebase', 'Python', 'Dart'],

        titulo_segunda_lista: "Deportes:",
        segundo_titulo_else: "Estoy cansada para hacer deporte",
        mostrar_titulo_segunda_lista: true,
        deportes: ['Basquetball', 'Surf', 'Kendo','Videojuegos']
    }
})