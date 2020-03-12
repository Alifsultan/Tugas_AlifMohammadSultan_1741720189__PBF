import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {NavBar, Nav, NavItem} from 'react-bootstrap';
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
        <nav class="navbar navbar-expand-sm bg-warning navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item active">
              
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
          <li class="nav-item">
            <Link to="/public">beranda</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
          <br/>
          <li class="nav-item">
            <Link to="/private">Keranjang</Link>
          </li> 
      </ul>  
      </nav>
      <body align="center">
    <table width="800" border="0" cellspacing="0" cellpadding="2" align="center">
    <footer>
       <nav class="navbar fixed-bottom bg-warning">
        <a class="navbar-brand" href="#"align ="center">SULTAN.STORE</a>
        </nav>
    </footer>
    </table>
    </body>
        {/* <ul>
          <li>
            <Link to="/public">Home</Link>
          </li>
          <li>
            <Link to="/private">Login</Link>
          </li>
        </ul> */}
        <hr/>
        <hr/>
        <AuthButton/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/public">
            <PublicPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
const fakeAuth ={
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() =>{
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p> You are not logged in.</p>
  );
}
function PrivateRoute({children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({ location}) =>
      fakeAuth.isAuthenticated ? (
        children
      ) : (
        <Redirect
         to= {{
           pathname: "/login",
           state: {from: location}
         }}
        />
      )
    }/>
  );
}

function PublicPage(){
  let { path, url } = useRouteMatch();
  return (
    <div>
      {/* <h2>Topics</h2> */}
      <ul>
      <li>
        <Link to={`${url}/Vespa`}>Motor</Link>
        
      </li>
      <li>
        <Link to={`${url}/Panci`}>Peralatan rumah tangga</Link>
      </li>
      <li>
        <Link to={`${url}/Roti`}>Makanan</Link>
      </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic/>
        </Route>
      </Switch>
    </div>
  );
}
function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
function ProtectedPage(){
  return <h3>Terima kasih sudah login</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let {from} = location.state || { from: { pathname: "/"} };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      {/* <p>You Must log in to view the page at {from.pathname}</p> */}
      <button onClick={login}>Log In</button>
    </div>
  );
}
function Home(){
  return (
    <div>
      <h2>Pembeli Suka Belanja Online</h2>
      <td>Temukan apapun kebutuhanmu dengan harga terbaik cuma di Sultan.store. Sultan.store adalah pusat perbelanjaan online dimana kamu bisa mendapatkan update terkini dari penjual yang kamu ikuti, sekaligus dari pengguna favorit kamu. Berbelanja dan berjualan menjadi lebih menyenangkan dengan fitur sosial, dimana kamu bisa menyebarkan produk yang kamu jual ataupun barang favorit kamu hanya dengan satu klik saja!
      Belanja semua kebutuhanmu di Sultan.store dengan hati yang tenang! Cek rating dan review toko-toko yang ada dan temukan penjual yang terpercaya dengan mudah. Kami selalu mengutamakan keamanan transaksi untuk para pembeli kami! Dengan Garansi Sultan.store, kamu akan mendapatkan uangmu kembali jika kamu tidak menerima pesanan dengan baik.
      Tidak yakin apa yang ingin kamu beli? Fitur hashtag dapat membantumu menemukan tren produk terkini. Jelajahi berbagai kategori produk, seperti Kemeja Pria, Perlengkapan Rumah, Tas Selempang Pria, Hobi dan Koleksi, Makanan dan Minuman, Pakaian Wanita, Fashion Anak, Clucth Tas Wanita, Kosmetik, Otomotif, Handphone dan Aksesoris, Ibu dan Bayi, Jam Tangan Analog, Kamera Mirrorless, Souvenir dan Pesta, Perawatan & Kesehatan, Sepatu Pria, Aksesoris Fashion, Fashion Muslim, Serba Serbi, Komputer & Aksesoris, Sepatu Wanita, Elektronik, Perlengkapan Olahraga, Voucher, dan masih banyak lagi! Gunakan fitur Pencarian atau Rekomendasi untuk menemukan produk yang paling sesuai dengan keinginanmu secara instan. Berbelanja menjadi semakin hemat dengan voucher dan cashback di Sultan.store . Ayo mulai belanja di Sultan.store sekarang!</td>
    </div>
  );
}
