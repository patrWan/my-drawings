export function dateFormat(date : string){

    return new Date(date).toLocaleDateString("es-CL", {day : "numeric", year : "numeric", month : "long"});
}