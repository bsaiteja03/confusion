import React from 'react';
import { Card, CardImg,CardTitle,CardImgOverlay } from 'reactstrap';

      function RenderDish({dishes}){
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dishes.image} alt={dishes.name} />
              <CardImgOverlay>
                  <CardTitle>{dishes.name}</CardTitle>
              </CardImgOverlay>
          </Card>
        </div>
      );
    }
    function RenderComments({comments}){
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
    const DishDetails=(props)=>{
      if(props.dishes !=null){
      return(
        <div className="container">
            <div className="row">
                <RenderDish dishes={props.dishes} />
                <RenderComments comments={props.dishes.comments} />
            </div>
          </div>
          );
        }
        else {
          return(<div></div>)
        }
    }

  export default DishDetails;
