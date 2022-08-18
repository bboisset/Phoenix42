import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { rules } from "./rules";
import styles from './RuleTable.module.css';

const RuleTable = (props: RuleTableProps) => {
	const { doneRules } = props;

	const isRuleDone = (ruleId: string): boolean => {
		return (doneRules[ruleId] === true);
	}

	return (
		<Table sx={{ minWidth: 650 }} aria-label="simple table" className='card'>
			<TableHead>
				<TableRow>
					<TableCell>Rappel des règles</TableCell>
					<TableCell>Status</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rules.map((rule: rule, index: number) => {
					const isDone = isRuleDone(rule.id);
					const color = isDone ? 'success' : 'error';
					const text = isDone ? 'Réalisée' : 'Non réalisée';
					return (
						<TableRow key={index} className={styles.statusRow}>
							<TableCell>{rule.content}</TableCell>
							<TableCell>
								<div className={styles.statusCell}>
									<div className={`${styles.status} ${styles[color]}`}></div>
									{text}
								</div>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

interface rule {
	content: string;
	id: string;
}

interface RuleTableProps {
	doneRules: { [key: string]: boolean };
}

export default RuleTable;