export interface TreeViewNode {
	/** Main content. accepts HTML. */
	content: string;
	/** Lead content. accepts HTML. */
	lead?: string;
	/** Set open by default on load. */
	open?: boolean;
	/** Set the tree disabled state. */
	disabled?: boolean;
	/** children nodes. */
	children?: TreeViewNode[];
	/** Set the input's value. */
	value?: unknown;
	/** input checked */
	checked?: boolean;
	/** input is set to indeterminate, only availabe in multiple selection mode. */
	indeterminate?: boolean;
}

export interface TreeViewActions {
	updateAll(subNodes: TreeViewNode[], updateField: 'checked' | 'open', status: boolean): void;
	selectAll(): void;
	deselectAll(): void;
	expandAll(): void;
	collapseAll(): void;
}
