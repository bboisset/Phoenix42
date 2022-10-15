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
		<div className={styles.table}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Rappel des règles</TableCell>
						<TableCell style={{minWidth:150}}>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rules.map((rule: rule, index: number) => {
						const isDone = isRuleDone(rule.id);
						const color = isDone ? 'success' : 'error';
						const text = isDone ? 'Validé' : 'Non validé';
						return (
							<TableRow key={index} className={styles.statusRow}>
								<TableCell sx={{height:80}}>{rule.content}</TableCell>
								<TableCell align="center">
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
		</div>
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