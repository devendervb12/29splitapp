sap.ui.controller("smax.batch29.A3.controller.ProductDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ProductDetail
*/
	onInit: function() {
     
		var oRouter = this.getOwnerComponent().getRouter();
	    
	    oRouter.getRoute("toDetail").attachPatternMatched(function(oEvent){
	    	debugger;
	    	var pid = oEvent.getParameters().arguments.pid;
	    	
	    	//now call /ProductSet('+pid+') 
	    	this.getView().bindElement("/ProductSet('"+pid+"')");
	    	
	    }, this);
	},

	

});