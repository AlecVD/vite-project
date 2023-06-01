import * as THREE from 'three'
import '/style.css'
//scene
const scene = new THREE.Scene()

//sphere 
const geometry = new THREE.SphereGeometry(4,64,64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff84",
})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}
//camera
const camera = new THREE.PerspectiveCamera(50,sizes.width/sizes.height)
camera.position.z = 20
scene.add(camera)

//light
const light = new THREE.PointLight(0xffffff,1,100)
light.position.set(0,10,10)
scene.add(light)

//render
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera) 