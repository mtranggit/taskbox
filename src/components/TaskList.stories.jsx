import { fn } from "@storybook/test"

import TaskList from "./TaskList"
import * as TaskStories from './Task.stories'


const meta = {
	component: TaskList,
	title: 'TaskList',
	decorators: [(story) => <div style={{margin: '3rem'}}>{story()}</div>],
	tags: ['autodocs'],
	// Our exports that end in "Data" are not stories
	excludeStories: /.*Data$/,
	args: {
		...TaskStories.ActionsData,
	}
}

export default meta;

export const Default = {
	args: {
		tasks: [
			{...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
			{...TaskStories.Default.args.task, id: '2', title: 'Task 2'},
			{...TaskStories.Default.args.task, id: '3', title: 'Task 3'},
			{...TaskStories.Default.args.task, id: '4', title: 'Task 4'},
			{...TaskStories.Default.args.task, id: '5', title: 'Task 5'},
			{...TaskStories.Default.args.task, id: '6', title: 'Task 6'},
		],
		task: {
			id: '1',
			title: 'Test Task',
			state: 'TASK_INBOX',
		}
	},
};

export const WithPinnedTasks = {
	args: {
		tasks: [
			...Default.args.tasks.slice(0, 5),
			{id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
		],
	}
}

export const Loading = {
	args: {
		tasks: [],
		loading: true,
	}
}

export const Empty = {
	args: {
		...Loading.args,
		loading: false,
	}
}

