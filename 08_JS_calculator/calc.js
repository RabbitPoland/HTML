window.onload = function () {
    console.log("app started");
    calculator.init();
};

let calculator = {
    buttons: undefined,
    input: undefined,

    init: function () {
        this.buttons = document.querySelectorAll('.numbers button, .operators button');
       // console.log(this.buttons);
       this.input = document.getElementById("input");

       for (let i = 0; i < this.buttons.length; i++) {
            let el = this.buttons[i];
            el.addEventListener("click", this.buttonClick);

       };
    },

    buttonClick: function ( e) {
        let divHtmlText = e.target.innerHTML;
        console.log("Click: " + divHtmlText);

        switch (divHtmlText) {
            case '=':
                calculator.evaluate();
            break;
            case 'c':
                calculator.clear();
            break;
        }
        if (divHtmlText != '=' && divHtmlText != 'c') {
            calculator.addToInput(divHtmlText);
        }



    },

    addToInput: function (str) {
        this.input.value += str;
    },

    evaluate: function () {
        let result = math.evaluate(calculator.input.value);
        calculator.setInput(result);
    },

    clear: function() {
        calculator.setInput("");
    },

    setInput: function (str) {
        calculator.input.value = str;
    }
};