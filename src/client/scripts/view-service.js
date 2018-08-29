/********************************************************************
 * VIEW SERVICE
 ********************************************************************
 * HOW TO USE
 - import View from './view-service.js';
 - this.rb.view = View.call(this); :object (set in constructor)
 * API
 - this.rb.view.isReady; :boolean (readonly: set in readyCallback())
 - this.rb.view.readyCallback(); :void (run in rb-base's renderer())
 ********************************************************************/

/* View Helper
 **************/
const ViewHelper = {
	getSubComponents(view) { // object[]
		return Array.from( // converts NodeList to Array (needed for [].filter())
			view.querySelectorAll('*') // returns NodeList
		).filter(component =>
			component.tagName.toLowerCase().startsWith('rb-')
		);
	},
	isSubComponentViewReady(component, cnt=0) { // :Promise<boolean> (recursive function)
		return new Promise((resolve) => { // always resolves true
			cnt++;
			if (cnt >= 5) return resolve(true); // limit JIC view is never ready
			try { if (!!component.rb.view.isReady) return resolve(true); } catch(e) {}
			setTimeout(async () => {
				const isViewReady = await this.isSubComponentViewReady(component, cnt);
				resolve(isViewReady);
			});
		});
	},
	async isViewReady(view) { // :boolean (ensures rb sub components are ready)
		let isViewReady;
		const components = this.getSubComponents(view);
		if (!components.length) isViewReady = true;
		for (const component of components) {
			isViewReady = await this.isSubComponentViewReady(component);
			// console.log(isViewReady, component);
		}
		// console.log('VIEW READY', isViewReady);
		return isViewReady;
	}
}

/* View Service
 ***************/
const ViewService = function() { // :object (this = rb-component)
	/* Private
	 **********/
	let _isReady = false;

	/* Public
	 *********/
	return {
		get isReady() { // :boolean (readonly)
			return _isReady;
		},
		/* Called last in rb-base's renderer()
		 * Sets this.rb.view.isReady then executes
		 * child class viewReady() once, if present
		 *******************************************/
		readyCallback: async () => { // :void
			if (!this.isConnected) return;
			if (!this.shadowRoot) return;
			if (_isReady) return;
			_isReady = await ViewHelper.isViewReady(this.shadowRoot);
			// console.log('VIEW READY SET:', _isReady);
			this.viewReady && this.viewReady();
		}
	}
};

/* Export it!
 *************/
export default ViewService;