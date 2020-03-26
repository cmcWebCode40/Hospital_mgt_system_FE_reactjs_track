import React from "react";
import Layouts from "./layouts/Layouts";
import "./sass/main.scss";
import ContextProvider from "./shared/ContexApi";

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Layouts />
			</div>
		</ContextProvider>
	);
}

export default App;
