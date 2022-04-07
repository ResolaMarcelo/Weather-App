import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <img className='icon' src="https://www.clipartmax.com/png/full/234-2344167_el-clima-en-el-municipio-es-subh%C3%BAmedo-con-r%C3%A9gimen-logos-de-clima.png" alt="" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home</a>
      <a className="nav-item nav-link" href="#"></a>
      <a className="nav-item nav-link" href="#">GitHub</a>
      <a className="nav-item nav-link" href="#">Repositorio</a>
    </div>
  </div>
</nav>
    </>
  )
}
