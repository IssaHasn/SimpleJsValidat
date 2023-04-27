let input = document.getElementById('input');
    button = document.getElementById('check');
    output = document.getElementById('box_result');
    clear_btn = document.getElementById('clear');

let er_alot_of_nums = () => {
    output.innerHTML = '<div id=false_result><p>Not True :</p><p>You cannot enter more than 14 characters</p></div>';
};

let er_symbols = () => {
    output.innerHTML = '<div id=false_result><p>Not True :</p><p>You cannot use this symbols <>%;:,!-#$/|(){}[]&^+=</p></div>';
};

let ok_true = () => {
    output.innerHTML = '<div id=true_result><p>Successfully completed</p></div>';
};

let clear = () => {
    input.value = '';
    output.innerHTML = '';
};

button.addEventListener('click',function(){
    let black_list = ['<','>','%',';',':',',','!','-','#','$','/','|','(',')','[',']','{','}','&','^','+','='];
    let value = input.value ;
        length = value.length ;
    if (length > 14){
        er_alot_of_nums();
    }else{
        for(let i = 0; i < length; i++){
            if (black_list.includes(value[i])){
                er_symbols();
                return false;
            }else{
                ok_true();
            };
        };
    };
    return false;
});

clear_btn.addEventListener('click',clear);