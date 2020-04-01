import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
// import gambar4 from './1.png';
// import gambar5 from './1.jpg';
import gambar1 from './img/mug1.jfif';
import gambar2 from './img/mug2.jfif';
import gambar4 from './img/foto.jfif';
import gambar5 from './img/mug5.jfif';
import gambar6 from './img/mug6.jfif';
import foto from './img/alif.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";



export default function AuthExample(){
  return(
    <Router>
      <div>
      
      <nav class="navbar navbar-expand-sm bg-warning">
      <a class="navbar-brand" href="#"><h3>SULTAN STORE</h3></a>
      <a class="nav-item nav-link active" href="/beranda">Biodata</a>
      <a class="nav-item nav-link active" href="/public">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link active" href="/private">Kategory</a>
      <a class="nav-item nav-link active" href="/callsen">Call Center</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        
      </ul>

     <span class="navbar-text">
     <AuthButton />
     </span>
   </div>
   </nav>  
        <Switch>
        <Route path="/beranda">
            < BerandaPage/>
          </Route>
          <Route path="/callsen">
            < CallsenPage/>
          </Route>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
          <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth ={
  isAuthenticated: false,
  Authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <p>
      Terimakasih Sudah Membeli  {""}
      <button class="btn btn-secondary btn-lg btn-block" onClick={() =>{fakeAuth.signout(() => history.push("/public"));}}>Kembali ke Home</button>
      </p>
  ) : (
    <p>
      
    </p>
  );
}
//pembungkusan untuk <route> yang mengaarahkan ke login

function PrivateRoute({children, ...rest}){
  return(
    <Route
    {...rest}
    render={({location}) =>
      fakeAuth.isAuthenticated ? (
        children
      ): (
        <Redirect
        to ={{
          pathname: "/login",
          state: {from: location}
        }}
        />
      )
    }
    />
  );
}

function PublicPage(){
  return  ( <div align="center">
 
   <h5 >Bisnis Menjual MUG</h5>
    <p >Sultan Store menjual berbagai jenis mug dengan harga yang terjangkau dan kualitas yang memadai</p>
    <p > dengan variasi tertentu cukup tekan tombol beli pada category, buruan!!</p>
    <td>Layaknya kopi dan krim yang memasangkan momen-momen penting dengan secangkir mug untuk kamu. Pisahkan diri kamu dari orang-orang 
        lainnya dengan cangkir kamu yang sepenuhnya dapat kamu desain. Mug adalah teman terbaik kamu untuk setiap kesempatan yang dapat 
        kamu isi dengan kenangan manis yang layak untuk diingat.
        Magic Mug membuat hati kamu lebih hangat dan minuman lebih ceria dengan mengungkapkan foto-foto indah kamu saat dipanaskan.</td>

  </div>
  
  );
}
function ProtectedPage(){
  return <form  className="form">		
 <div className="field">
 <div className="control">
 <td >Nama Awal</td>
 <input name="firstName" type="text" label="First Name"/>
 </div>
 </div>
 <div className="field">
 <div className="control">
 <td >Nama Akhir</td>
 <input name="lastName" type="text" label="Last Name"/>
 </div>
 </div>
 <div className="field">
 <div className="control">
 <td >Alamat</td>
 <input name="alamat" type="text" label="alamat"/>
 </div>
 </div>
 <div className="field">
 <div className="control">
 <td >Jumlah</td>
 <input name="jumlah" type="text" label="jumlah"/>
 </div>
 </div>
 <div className="field">
 <div className="control">
 <br/>
 <td >
 <button type="reset" value="reset" class="btn btn-secondary btn-lg btn-block" value={alert('Masuk login')} >Submit</button>
 </td>
 </div>
 </div>
 </form>
 }

function LoginPage(){
  let history = useHistory();
  let location = useLocation();
  let {from} = location.state || { from: {pathname: "/login"}};
  let login = () => {
    fakeAuth.Authenticate(() => {
      history.replace(from);
    });
  };
return (
    <div class="card-deck">
  <div class="card">
  <img class="card-img-top" src={gambar1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Muka</h5>
      <p class="card-text">mug kata kata bijak dengan berbagai warna</p>
    </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block" >Beli</button>
   </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={gambar2} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Mupol</h5>
      <p class="card-text">mug polos untuk agan yang suka mug polos dengan variasi bentuk</p>
    </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={gambar6} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Mubes</h5>
      <p class="card-text">mug terbuat dari besi dengan berbagai warna dan design</p> 
      </div>
      <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
    </div>
  </div>
  <div class="card-footer">
    <div class="card">
    <img class="card-img-top" src={gambar5} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Mutak</h5>
      <p class="card-text">mug berbentuk kotak dengan sangat simetris</p> 
      </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
    </div>
</div>
</div>
</div>
);
}
function App() {
  return (
    <Router>
      <div>
        <div className="nav">
        <ul>
          <AuthButton/>
        </ul>

        <Switch>
          <Route path="/beranda">
            <BerandaPage/>
          </Route>
          <Route path="/callsen">
            <CallsenPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage/>
          </PrivateRoute>
        </Switch>
      </div>
      </div>
    </Router>

  );
  }


function CallsenPage(){
  return (
    <div align="center">
      <h1 align="center">Call Center Sultan Store</h1>
      <p class="card-text">untuk ketidaknyamanan atau keperluan terhadap barang anda</p>
      <p class="card-text">kami meminta maaf dan untuk panduan aplikasi bisa hubungi nomor dibawah ini</p>
      <p class="card-text">08972661556 - 556851</p> 
    </div>
  );
}
function BerandaPage(){
  return (
    <div>
    <div align="center">
      <h1 align="center">BIODATA PEMBUAT</h1>
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
          <td>Status </td>
          <td>:</td>
          <td>Mahasiswa</td>
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
        <tr>
          <td>Produk</td>
          <td>:</td>
          <td>MUG</td>
        </tr>
        <tr>
          <td>line</td>
          <td>:</td>
          <td>alifsultans</td>
        </tr>
        
    </table>
    </div>
  </div>
    
);
}
