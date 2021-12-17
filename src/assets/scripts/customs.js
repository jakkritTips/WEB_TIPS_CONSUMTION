const  ui = function(){
    const init = function(){

        Noty.overrideDefaults({
            theme: 'limitless',
            layout: 'topRight',
            type: 'alert',
            timeout: 2500
        });
    
    }

    const select = function(){

        const normal = function(config,element){
            if(element != undefined){
                if(config != undefined){
                    $(element).select2(config);
                }else{
                    $(element).select2();
                }
            }else{
                if(config != undefined){
                    $('.select').select2(config);
                }else{
                    $('.select').select2();
                }
            }
        }

        const multi = function(config,element){
            if(element != undefined){
                if(config != undefined){
                    $(element).multiselect(config);
                }else{
                    $(element).multiselect();
                }
            }else{
                if(config != undefined){
                    $('.select-multi').multiselect(config);
                }else{
                    $('.select-multi').multiselect();
                }
            }
        }


        return {
            apply: function(config,element){ normal(config,element); },
            multi: function(config,element){ multi(config,element); }
        }

    }();

    const tags = function(){

        const apply = function(config,element){
            if(config != undefined){
                $(element).multiselect(config);
            }else{
                $(element).multiselect();
            }
        }
       
        return {
            apply: function(config,element){ apply(config,element); }
        }

    }();
    
    // noty
    const noti = function(){

        const noti_message = function(title,message){
            if(message != undefined){
                return `<div class="my-custom-template noty_body"><b>${ title }</b><br><span class='small'>${ message }<span><div>`;
            }else{
                return `<div class="my-custom-template noty_body"><b>${ title }</b><div>`;
            }
            
        }

        const s = function(title,message) {
            new Noty({
                callbacks: {
                    onTemplate: function() {
                        this.barDom.innerHTML = noti_message(title,message);
                    },
                },
                type: 'success'
              }).show();
        };
    
        const w = function(title,message) {
            new Noty({
                callbacks: {
                    onTemplate: function() {
                        this.barDom.innerHTML = noti_message(title,message);
                    },
                },
                type: 'warning'
              }).show();
        };
    
        const i = function(title,message) {
            new Noty({
                callbacks: {
                    onTemplate: function() {
                        this.barDom.innerHTML = noti_message(title,message);
                    },
                },
                type: 'info'
              }).show();
        };
    
        const e = function(title,message) {
            new Noty({
                callbacks: {
                    onTemplate: function() {
                        this.barDom.innerHTML = noti_message(title,message);
                    },
                },
                type: 'error'
              }).show();
        };
    
        const eurl = function(url,method,error) {
            new Noty({
                callbacks: {
                    onTemplate: function() {
                        this.barDom.innerHTML = `<div class="my-custom-template noty_body">URL: ${ url }<br>METHOD: ${ method }<br>MESSAGE: ${ error }<div>`;
                    },
                },
                type: 'error'
              }).show();
        };

        return {
            s: function(title,message){ s(title,message); },
            i: function(title,message){ i(title,message); },
            w: function(title,message){ i(title,message); },
            e: function(title,message){ i(title,message); },
            eurl: function(url,method,error){ eurl(url,method,error); }
        }

    }();
    

    return {

        init: function() {
            init();
        },
        noti: noti,
        select: select,
        tag: tags
    }

}();

ui.init();