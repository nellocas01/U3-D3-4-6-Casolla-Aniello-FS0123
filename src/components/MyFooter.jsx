import Card from 'react-bootstrap/Card';

function MyFooter() {
  return (
    <Card>
      <Card.Header>Fine</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Questa è tutta la collezione di libri disponibili presso
             il nostro sito, continua a seguirci per 
             non perderti le nuove uscite!!{' '}
          </p>
          <footer className="blockquote-footer">
            Un saluto da <cite title="Source Title">EpiBooks!</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default MyFooter; 
