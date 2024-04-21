let TTSV = {
    hoTen: "Cao Ngọc Thắng",
    namVao: "2021",
    gioiTinh: "Nam",
    nganhhoc: "Kỹ thuật máy tính",
    lopSinhvien: "Kỹ thuật máy tính 01 - K66",
    truong: "Trường Công nghệ thông tin và truyền thông",
    email: "thang.cn215644@sis.hust.edu.vn",
    bacDaoTao: "Đại học đại trà",
    khoaHoc: "66",
    tinhTrangHoc: "Học",
}
let firstSrc = "./assets/img/EBDCB892-8BF6-4995-851E-C1DCD3E48376.jpeg"
let originalSrc = "./assets/img/EBDCB892-8BF6-4995-851E-C1DCD3E48376.jpeg"
let cur_info = {
    hoTen: "",
    namVao: "",
    gioiTinh: "",
    nganhhoc: "",
    lopSinhvien: "",
    truong: "",
    email: "",
    bacDaoTao: "",
    khoaHoc: "",
    tinhTrangHoc: ""
}
localStorage.setItem('info_sv',JSON.stringify(TTSV))
let data = JSON.parse(localStorage.getItem('info_sv'))

let settingButton = document.getElementById('settingButton')

function handleCancelButtonClick() {
    // Ẩn các phần tử input
    let avatar = document.getElementById('avatar');
    var inputs = document.getElementsByClassName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = 'none';
    }

    for(var id of fieldIds){
        var field = document.getElementById(id)
        field.textContent = cur_info[id]
        field.style.display = 'inline-block';
    }
    console.log(cur_info);
    avatar.src = originalSrc
    let divButton = document.querySelector('.divButton');
    divButton.style.display = 'none'
}
function handleOKButtonClick(){
    for (var id of fieldIds) {
        var input = document.getElementById('new' + id);
        TTSV[id] = input.value;
    }
    console.log(TTSV);

    // Hiển thị giá trị mới
    for (var id of fieldIds) {
        var field = document.getElementById(id);
        field.textContent = TTSV[id];
        field.style.display = 'inline-block';
    }

    // Ẩn các phần tử input
    var inputs = document.getElementsByClassName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = 'none';
    }

    let divButton = document.querySelector('.divButton');
    divButton.style.display = 'none'
}

function handleResetButtonClick(){
    for(var id of fieldIds){
        var field = document.getElementById(id)
        field.textContent = data[id]
        field.style.display = 'inline-block';
    }
    console.log(data)
    var inputs = document.getElementsByClassName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = 'none';
    }
    let divButton = document.querySelector('.divButton');
    divButton.style.display = 'none'

    let avatar = document.getElementById('avatar');
    avatar.src = firstSrc;
}
settingButton.addEventListener('click', function () {

    let imageInput = document.getElementById('imageFile');
    let avatar = document.getElementById('avatar');
    originalSrc = avatar.src;
    imageInput.addEventListener('change', function(e) {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function() {
            let img = document.getElementById('avatar');
            img.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    fieldIds = ['hoTen', 'namVao', 'bacDaoTao', 'nganhhoc', 'truong', 'tinhTrangHoc', 'gioiTinh', 'lopSinhvien', 'khoaHoc', 'email']
    
    for (var id of fieldIds) {
        var field = document.getElementById(id)
        cur_info[id] = field.textContent
        field.style.display = 'none';
    }
    
    var inputs = document.getElementsByClassName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = 'inline-block';
    }
    let divButton = document.querySelector('.divButton');
    divButton.style.display = 'block'

    let resetButton = document.getElementById('resetButton')
    resetButton.addEventListener('click',handleResetButtonClick)

    let cancelButton = document.getElementById('cancelButton')
    cancelButton.addEventListener('click', handleCancelButtonClick);

    let okButton = document.getElementById('okButton');
    okButton.addEventListener('click', handleOKButtonClick)
        // Lấy giá trị từ các phần tử input và lưu vào đối tượng TTSV
});
