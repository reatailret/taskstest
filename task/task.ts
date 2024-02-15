namespace $ {
	
	export type $my_tasks_task_dto = {
		kind: string,
		title: string,
		description: string,
		assignee: string,
		status: string,
		created: string,
		updated: string,
		start: string,
		end: string,
		duration: string,
	}
	
	export class $my_tasks_task extends $mol_model< $my_tasks_task_dto > {
		
		@ $mol_mem
		json( next?: null | Partial< $my_tasks_task_dto > ) {
			return this.json_update( next && { ... this.json_update(), ... next } || {
				kind: $mol_array_lottery([ ... '📜🚲🏗🏭' ]),
				title: `Deliver ${ $mol_stub_product_name() }`,
				description: $mol_stub_message(100),
				assignee: $mol_stub_person_name(),
				status: $mol_array_lottery([ 'NEW', 'WIP', 'DONE', 'FAIL', 'ABORT' ]),
				created: $mol_stub_time().toString(),
				updated: new $mol_time_moment().toString(),
				start: $mol_stub_time().mask( '0000-00-00' ).toString(),
				end: $mol_stub_time().mask( '0000-00-00' ).toString(),
				duration: `P${ Math.ceil( Math.random() * 365 ) }D`,
			} )
		}
		
		@ $mol_mem
		kind( kind?: string ) {
			return this.json( kind?.valueOf && { title: kind } ).kind
		}
		
		@ $mol_mem
		title( title?: string ) {
			return this.json( title?.valueOf && { title } ).title
		}
		
		@ $mol_mem
		description( description?: string ) {
			return this.json( description?.valueOf && { description } ).description ?? 'Unanotated'
		}
		
		@ $mol_mem
		assignee( assignee?: string ) {
			return this.json( assignee?.valueOf && { assignee } ).assignee
		}
		
		@ $mol_mem
		status( status?: string ) {
			return this.json( status?.valueOf && { status } ).status ?? 'NEW'
		}
		
		@ $mol_mem
		created( created?: string ) {
			return new $mol_time_moment( this.json( created?.valueOf && { created } ).created )
		}
		
		@ $mol_mem
		updated( updated?: string ) {
			return new $mol_time_moment( this.json( updated?.valueOf && { updated } ).updated )
		}
		
		@ $mol_mem
		start( start?: string ) {
			return new $mol_time_moment( this.json( start?.valueOf && { start } ).start )
		}
		
		@ $mol_mem
		end( end?: string ) {
			return new $mol_time_moment( this.json( end?.valueOf && { end } ).end )
		}
		
		@ $mol_mem
		duration( duration?: string ) {
			return new $mol_time_duration( this.json( duration?.valueOf && { duration } ).duration ?? 'P1D' )
		}
		
	}
}
