import { Model } from 'objectmodel'

const VueObjectModel = {
	install(Vue) {

		Vue.mixin({
			beforeCreate(){
				if(this.$options.model){
					const VueModel = new Model(this.$options.model);
					let data = this.$options.data || {};
					let newData;
					if(typeof data === "function"){
						newData = function(){
							return new VueModel(data.apply(this, arguments))
						}
					} else {
						newData = new VueModel(data);
					}

					this.$options.data = newData;
				}
			}
		})
	}
};

export default VueObjectModel;