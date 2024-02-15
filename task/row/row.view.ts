namespace $.$$ {
	export class $my_tasks_task_row extends $.$my_tasks_task_row {
		
		@ $mol_mem
		start() {
			return this.task_start().toString( `DD/MM/YY` )
		}
		
		@ $mol_mem
		duration() {
			return `[${ this.task_duration().toString( `#D` ) }]`
		}
		
		@ $mol_mem
		end() {
			return this.task_end().toString( `DD/MM/YY` )
		}

		onData(obj:CdkVirtualForOfContext<any>){
			
			this.context(obj)
		}
		
		@ $mol_mem
		context(next?:any):CdkVirtualForOfContext<any>{
			
			if(next !== undefined) {
				this.implicit(next.implicit)
				return next;
			}
			return 	{
					
				} as CdkVirtualForOfContext<any>
			
		}

		@ $mol_mem
		implicit(next?:any):any
		{
			
			if(next !== undefined) {
				
				return next};
			return 	null
			
		}

		@$mol_mem
		dom_id(): string
		{
			return 'milkywaystd_scroll_testitemrenderer_' + this.task().toString()
		}
		
	}
}
