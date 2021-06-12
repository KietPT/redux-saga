const validate = values => {
    const error = {};
    const {title, description} = values
    if(!title){
        error.title = 'Vui lòng nhập tiêu đề'
    }else if(title.trim() && title.length <5){
        error.title = 'Tiêu đề phải 5 kí tự'
    }
    return error;
}
export default validate