import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Tiles from "./Tiles";

import hogs from "../porkers_data";

function App() {

	const [showProfile, setShowProfile]=useState(false)
	const [showGreasedOnly, setShowGreasedOnly]=useState(false)

	return (
		<div className="ui grid container">
			<Nav />
			<Filter hogs={hogs} showGreasedOnly={showGreasedOnly} setShowGreasedOnly = {setShowGreasedOnly} />
			<div className="ui eight wide column">
			<Tiles hogs={hogs} showProfile={showProfile} setShowProfile={setShowProfile} />
			</div>
		</div>
	);
}

export default App;
