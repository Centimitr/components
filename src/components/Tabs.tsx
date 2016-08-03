import * as React from "react";

export interface TabsProps { }
export interface TabsState { value: String, active: Boolean }

export class Tabs extends React.Component<TabsProps, TabsState> {

	constructor(props: TabsProps) {
		super(props);
		this.state = { value: '', active: false };
	}

    render() {
		let className = 'UITabs';
        return (
			<div className={className}>
			</div>
        );
    }
}
