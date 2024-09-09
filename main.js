import * as THREE from 'three';
import { ARButton } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/webxr/ARButton.js';

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement );
document.body.appendChild( ARButton.createButton( renderer ) );
renderer.xr.enabled = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
// camera.position.z = 5;
const helper = new THREE.AxesHelper(1);


const cube = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.1), new THREE.MeshBasicMaterial({color:"green"}));
scene.add(cube);

renderer.setAnimationLoop(function(){
	renderer.render( scene, camera );
});
