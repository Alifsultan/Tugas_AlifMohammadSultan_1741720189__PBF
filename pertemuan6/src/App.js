import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import gambar4 from './1.png';
// import gambar5 from './1.jpg';
import gambar1 from './1.png';
import gambar2 from './2.jpeg';
import gambar3 from './3.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";



export default function AuthExample(){
  return(
    <Router>
      <div>
      
        
   
      <AuthButton />
             <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="#">Jual Akun Premium</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav">
       <a class="nav-item nav-link active" href="/public">Home <span class="sr-only">(current)</span></a>
       <a class="nav-item nav-link active" href="/login">Kategory</a>
     </div>
   </div>
 </nav></div>
      {/* <ul>
          <li>
            <Link to = "/public">Public page</Link>
          </li>
          <li>
            <Link to = "/private">Private page</Link>
          </li>
        </ul> */}
        <Switch>
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
      Terimakasih Sudah Membeli{""}
      <button onClick={() =>{fakeAuth.signout(() => history.push("/public"));}}>Kembali ke Home</button>
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
  return   <div class="card text-center">
  <div class="card-header">
    Markas Akun
  </div>
  <div class="card-body">
 
   <h5 class="card-title">Bisnis Menjual Akun Premium</h5>
     {/* <img src={gambar}/> */}
    <p class="card-text">Markas Akun ini menyediakan akun Premium antara lain Netflix , spotify , viu , apple music dan juga youtube music.</p>
    <p class="card-text"> Dimana akun tersebut bisa digunakan satu bulan atau 1 tahun tergantung paket yang dibeli.</p>
  </div>
</div>;
}
function ProtectedPage(){
  return <h3>Private</h3>;
}
function LoginPage(){
  let history = useHistory();
  let location = useLocation();
  let {from} = location.state || { from: {pathname: "/"}};
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
      <h5 class="card-title">Pricelist</h5>
      <p class="card-text">Harga diatas sudah termasuk biaya admin dan Garansi selama pemakaian</p>
    </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
   </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={gambar2} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Netflix</h5>
      <p class="card-text">Dilarang mengganti password dan username ketika menggunakan akun tersebut</p>
    </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={gambar3} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Viu</h5>
      <p class="card-text">Menggunakan viu yang bijaksana dikarenakan banyak konten konten dewasa , diwajibkan 18+</p> 
      </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
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
          <li><Link to="/beranda">Beranda</Link>
          </li>
          <li>
            <Link to="/produk">Produk</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <AuthButton/>
        </ul>

        <Switch>
          <Route path="/beranda">
            <BerandaPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/produk">
            <ProtectedPage/>
          </PrivateRoute>
          <PrivateRoute path="/private">
            <ProtectedPage/>
          </PrivateRoute>
        </Switch>
      </div>
      </div>
    </Router>
  );
}
function BerandaPage(){
  return (
    <div>
      <br/>
      <h1 align="center">Makanan Sehat Kita</h1>
      <p align="center">Mulailah dari menjaga pola makan sehat, hidup aman! Terimakasih telah mengunjungi website sehat kami!</p>
    </div>
  );
}

// function BasicExample(){
//   return(
//     <Router>
//       <div>
        
//         <ul>

//           <li>
//             <Link to = "/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           </ul>
//           <hr />
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/about">
//               <About />
//               </Route> 
//             <Route path="/dashboard">
//               <Dashboard />
//               </Route>         
//           </Switch>
//       </div>
//     </Router>
//   );
// }

// //halaman konten

// function Home(){
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }


// function  About(){
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }


// function Dashboard(){
//   return (
//     <div>
//       <h2>dashboard</h2>
//     </div>
//   );
// }
// export default function ParamsExample(){
//   return(
//     <Router>
//       <div>
//         <h2>Acoounts</h2>
//       <ul>
//         <li>
//           <Link to ="/netflix">Netflix</Link>
//         </li>
//         <li>
//           <Link to ="/gmail">Gmail</Link>
//         </li>
//         <li>
//           <Link to ="/yahoo">Yahoo</Link>
//         </li>
//         <li>
//           <Link to ="/amazon">Amazon</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route path="/:id" children={<Child />}/>
//       </Switch>
//       </div>
//     </Router>
//   );
// }

// //konten

// function Child(){
//   let {id} = useParams();

//   return(
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }