import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import API from "../../services/index";

class BlogPost extends Component{
    
    state = { 
        listArtikel: [],
        insertArtikel:{
            id: 1,
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

   
    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:4000/mahasiswa/${data}` , {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.Artikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertArtikel)
            .then((response) =>{
                this.ambilDataDariServerAPI();
            });
    }

    render(){
        return(
           <div className="post-artikel">
               <p>Blog Artikel</p>
               <div className="form pb-2 border-bottom">
               {/* <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="Nim" name="Nim" rows="3" onChange={this.handleTambahArtikel}></input>
                             </div>
                     </div> */}
                       <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nim</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="NIM" name="NIM" rows="3" onChange={this.handleTambahArtikel}></input>
                             </div>
                     </div>
                   <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="nama" name="nama" rows="3" onChange={this.handleTambahArtikel}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Alamat</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahArtikel}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">HP</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="hp" name="hp" rows="3" onChange={this.handleTambahArtikel}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Angkatan</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="angkatan" name="angkatan" rows="3" onChange={this.handleTambahArtikel}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Status</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="status" name="status" rows="3" onChange={this.handleTambahArtikel}></input>
                             </div>
                     </div>
                     <br></br>
                        <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                  </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post NIM={artikel.NIM} nama={artikel.nama} alamat={artikel.alamat} hp={artikel.hp} angkatan={artikel.angkatan} status={artikel.status} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
        </div>


        )
    }
}

export default BlogPost;