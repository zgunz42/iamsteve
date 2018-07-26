"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),MutableSelectField=function(){function e(t,i){_classCallCheck(this,e),this.fieldName=t,this.options=i,this.addButton='a[rel="add_new"]',this.setField(),this.toggleAddButton(),this.bindAdd(),this.bindEdit(),this.bindRemove()}return _createClass(e,[{key:"setField",value:function(){this.field=$('[data-input-value="'+this.fieldName+'"]')}},{key:"toggleAddButton",value:function(){var e=this.field.parent().find(this.addButton);this.field.find(".field-no-results").size()?e.filter(function(e,t){return $(t).hasClass("btn")}).hide():e.show()}},{key:"bindAdd",value:function(){var e=this;this.field.parent().on("click",this.addButton,function(t){t.preventDefault(),e.openForm(e.options.createUrl)})}},{key:"bindEdit",value:function(){var e=this;this.field.parent().on("click","label > a",function(t){t.preventDefault();var i=$(t.target).closest("[data-id]").data("id");e.openForm(e.options.editUrl.replace("###",i))})}},{key:"bindRemove",value:function(){var e=this;this.field.parent().on("select:removeItem","[data-id]",function(t,i){EE.cp.Modal.openConfirmRemove(e.options.removeUrl,i.label,i.value,function(t){return e.handleResponse(t)})})}},{key:"openForm",value:function(e){var t=this;EE.cp.ModalForm.openForm({url:e,createUrl:this.options.createUrl,load:function(e){EE.cp.form_group_toggle(e.find("[data-group-toggle]:input:checked")),SelectField.renderFields(e),Dropdown.renderFields(e),t.options.onFormLoad&&t.options.onFormLoad(e)},success:function(e){return t.handleResponse(e)}})}},{key:"handleResponse",value:function(e){var t=this;if(e.selectList)this.replaceField(e.selectList);else if(this.options.fieldUrl){var i=e.saveId?[e.saveId]:[];$('input[type=checkbox][name="'+this.fieldName+'[]"]:checked, input[type=hidden][name="'+this.fieldName+'[]"]').each(function(){i.push($(this).val())});var n={};n[this.fieldName]=i,$.post(this.options.fieldUrl,n,function(e){t.replaceField(e)})}}},{key:"replaceField",value:function(e){this.field.replaceWith(e),this.setField(),SelectField.renderFields(this.field.parent()),this.toggleAddButton()}}]),e}();