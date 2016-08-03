import * as React from "react";
import * as ReactDOM from "react-dom";

import { Search } from "./components/Search";
import { Tabs } from "./components/Tabs";

var action: any = (value: any) => {
	alert(value);
};

ReactDOM.render(
	<Search action={ action } />,
	document.getElementById("search")
);

ReactDOM.render(
	<Tabs />,
	document.getElementById("tabs")
);
