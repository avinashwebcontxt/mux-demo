import './App.css';
import Routers from "./routers/routers";
import Context from "./context/context";
import { useReducer } from 'react';
import { initialData,Reducer } from './globalStore/globalStore';

const { Provider } = Context;

function App() {

	const [storeData, dispatch] = useReducer(Reducer, initialData);

	return (
		<Provider value={{
			storeData,
			dispatch
		}}>
			<Routers />
		</Provider>
	);
}

export default App;
