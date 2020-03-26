new Vue(
    {
        el: "#bulbapp",
        data: function () {
            return {
                name: "Stephen",
                isBulbOn: true,
                isBulbOff: false
            }
        },
        methods: {
            showOrHide:function(){
                this.isBulbOn = !this.isBulbOn
                this.isBulbOff = !this.isBulbOff
            }
        }
    }
);