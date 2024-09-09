import * as THREE from 'three';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;
controls.update();
const helper = new THREE.AxesHelper(3);
scene.add(helper);

const cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:"green"}));
scene.add(cube);

function animate(){
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
