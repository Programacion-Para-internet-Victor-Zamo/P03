

const scene = new THREE.Scene() // crear escena 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ) // 
const renderer = new THREE.WebGLRenderer({ antialias: true})

// Mandar tamaño al render 
renderer.setSize( window.innerWidth, window.innerHeight )  
document.body.appendChild( renderer.domElement ) 

// El cubo
var geometry = new THREE.BoxGeometry( 1, 1, 1) // pasando altura, ancho y profundidad
// var material = new THREE.MeshBasicMaterial( { color: 0xff0051 }) //basic material  
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })// dando el material standar  rojo al cubo
var cube = new THREE.Mesh ( geometry, material ) // malla pasando la geometria y los materiales del objeto
scene.add( cube ) // añadiendo el cubo a la escena 
renderer.render( scene, camera ) // llamando a la funcion de renderizado, pasando la escena y la camara
camera.position.z = 5 // mover la camara hacia atras para ver el cubo 

/*Las luces de ambiente son omnipresentes y aplican a todo equitativamente
 no crean sombras por que no proceden de ningun lado solo cambia la apariencia de los colores  */
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5) // Crear una fuente de luz , el color y la intensidad 
scene.add( ambientLight ) // añadiendolo a la escena 


// Creando un punto de luz
var pointLight = new THREE.PointLight( 0xffffff, 1 ); // blanca pero mas intensa
pointLight.position.set( 25, 50, 25 ); // punto de origen 
scene.add( pointLight ); // añadiendo la luz a la escena 

// Añadiendo otro objeto 
var geometry = new THREE.BoxGeometry( 3, 3, 3) // crenaod  nueva geometria
var material = new THREE.MeshBasicMaterial( { // creando nuevo amterial transparente , wireframe 
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material ) // creando el objeto wireframe con la geomtria y el material declarados
scene.add( wireframeCube ) // añadiendolo a la escena 


// funcion basica de spin  cubo solido 
function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    renderer.render( scene, camera )
}
// Funcion de spin cubo tranparente 
function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.01;
    renderer.render( scene, camera )
   }
   animate()
animate()