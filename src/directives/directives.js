import Vue from 'vue';


Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
});


/* Validations */

Vue.directive('required', {
    inserted: function (el, binding, vnode) {
        el.addEventListener('blur', function (e) {
            let model = '';
            vnode.data.directives.filter(res => {
                if (res.name === 'model') {
                    model = res.expression;
                }
            });

            if (!e.target.value) {
                el.focus();

                vnode.context.errors = {[model]: 'required'};
                return false;
            }

            vnode.context.errors = '';
        })
    }
});

Vue.directive('positiveNumber', {
    bind: function (el, binding, vnode) {
        el.addEventListener('keydown', function (e) {
            if (!el.value) {
                return false;
            }

            el.value = el.value.replace(/[a-z]/g, '');
        });
    }
});




