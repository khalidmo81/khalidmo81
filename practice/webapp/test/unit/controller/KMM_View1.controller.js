/*global QUnit*/

sap.ui.define([
	"khalid/practice/controller/KMM_View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("KMM_View1 Controller");

	QUnit.test("I should test the KMM_View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
