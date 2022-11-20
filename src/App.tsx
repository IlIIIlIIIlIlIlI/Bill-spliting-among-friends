import './App.scss';
import { getDividedValueUpto2ndDecimal } from './Utility/NumberUtil';

const baseClass = 'main-app';

function App() {
  return (
    <div className={`${baseClass}__header`}>
      <div>{getDividedValueUpto2ndDecimal(0)}</div>
    </div>
  );
}

export default App;
