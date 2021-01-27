/**
 * Mapa de la matriz de archivos a la lista de etiquetas
 * @param {*} name
 */
 const genBlockTags = (name) =>{
   
   return name.split('/')[0].includes('@nova-templates') ? "template" : "pro-block"
}
export default genBlockTags;