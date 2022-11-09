import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';

const Modelo = () => {

    //COMPLETE EL CODIGO DE ESTE COMPONENTE

    /* 
        Para acceder al texto del valor seleccionado de un SELECT puede utilizar:

         e.currentTarget.options[e.target.selectedIndex].text

    */

    return (
        <>
            <Container>
                <Row>
                    <h2>Registro de Modelo</h2>
                </Row>
                <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Año Fabricación</th>
                        <th>Marca</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
                </Row>
                <Row>
                    <Row><h3>Agregar nueva Marca</h3></Row>
                    <Row>
                        <Col>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="ID..."  />
                        </Col>
                        <Col>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre..." />
                        </Col>
                        <Col>
                            <Form.Label>Año de Fabricación</Form.Label>
                            <Form.Control type="text" placeholder="País..." />
                        </Col>
                        <Col>
                        <Form.Label>Marca</Form.Label>
                            <Form.Select aria-label="Seleccione un valor...">
                            </Form.Select>
                            </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button style={{ 'marginTop': '10px'}} >ENVIAR</Button>
                        </Col>
                    </Row>
                    
                </Row>
            </Container>
        </>
    )
}

export default Modelo