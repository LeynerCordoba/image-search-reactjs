import React, {Component} from 'react';
import Imagen from './Image';
import Pagination from './pagination';

class Results extends Component {
    MostrarResultado = _ =>{
        const img = this.props.data;
        if(img.length){
            return (
                <React.Fragment>
                    <div className="col-12 p-5 row">
                        {img.map((im,index) =>(
                            <Imagen key={index} imagen={im} />
                        ))
                        }
                    </div>
                    <Pagination
                        pageBefore={this.props.pageBefore}
                        pageNext={this.props.pageNext}/>
                </React.Fragment>
            );

        }
            

    }
    render(){
        return (
            <React.Fragment>
                    {this.MostrarResultado()}
            </React.Fragment>
            
        );
    }
}


export default Results;