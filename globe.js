// // function cycleShapes() {
// // 	scene.remove(object)
// // 	geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
// // 	object = new THREE.Mesh(geometry, material);
// // 	object.rotation.x = yRotation;
// // 	object.rotation.y = yRotation;
// // 	scene.add(object)
// // }


// let xRotation = 0, yRotation = 0;

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setPixelRatio( window.devicePixelRatio );
// document.body.appendChild( renderer.domElement );

// // let geometry = new THREE.BoxGeometry();

// // let material = new THREE.MeshBasicMaterial({
// // 	color: 0x00ff00,
// // 	wireframe: true
// // });

// // let object = new THREE.Mesh( geometry, material );
// // scene.add( object );

// // camera.position.z = 5;

// import { GLTFLoader } from 'three.js-master/examples/jsm/loaders/GLTFLoader.js';

// // const GLTFLoader = require('three.js-master/examples/jsm/loaders/GLTFLoader.js');

// 	const loader = new GLTFLoader();

// 	loader.load( 'Earth.glb', function ( earth ) {

// 		scene.add( earth.scene );

// 	}, undefined, function ( error ) {

// 		console.error( error );

// 	} );

// function animate() {
// 	requestAnimationFrame( animate );

// 	xRotation = (xRotation + 0.01) % 360;
// 	yRotation = (yRotation + 0.01) % 360;

// 	earth.rotation.x = yRotation;
// 	earth.rotation.y = yRotation;

// 	// object.material.color.setHex(0xffffff);

// 	renderer.render( scene, camera );
// };

// animate();


let Mesh;
let light;

const globe = document.getElementById('globe');

const renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize(document.getElementById('globe').clientWidth, document.getElementById('globe').clientHeight);
globe.appendChild(renderer.domElement);
// make background of scene transparent
renderer.setClearColor(0x000000, 0);
const camera = new THREE.PerspectiveCamera(30, document.getElementById('globe').clientWidth / document.getElementById('globe').clientHeight, 0.1, 1000);
const scene = new THREE.Scene();
camera.updateProjectionMatrix();
camera.position.set(5, 0, 0);
camera.aspect = window.innerWidth / window.innerHeight
camera.updateProjectionMatrix()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)
console.log(document.getElementById('globe').clientWidth / document.getElementById('globe').clientHeight);
console.log(window.innerWidth);
console.log(window.innerHeight);
    function setLight() {
        light = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(light);
    }
    const dirLight1 = new THREE.DirectionalLight( 0xffffff );
        dirLight1.position.set(1, 1, 1);
        scene.add( dirLight1 );

    let balloonLoader = new THREE.GLTFLoader();

    balloonLoader.load('/Earth.gltf', (gltf) => {
        Mesh = gltf.scene;
        Mesh.scale.set(1,1,1);
        scene.add(Mesh);
        Mesh.position.x = 0;
        Mesh.position.y = 0;
        Mesh.position.z = 0;
    });

    window.addEventListener('resize', onWindowResize, false)
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.render(scene, camera)
        }
        


    const controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.listenToKeyEvents(document.body);
    controls.enableDampening = true
    // disable zooming in threejs orbit controls
    controls.enableZoom = false;

    controls.update();
    

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        if (Mesh && Mesh.rotation) {
            Mesh.rotation.y += 0.005;
        }
        renderer.render(scene, camera);
    }

    setLight();
    animate();