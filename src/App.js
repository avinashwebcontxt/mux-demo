import './App.css';
import Routes from "./routers/routers";
import Context from "./context/context";
import { useState } from 'react';

const { Provider } = Context;

function App() {

	const [layOut, setLayOut] = useState({
		backgroundUrl: "", overlayUrl: "", pushBg: false, pushOverLay: false
	});

	return (
		<Provider value={{
			layOut,
			setLayOut
		}}>
			<Routes />
		</Provider>
	);
}

export default App;
