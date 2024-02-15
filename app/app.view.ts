namespace $.$$ {
	export class $my_tasks_app extends $.$my_tasks_app {
		
		@ $mol_mem
		list() {
			const list = $my_tasks_list.make({})
			list.json({
				tasks: Array.from( { length: 10_000 }, ( _, i )=> `/task=${i}` )
			})
			return list
		}
		
		@ $mol_mem
		columns() {
			return this.filters().map( (_,i)=> this.Column( i ) )
		}
		
		column_title( index: number ) {
			return this.filters()[ index ].title
		}
		
		column_sort( index: number ) {
			return this.filters()[ index ].sort
		}
		
		column_filter( index: number ) {
			return this.filters()[ index ].filter
		}
		
		@ $mol_mem
		updating() {
			const timer = setInterval( ()=> {
				const all = this.list().tasks()
				const source = $mol_array_lottery( all ).json()
				const target = $mol_array_lottery( all )
				const field = $mol_array_lottery( Object.keys( source ) )
				target.json({
					... target.json(),
					[ field ]: source[ field as keyof typeof source ],
					updated: new $mol_time_moment().toString(),
				})
			}, 100 )
			return { destructor: ()=> clearInterval( timer ) }
		}
		
	}
}
