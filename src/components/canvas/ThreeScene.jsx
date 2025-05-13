import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const geometryRef = useRef(null);
  const shapeGroupRef = useRef(null);
  
  // Initialize scene only once
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Add geometric shapes
    const shapeGroup = new THREE.Group();
    shapeGroupRef.current = shapeGroup;
    
    // Create a tetrahedron
    const tetraGeometry = new THREE.TetrahedronGeometry(1.5, 0);
    const tetraMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const tetrahedron = new THREE.Mesh(tetraGeometry, tetraMaterial);
    shapeGroup.add(tetrahedron);
    
    // Add edges to tetrahedron
    const edges = new THREE.EdgesGeometry(tetraGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x3b82f6,
      linewidth: 2
    });
    const tetLines = new THREE.LineSegments(edges, lineMaterial);
    shapeGroup.add(tetLines);
    
    // Create a smaller cube inside
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    shapeGroup.add(cube);
    
    scene.add(shapeGroup);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add point light
    const pointLight = new THREE.PointLight(0x3b82f6, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (shapeGroupRef.current) {
        // Gentle floating motion
        shapeGroupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle mouse move for parallax effect
    const handleMouseMove = (event) => {
      if (shapeGroupRef.current) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        
        shapeGroupRef.current.rotation.x += mouseY * 0.01;
        shapeGroupRef.current.rotation.y += mouseX * 0.01;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (geometryRef.current) {
        geometryRef.current.dispose();
      }
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0"
      style={{
        width: dimensions.width,
        height: dimensions.height
      }}
    />
  );
};

export default ThreeScene; 