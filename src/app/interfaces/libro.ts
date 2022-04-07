export interface Libro {
    id?: number,
    titulo: string,
    autor: {
        id?: number,
        nombre: string
    }
}
