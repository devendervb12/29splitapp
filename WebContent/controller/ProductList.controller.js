sap.ui.controller("smax.batch29.A3.controller.ProductList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ProductList
*/
	onInit: function() {

		var oList = this.getView().byId("idList");
		
		oList.attachUpdateFinished(function(){
			this.getView().byId("idList").getItems()[0].firePress();
		}, this);
		
	},
onItemSelection : function(oEvent){
		
		var productId = oEvent.getSource().getTitle();
		this.getOwnerComponent().getRouter().navTo("toDetail", {pid : productId});
	}


});