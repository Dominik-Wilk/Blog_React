import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dateToView from '../../../utils/dateToView';

const Post = props => {
  return (
    <Card style={{ width: '20rem' }} className='m-3'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <b>Author:</b> {props.author}
          <br />
          <b>Published:</b> {dateToView(props.publishedDate)}
          <br />
          <b>Category:</b> {props.category}
          <br />
          {props.shortDescription}
        </Card.Text>
        <Button as={Link} to={`/post/${props.id}`} variant='primary'>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Post;
