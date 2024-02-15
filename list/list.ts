namespace $ {
	export class $my_tasks_list extends $mol_model<{
		tasks: readonly string[]
	}> {
		
		@ $mol_mem
		tasks( tasks?: readonly $my_tasks_task[] ) {
			return this.json( tasks && { tasks: tasks.map( task => task.uri() ) } )
				.tasks.map( uri => $my_tasks_task.item( uri ) )
		}
		
	}
}
