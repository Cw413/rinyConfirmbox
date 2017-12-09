//模态
var rinyModal=function(wrap,callback){

	this.wrap=$(wrap);
	this.callback=callback;

	this.position='fixed';
	this.ver=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	if(this.ver && parseInt(this.ver[1])<5){
		this.position='absolute';
	};

	this.html=$('<div class="riny_modal" style="position:'+this.position+';display:none;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:999;"></div>');

	this.wrap.append(this.html);
};
rinyModal.prototype.showModal=function(){

	this.html.show();
	
	this.callback && this.callback.show && this.callback.show();

};
rinyModal.prototype.hideModal=function(){

	this.html.hide();

	this.callback && this.callback.hide && this.callback.hide();

};
//弹层
var rinyConfirmBox=function(option){

	var defaultOption={
		modal:true
	};

	this.option=$.extend({},defaultOption,option);

	if(this.option.modal && this.option.wrap){
		this.modalOn=true;
	};

	if(this.modalOn){
		this.mask=new rinyModal(this.option.wrap,this.option.callback);
	};

	if(this.option.btns){
		for(var i=0;i<this.option.btns.length;i++){
			var this_btn=this.option.btns[i];
			$(this_btn.btn).on(this_btn.event,this_btn.fn);
		};
	};

	$(this.option.el).css('display','none');

};

rinyConfirmBox.prototype.showConfirmBox=function(){
	$(this.option.el).css('display','block');
	if(this.modalOn){
		this.mask.showModal();	
	};
};

rinyConfirmBox.prototype.hideConfirmBox=function(){
	$(this.option.el).fadeOut(100);
	if(this.modalOn){
		this.mask.hideModal();	
	};
};