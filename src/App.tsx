import './App.scss';
import { getDividedValueUpto2ndDecimal } from './Utility/NumberUtil';

const baseClass = 'main-app';

function App() {
  return (
    <div className={`${baseClass}__header`}>
      <div>
        <pre>{getDividedValueUpto2ndDecimal(2.0189438989)}</pre>
      </div>
    </div>
  );
}

export default App;
