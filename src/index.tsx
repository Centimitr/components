import * as React from "react";
import * as ReactDOM from "react-dom";

import { Search } from "./components/Search";
import { Panel } from "./components/Panel";
import { Tabs } from "./components/Tabs";

var action: any = (value: any) => {
	alert(value);
};

ReactDOM.render(
	<div>
		<div className="component">
			<h3>Search</h3>
			<Search action={action} />
		</div>

		<div className="component">
			<h3>Panel</h3>
			<Panel>
				<article>
					<h1>Heading</h1>
					<p>
						Panel is a simple container with a gray background and a 100% width.
					</p>
				</article>
			</Panel>
		</div>

		<div className="component">
			<h3>Tabs</h3>
			<Tabs titles={['T1','Tab2','LongTabTitleStretch']} defaultActiveIndex={1}>
				<Panel><article><h1>Description</h1><p>Tab titles and tab content are seprately defined.</p></article></Panel>
				<Panel><article><h1>Default Tab</h1><p>defaultActiveIndex can be specified to tell Tabs which tab to show when initialized. It starts from 0.</p></article></Panel>
				<Panel><article><h1>Container</h1><p>Tab can contain other components. Here is a Search component:</p><Search action={action} /></article></Panel>
			</Tabs>
		</div>
	</div>,
	document.getElementById("showcases")
);

