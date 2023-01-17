import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({planet}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{width:'15rem',height:"220px"}} variant="top" src={planet.image}/>
      <Card.Body>
        <Card.Title>{planet.name}</Card.Title>
        <Card.Text>
        number of moons: {planet.number_of_moons}<br></br>
        atmosphere composition: {planet.atmosphere_composition}<br></br>
        distance from_suns: {planet.distance_from_suns}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;