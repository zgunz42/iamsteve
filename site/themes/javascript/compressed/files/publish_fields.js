/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
<<<<<<< HEAD
 * @copyright	Copyright (c) 2003 - 2014, EllisLab, Inc.
=======
 * @copyright	Copyright (c) 2003 - 2013, EllisLab, Inc.
>>>>>>> 0fa8825dc34df02ef80cbe3b3e72c69db1cc2cc1
 * @license		http://ellislab.com/expressionengine/user-guide/license.html
 * @link		http://ellislab.com
 * @since		Version 2.4
 * @filesource
 */
<<<<<<< HEAD
$.ee_filebrowser(),EE.namespace("EE.publish.file_browser"),function(e){function i(e){var i=!1;return e?(e=e.toString(),e=e.replace(/\(\!\(([\s\S]*?)\)\!\)/g,function(e,i){var t=i.split("|!|");return altKey===!0?void 0!==t[1]?t[1]:t[0]:void 0===t[1]?"":t[0]}),e=e.replace(/\[\!\[([\s\S]*?)\]\!\]/g,function(e,t){var n=t.split(":!:");return i===!0?!1:(value=prompt(n[0],n[1]?n[1]:""),null===value&&(i=!0),value)})):""}function t(i,t){var n=e("input[name='"+t+"']").closest(".file_field");n.find(".file_set").show().find(".filename").html(0==i.is_image?'<img src="'+EE.PATH_CP_GBL_IMG+'default.png" alt="'+EE.PATH_CP_GBL_IMG+'default.png" /><br />'+i.file_name:'<img src="'+i.thumb+'" /><br />'+i.file_name),n.find(".choose_file").hide(),n.find(".undo_remove").hide(),n.find('input[name*="_hidden_file"]').val(i.file_name),n.find('input[name*="_hidden_dir"], select[name*="_directory"]').val(i.upload_location_id)}function n(i,n){e(i,n).each(function(){var i=e(this).closest(".file_field"),n=i.find(".choose_file"),o=i.find(".no_file"),l=e(this).data("content-type"),a=e(this).data("directory"),r=[],d={content_type:l,directory:a};e.ee_filebrowser.add_trigger(n,e(this).attr("name"),d,t),fileselector=n.length?n:o,i.find(".remove_file").click(function(){return i.find("input[type=hidden]").val(function(e,i){return r[e]=i,""}),i.find(".file_set").hide(),i.find(".sub_filename a").show(),fileselector.show(),!1}),i.find(".undo_remove").click(function(){return i.find("input[type=hidden]").val(function(e){return r.length?r[e]:""}),i.find(".file_set").show(),i.find(".sub_filename a").hide(),fileselector.hide(),!1})})}EE.publish.file_browser.textarea=function(t){e.ee_filebrowser.add_trigger(e(".btn_img a, .file_manipulate",t),function(n){var o,l="",a="",r="",d="";button_id=e(this).parent().attr("class").match(/id(\d+)/),null!=button_id&&(button_id=button_id[1]),void 0!==t?(o=e("textarea",t),o.focus()):(textareaId=e(this).closest("#markItUpWrite_mode_textarea").length?"write_mode_textarea":e(this).closest(".publish_field").attr("id").replace("hold_field_","field_id_"),void 0!=textareaId&&(o=e("textarea[name="+textareaId+"], input[name="+textareaId+"]",t),o.focus())),n.is_image?(a=EE.upload_directories[n.upload_location_id].properties,r=EE.upload_directories[n.upload_location_id].pre_format,d=EE.upload_directories[n.upload_location_id].post_format,image_tag=null==button_id?EE.filebrowser.image_tag:EE.filebrowser["image_tag_"+button_id],l=image_tag.replace(/src="(.*)\[!\[Link:!:http:\/\/\]!\](.*)"/,'src="$1{filedir_'+n.upload_location_id+"}"+n.file_name+'$2"'),dimensions="","undefined"!=typeof n.file_hw_original&&""!=n.file_hw_original&&(dimensions=n.file_hw_original.split(" "),dimensions='height="'+dimensions[0]+'" width="'+dimensions[1]+'"'),l=l.replace(/\/?>$/,dimensions+" "+a+" />"),l=r+l+d):(a=EE.upload_directories[n.upload_location_id].file_properties,r=EE.upload_directories[n.upload_location_id].file_pre_format,r+='<a href="{filedir_'+n.upload_location_id+"}"+n.file_name+'" '+a+" >",d="</a>",d+=EE.upload_directories[n.upload_location_id].file_post_format),o.is("textarea")?(o.is(".markItUpEditor")||(o.markItUp(myNobuttonSettings),o.closest(".markItUpContainer").find(".markItUpHeader").hide(),o.focus()),e.markItUp(n.is_image?{replaceWith:l}:{key:"L",name:"Link",openWith:r,closeWith:d,placeHolder:n.file_name})):o.val(function(e,t){return t+=r+l+d,i(t)})})},EE.publish.file_browser.file_field=function(){n("input[type=file]","#publishForm .publish_file, .pageContents"),Grid.bind("file","display",function(e){n("input[type=file]",e)})},EE.publish.file_browser.category_edit_modal=function(){n("input[type=file]","#cat_modal_container")},e(function(){EE.filebrowser.publish&&setTimeout(function(){EE.publish.file_browser.file_field(),EE.publish.file_browser.textarea()},15)})}(jQuery);
=======

$.ee_filebrowser();EE.namespace("EE.publish.file_browser");
(function(d){function i(a){var b=!1;return a?(a=a.toString(),a=a.replace(/\(\!\(([\s\S]*?)\)\!\)/g,function(a,b){var c=b.split("|!|");return!0===altKey?void 0!==c[1]?c[1]:c[0]:void 0===c[1]?"":c[0]}),a=a.replace(/\[\!\[([\s\S]*?)\]\!\]/g,function(a,d){var c=d.split(":!:");if(!0===b)return!1;value=prompt(c[0],c[1]?c[1]:"");null===value&&(b=!0);return value})):""}function j(a,b){var e=d("input[name="+b+"]").parent().parent().parent();!1==a.is_image?e.find(".file_set").show().find(".filename").html('<img src="'+
EE.PATH_CP_GBL_IMG+'default.png" alt="'+EE.PATH_CP_GBL_IMG+'default.png" /><br />'+a.file_name):e.find(".file_set").show().find(".filename").html('<img src="'+a.thumb+'" /><br />'+a.file_name);d("input[name="+b+"_hidden]").val(a.file_name);d("input[name="+b+"_hidden_dir], select[name="+b+"_directory]").val(a.upload_location_id)}function h(a,b){d(a,b).each(function(){var a=d(this).parent().parent().parent(),b=a.find(".choose_file"),c=d(this).data("content-type"),f=d(this).data("directory"),c={content_type:c,
directory:f};d.ee_filebrowser.add_trigger(b,d(this).attr("name"),c,j);a.find(".remove_file").click(function(){a.find("input[type=hidden]").val("");a.find(".file_set").hide();return!1})})}EE.publish.file_browser.textarea=function(){d.ee_filebrowser.add_trigger(".btn_img a, .file_manipulate",function(a){var b,e="",g="",c="",f="";button_id=d(this).parent().attr("class").match(/id(\d+)/);null!=button_id&&(button_id=button_id[1]);textareaId=d(this).closest("#markItUpWrite_mode_textarea").length?"write_mode_textarea":
d(this).closest(".publish_field").attr("id").replace("hold_field_","field_id_");void 0!=textareaId&&(b=d("#"+textareaId),b.focus());a.is_image?(g=EE.upload_directories[a.upload_location_id].properties,c=EE.upload_directories[a.upload_location_id].pre_format,f=EE.upload_directories[a.upload_location_id].post_format,image_tag=null==button_id?EE.filebrowser.image_tag:EE.filebrowser["image_tag_"+button_id],e=image_tag.replace(/src="(.*)\[!\[Link:!:http:\/\/\]!\](.*)"/,'src="$1{filedir_'+a.upload_location_id+
"}"+a.file_name+'$2"'),dimensions="","undefined"!=typeof a.file_hw_original&&""!=a.file_hw_original&&(dimensions=a.file_hw_original.split(" "),dimensions='height="'+dimensions[0]+'" width="'+dimensions[1]+'"'),e=e.replace(/\/?>$/,dimensions+" "+g+" />"),e=c+e+f):(g=EE.upload_directories[a.upload_location_id].file_properties,c=EE.upload_directories[a.upload_location_id].file_pre_format,c+='<a href="{filedir_'+a.upload_location_id+"}"+a.file_name+'" '+g+" >",f="</a>",f+=EE.upload_directories[a.upload_location_id].file_post_format);
b.is("textarea")?(b.is(".markItUpEditor")||(b.markItUp(myNobuttonSettings),b.closest(".markItUpContainer").find(".markItUpHeader").hide(),b.focus()),a.is_image?d.markItUp({replaceWith:e}):d.markItUp({key:"L",name:"Link",openWith:c,closeWith:f,placeHolder:a.file_name})):b.val(function(a,b){b+=c+e+f;return i(b)})})};EE.publish.file_browser.file_field=function(){h("input[type=file]","#publishForm, .pageContents")};EE.publish.file_browser.category_edit_modal=function(){h("input[type=file]","#cat_modal_container")};
d(function(){!0==EE.filebrowser.publish&&setTimeout(function(){EE.publish.file_browser.file_field();EE.publish.file_browser.textarea()},15)})})(jQuery);
>>>>>>> 0fa8825dc34df02ef80cbe3b3e72c69db1cc2cc1