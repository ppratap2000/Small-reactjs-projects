import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu,setMenuItems]=useState(items);
  const [categories,setCategories]=useState([]);
  return <h2>menu project setup</h2>;
}

export default App;
