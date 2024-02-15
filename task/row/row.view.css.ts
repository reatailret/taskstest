namespace $.$$ {
	
	$mol_style_define( $my_tasks_task_row, {
		
		background: {
			color: $mol_theme.card,
		},
		
		flex: {
			direction: `column`,
		},
		
		Group: {
			padding: $mol_gap.text,
			flex: {
				direction: `column`,
			},
		},
		
		Main: {
			gap: $mol_gap.block,
			justify: {
				content: 'space-between',
			},
		},
		
		Addon: {
			gap: $mol_gap.block,
			color: $mol_theme.shade,
		},
		
		Title: {
			textShadow: '0 0',
			flex: {
				shrink: 1,
			},
		},
		
		Description: {
			padding: $mol_gap.text,
		},
		
		Status: {
			color: $mol_theme.special,
		},
		
	} )
	
}
