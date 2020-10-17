import React,{Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

  class DishDetails extends Component{
    renderDish(dishes){
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg src={this.props.dishes.image} alt={this.props.dishes.name}/>
            <CardBody>
              <CardTitle>{this.props.dishes.name}</CardTitle>
              <CardText>{this.props.dishes.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    renderComments(comments){
      if(comments!=null)
      {
        const commentListItem = comments.map((comment)=>{
          return(
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author},
              {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
          );
        });
        return(
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {commentListItem}
            </ul>
          </div>
        );
      }
      else{
        return(
          <div>
          </div>
        );
      }
    }
    render(){
      if(this.props.dishes !=null){
      return(
        <div className="container">
          <div className="row">
              {this.renderDish(this.props.dishes)}
              {this.renderComments(this.props.dishes.comments)}
          </div>
          </div>
          );
        }
        else {
          return(<div></div>)
        }
    }
  }
  export default DishDetails;
