import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import cyan from '@material-ui/core/colors/cyan';

import clsx from 'clsx';

import utils from './Utils';

const useStyles = makeStyles({
	color_02: {
	},
	color_04: {
		/* backgroundColor: '#ebfafa', */
		backgroundColor: cyan[100],
		paddingBottom: '10px',
		paddingTop: '10px',
	},
	color_06: {
		/* backgroundColor: '#c2f0f0', */
		backgroundColor: cyan[200],
		paddingBottom: '15px',
		paddingTop: '15px',
	},
	color_08: {
		/* backgroundColor: '#99e6e6', */
		backgroundColor: cyan[300],
		color: '#ffffff',
		paddingBottom: '20px',
		paddingTop: '20px',
	},
	color_10: {
		/* backgroundColor: '#70dbdb', */
		backgroundColor: cyan[400],
		color: '#ffffff',
		paddingBottom: '25px',
		paddingTop: '25px',	
	},
	smallerFont: {
		fontSize: 'smaller'
	}
});

export function SkillCategory({ primarySkill, category }) {	
	const classes = useStyles();
	return (
	<Button variant="contained" sx={{ m: 1 }} 
	className={clsx(classes[utils.getButtonClass(category.filesAndPhrases?.length)])} >
	  { category.categoryName }&nbsp;
	  <span className={classes.smallerFont}>{category.filesAndPhrases?.length}</span>
	</Button>
	);
}

