import { Model } from 'objectmodel'

const VueObjectModel = {
	install(Vue) {

		Vue.mixin({
			beforeCreate(){
				let modelDefinition = this.$options.model
				if(modelDefinition){
					const VueModel = new Model(modelDefinition);
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

export { Model, VueObjectModel };

export default VueObjectModel;