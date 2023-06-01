import * as THREE from 'three';

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
const camera = new THREE.PerspectiveCamera(50,800,600)
scene.add(camera)

//render
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800,600)
renderer.render(scene,camera)