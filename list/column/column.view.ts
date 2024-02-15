namespace $.$$ {
	
	type Keys = $mol_type_keys_extract< $my_tasks_task, ()=> string >
	
	export class $my_tasks_list_column extends $.$my_tasks_list_column {
		
		@ $mol_mem
		filtered() {
			
			const filter = this.filter()
			
			return this.list().tasks().filter( task => {
				
				for( let field in filter ) {
					if( task[ field as Keys ]() !== filter[ field ] ) return false
				}
				
				return true
			} )
			
		}
		itemRendererFactory() {
			return new $my_tasks_task_row()
		}
		@ $mol_mem
		sorted() {
			
			const sort = this.sort()
			const rules = Object.fromEntries(
				sort.map( rule => [ rule.slice(1), Number( rule[0] + '1' ) ] )
			)
			
			return this.filtered().toSorted( ( left, right )=> {
				
				for( const field in rules ) {
					
					const order = rules[ field ]
					
					const l = left[ field as Keys ]().valueOf()
					const r = right[ field as Keys ]().valueOf()
					
					if( l < r ) return -1 * order
					if( l > r ) return +1 * order
					
				}
				
				return 0
			} )
			
		}
		@ $mol_mem
		pull(){
			
			return this.tasks().length
		}
		@ $mol_mem
		tasks() {
			
			const ar = this.sorted() as any
			(this.viewPort() as any).setData(ar);
			
			return ar;
		}
		
		task( task: $my_tasks_task ) {
			return task
		}
		
	}
}
