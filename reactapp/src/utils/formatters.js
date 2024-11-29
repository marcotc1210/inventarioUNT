
//Formatear fechas que provienen de la api de Laravel
export const formatIfDate = (value) => {
    // Si el valor no es una cadena o un número, no hacemos nada
    if (typeof value !== "string" && typeof value !== "number") return value;
    // Intentamos convertir el valor en un objeto de fecha
    const date = new Date(value);
    // Validamos si es una fecha válida
    if (isNaN(date.getTime())) return value;

    // Si es una fecha válida, la formateamos
    return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};

