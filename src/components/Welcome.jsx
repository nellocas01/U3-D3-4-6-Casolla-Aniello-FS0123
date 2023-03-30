import Card from 'react-bootstrap/Card';

function Welcome() {
  return (
    <>
     <Card border="light">
        <Card.Header>Benvenuto alla mostra dei ReactBooks</Card.Header>
        <Card.Body>
          <Card.Title>Scegli il tuo libro:</Card.Title>
          <Card.Text>
    Qui potrai trovare tanti generi di libri, che inizi il idvertimento!!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
export default Welcome 