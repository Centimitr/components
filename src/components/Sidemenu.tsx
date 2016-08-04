import * as React from "react";

export interface SidemenuProps { }
export interface SidemenuState { }

export class Sidemenu extends React.Component<SidemenuProps, SidemenuState> {

	constructor(props: SidemenuProps) {
		super(props);
		this.state = {};
	}

    render() {
        return (
			<div className="UISidemenu">
				{this.props.children}
			</div>
        );
    }
}
