import Ember from 'ember';
        export default Ember.Controller.extend({
        buttonTitle: "add",
                list:[{title:"title 1"}, {title:"title 2"}, {title:"title 3"}],
                actions: {
                init:function(){
                },
                        login:function(){
                                var list = this.get('list');
                                list.pushObject({title:this.get('title')});
                                this.set('title',"");
                        }
                }
        });

