import { Ui } from './UI.First';
import CharacterCount from './Interpolation';
import { Currenttime } from './PreRender';
import { Styled } from './styleComp';
import Greeting from './Greeting';

const user = ['Hi,The Naveen', 'And The Chauhan'];
function App() {
  return (
    <>
      <Ui user={user} />
      <CharacterCount text="Hello Grandeur" />
      <CharacterCount text="" />
      <Currenttime />
      <Styled />
      <Greeting />
    </>
  );
}

export default App;
