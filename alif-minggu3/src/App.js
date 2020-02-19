import React from 'react';
import foto from './alif.jpg'
import './App.css';

const App =() => {
  return (
      <div>
        <Head/>
        <Body/>
        <Feet/>
      </div>

  );
}
const Head=() => {
  return (
    <nav class="navbar navbar-expand-sm bg-warning">
    <a class="navbar-brand" href="#">Alif Mohammad Sultan S</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        
      </ul>
      <span class="navbar-text">
        Tugas_Minggu3
      </span>  
    </div>
  </nav>  
  );
}
const Body =() => {
  return (
    <body align="center">
      <h1 align="center">BIODATA DIRI</h1>
      <table width="800" border="0" cellspacing="0" cellpadding="2" align="center">
        <tr>
          <td rowspan="10" align="center"><img src={foto} alt="alif.jpg" width="250px" heigth="400px" /></td>
          <td>Nama</td>
          <td>:</td>
          <td>Alif Mohammad Sultan S</td>
        </tr>
        <tr>
          <td>TTL </td>
          <td>:</td>
          <td>Malang, 27 januari 1999</td>
        </tr>
        <tr>
          <td>Jenis Kelamin </td>
          <td>:</td>
          <td>Laki - Laki</td>
        </tr>
        <tr>
          <td>Alamat </td>
          <td>:</td>
          <td>jl.candi 2/513</td>
        </tr>
        <tr>
          <td>No. Handphone</td>
          <td>:</td>
          <td>082123494327</td>
        </tr>
        <tr>
          <td>Status </td>
          <td>:</td>
          <td>Mahasiswa</td>
        </tr>
        <tr>
          <td>Hobi</td>
          <td>:</td>
          <td>musik</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>:</td>
          <td>alifsultan22gmail.com</td>
        </tr>
        <tr>
          <td>Github</td>
          <td>:</td>
          <td>alifsultan</td>
        </tr>
    </table>
    </body>
    
);
}
const Feet=() => {
  return (
    <body align="center">
    <table width="800" border="0" cellspacing="0" cellpadding="2" align="center">
    <footer>
       <nav class="navbar fixed-bottom bg-warning">
        <a class="navbar-brand" href="#"align ="center">Alif Mohammad Sultan S</a>
        </nav>
    </footer>
    </table>
    </body>
  );
  }
export default App;
