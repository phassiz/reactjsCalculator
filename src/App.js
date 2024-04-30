import { Container, Content, Row} from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firtsNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0'); 
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
    const sum = Number(firtsNumber) + Number(currentNumber)
    setCurrentNumber(String(sum))
    setOperation('')
  }
  }

  const handleSubNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
    const sub = Number(firtsNumber) - Number(currentNumber)
    setCurrentNumber(String(sub))
    setOperation('')
  }
  }

  const handleDivNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else{
    const div = Number(firtsNumber) / Number(currentNumber)
    setCurrentNumber(String(div))
    setOperation('')
  }
  }

  const handleMultNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('X')
    }else{
    const mult = Number(firtsNumber) * Number(currentNumber)
    setCurrentNumber(String(mult))
    setOperation('')
  }
  }

  const handleEquals = () => {
    if(firtsNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case 'X':
          handleMultNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
   /* <div className="App">
      <h1>Olá React!</h1>
      <Button title="Entrar" />
      <Button title="Fechar" />
      <Button title="Abrir" />
      <Button title="Salvar" />
    </div>*/
    <Container>
      <Content>
      <Input value={currentNumber} />
      <Row>
      <Button label="0" onClick={() => handleAddNumber('0')}/>
      <Button label="/" onClick={() => handleDivNumbers()}/>
      <Button label="C" onClick={handleClear} />
      <Button label="X" onClick={() => handleMultNumbers()} />
      </Row> 
      <Row>
      <Button label="7" onClick={() => handleAddNumber('7')}/>
      <Button label="8" onClick={() => handleAddNumber('8')}/>
      <Button label="9" onClick={() => handleAddNumber('9')}/>
      <Button label="-" onClick={() => handleSubNumbers()}/>
      </Row> 
      <Row>
      <Button label="4" onClick={() => handleAddNumber('4')}/>
      <Button label="5" onClick={() => handleAddNumber('5')}/>
      <Button label="6" onClick={() => handleAddNumber('6')}/>
      <Button label="+" onClick={() => handleSumNumbers()}/>
      </Row> 
      <Row>
      <Button label="1" onClick={() => handleAddNumber('1')} />
      <Button label="2" onClick={() => handleAddNumber('2')} />
      <Button label="3" onClick={() => handleAddNumber('3')} />
      <Button label="=" onClick={() => handleEquals()} />
      </Row>      
      </Content>
    </Container>
  );
}

export default App;
