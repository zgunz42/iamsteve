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
 * @since		Version 2.0
 * @filesource
 */
<<<<<<< HEAD
jQuery(document).ready(function(){var i=jQuery;EE.navigation={};var n,e,t="active",a="hover",s="#navigationTabs",o="first_level",r="parent",l=i(s),u=i(s+">li."+r),v=!1;EE.navigation.delay_show_next=function(){window.clearTimeout(n),v=!0,n=window.setTimeout(function(){var n=i(e);n.parent().find("."+t+", ."+a).removeClass(t).removeClass(a),n.addClass(t).addClass(a),n.closest("#navigationTabs > li").is(u.first())||EE.navigation.truncate_menus(n.children("ul")),v=!1},100)},EE.navigation.mouse_listen=function(){l.mouseleave(function(){l.find("."+t).removeClass(t)}),u.mouseenter(function(){l.find("."+t).length&&(l.find("."+t).removeClass(t),i(this).addClass(t))}),u.find("a."+o).click(function(){var n=i(this).parent();return n.hasClass(t)?n.removeClass(t):n.addClass(t),!1}),u.find("ul li").hover(function(){e=this,v||EE.navigation.delay_show_next()},function(){i(this).removeClass(a),v||EE.navigation.untruncate_menus(i(this).children("ul"))}).find("."+r+">a").click(function(){return!1})},EE.navigation.truncate_menus=function(n){var e=i(window).height();i.each(n,function(){var n=i(this),t=n.offset().top,a=n.height(),s=n.find("li:first").height(),o=t+a-e,r=n.find("> li:has(> a[href*=tgpref]):first:visible");if(o>0){var l=Math.ceil(o/s)+2,u=n.find("> li.nav_divider:first:visible").prev().index();n.find("> li:visible").slice(u-l,u).hide()}else r.hide()})},EE.navigation.untruncate_menus=function(n){i.each(n,function(){var e=i(this);e.is(":visible")?setTimeout(function(){EE.navigation.untruncate_menus(n)},15):e.find("> li:hidden").show()})},EE.navigation.mouse_listen()});
=======

jQuery(document).ready(function(){var c=jQuery;EE.navigation={};var d=c("#navigationTabs"),e=c("#navigationTabs>li.parent"),i,j,g=!1;EE.navigation.delay_show_next=function(){window.clearTimeout(i);g=!0;i=window.setTimeout(function(){var a=c(j);a.parent().find(".active, .hover").removeClass("active").removeClass("hover");a.addClass("active").addClass("hover");a.closest("#navigationTabs > li").is(e.first())||EE.navigation.truncate_menus(a.children("ul"));g=!1},100)};EE.navigation.mouse_listen=function(){d.mouseleave(function(){d.find(".active").removeClass("active")});
e.mouseenter(function(){d.find(".active").length&&(d.find(".active").removeClass("active"),c(this).addClass("active"))});e.find("a.first_level").click(function(){var a=c(this).parent();a.hasClass("active")?a.removeClass("active"):a.addClass("active");return!1});e.find("ul li").hover(function(){j=this;g||EE.navigation.delay_show_next()},function(){c(this).removeClass("hover");g||EE.navigation.untruncate_menus(c(this).children("ul"))}).find(".parent>a").click(function(){return!1})};EE.navigation.move_top_level=
function(a,b,c){b.parents(".active").removeClass("active");b=b.closest("#navigationTabs>li");c&&b[c]().length&&a.setFocus(b[c]().children("a"))};EE.navigation.keyboard_listen=function(){d.ee_focus("a.first_level",{removeTabs:"a",onEnter:function(a){a=c(a.target).parent();a.hasClass("parent")&&(a.addClass("active"),this.setFocus(a.find("ul>li>a").eq(0)))},onRight:function(a){var a=c(a.target),b=a.parent();b.hasClass("parent")&&!a.hasClass("first_level")?(b.addClass("active"),this.setFocus(b.find("ul>li>a").eq(0))):
EE.navigation.move_top_level(this,b,"next")},onLeft:function(a){var a=c(a.target),b=a.parent();a.hasClass("first_level")&&b.prev().length?this.setFocus(b.prev().children("a")):(b=b.parent().closest(".parent"),b.removeClass("active"),b.children("a.first_level").length?EE.navigation.move_top_level(this,b,"prev"):this.setFocus(b.children("a").eq(0)))},onUp:function(a){var a=c(a.target),b=a.parent(),h=b.prevAll(":not(.nav_divider)");!a.hasClass("first_level")&&b.prev.length&&this.setFocus(h.eq(0).children("a"))},
onDown:function(a){var a=c(a.target),b=a.parent(),h=b.nextAll(":not(.nav_divider)");!a.hasClass("first_level")&&h.length?this.setFocus(h.eq(0).children("a")):b.hasClass("parent")&&(b.addClass("active"),this.setFocus(b.find("ul>li>a").eq(0)))},onEscape:function(a){a=c(a.target).parent();EE.navigation.move_top_level(this,a)},onBlur:function(){this.getElements().parent.find(".active").removeClass("active")}})};EE.navigation.truncate_menus=function(a){var b=c(window).height();c.each(a,function(){var a=
c(this),f=a.offset().top,d=a.height(),e=a.find("li:first").height(),f=f+d-b,d=a.find("> li:has(> a[href*=tgpref]):first:visible");0<f?(e=Math.ceil(f/e)+2,f=a.find("> li.nav_divider:first:visible").prev().index(),a.find("> li:visible").slice(f-e,f).hide()):d.hide()})};EE.navigation.untruncate_menus=function(a){c.each(a,function(){var b=c(this);b.is(":visible")?setTimeout(function(){EE.navigation.untruncate_menus(a)},15):b.find("> li:hidden").show()})};EE.navigation.mouse_listen();EE.navigation.keyboard_listen()});
>>>>>>> 0fa8825dc34df02ef80cbe3b3e72c69db1cc2cc1