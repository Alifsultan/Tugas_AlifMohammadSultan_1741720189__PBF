import axios from 'axios';
import React from 'react';
import fire from '../config/Fire';
import './Maps.css'

class Maps extends React.Component {

  logout = () => {
    fire.auth().signOut();
}

  state = {
    datas: [],
    isLoading: true,
    errors: null
  };
  

  Databerita() {
    axios
      .get(
        'http://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=f0b13748efaa409ab577155ab25ce297'
        )
      .then(response =>
        response.data.articles.map(
          newsdata => ({
            name: `${newsdata.source.name}`,
            title: `${newsdata.title}`,
            description: `${newsdata.description}`,
            content: `${newsdata.content}`,
            image: `${newsdata.urlToImage}`,
            create: `${newsdata.publishedAt}`
          })
         
        )
      )

      .then(datas => {
        this.setState(
          {
            datas,
            isLoading: false
          },
          console.log(datas)
        );
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }



  componentDidMount() {
    this.Databerita();
  }

  render() {
    const { isLoading, datas } = this.state;
    return (
      <React.Fragment>
        
          <div className="container judulber">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-primary" role="alert">
                       <h2 className="text-center">Sekilas Info</h2> 
                    </div>
                </div>
                
            </div>
          </div>

          
            {!isLoading ? (
              datas.map(data => {
                const {
                  name,
                  title,
                  description,
                  image,
                  content,
                  create
                } = data;

                return (
                  <div key={data.title} className='container testi'>
                  
                        <div className="col-md-4 kiri">
                            <img className='img-fluid' src={image} alt='images' />
                            <div className='content-detail'>
                            <span>{create}</span>
                            <h4 className='title'>{title}</h4>
                            <p className='desc'>{description}</p>
                            <h4 className='content-name'>{name}</h4>
                            
                            <p className='content'>{content}</p>
                           
                               
                              <button className='btn btn-info'>Read More</button>
                            
                            </div>
                        </div>
                   
                  </div>
                );
              })
            ) : (
            
            <div className="container">
                 <p className="text-center">Loading...</p>
            </div>
             
            )}
         
        
      </React.Fragment>
    );
  }
}

export default Maps;