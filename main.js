//imports
import * as THREE from 'three'
import '/style.css'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//scene
const scene = new THREE.Scene()

//sphere 
const geometry = new THREE.SphereGeometry(4,64,64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff84",
})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//camera
const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,10000)
camera.position.z = 20
scene.add(camera)

//light
const light = new THREE.PointLight(0xffffff,1,100)
light.position.set(0,10,10)
scene.add(light)

//render
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene,camera) 

//controls
const controls = new OrbitControls(camera,canvas)
controls.enablePan = false
controls.enableZoom = false

//resize
window.addEventListener('resize',() => {
  camera.aspect = window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth,window.innerHeight)
})

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene,camera)
  controls.update()
}

animate();