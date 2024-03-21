const saveProfile = () => {
    var hoTen = document.getElementById('NewhoTen').value;
    var gioiTinh = document.querySelector('input[name="NewgioiTinh"]:checked').value;
    var nganhHoc = document.getElementById('Newnganhhoc').value;
    var truong = document.getElementById('Newtruong').value;
    var email = document.getElementById('Newemail').value;
    var bacDaoTao = document.getElementById('NewbacDaoTao').value;
    var khoaHoc = document.getElementById('NewkhoaHoc').value;
    var tinhTrangHoc = document.querySelector('input[name="NewtinhTrangHoc"]:checked').value;

    // Store the values in localStorage
    localStorage.setItem('hoTen', hoTen);
    localStorage.setItem('gioiTinh', gioiTinh);
    localStorage.setItem('nganhHoc', nganhHoc);
    localStorage.setItem('truong', truong);
    localStorage.setItem('email', email);
    localStorage.setItem('bacDaoTao', bacDaoTao);
    localStorage.setItem('khoaHoc', khoaHoc);
    localStorage.setItem('tinhTrangHoc', tinhTrangHoc);

    // Redirect to index.html
    window.location.href = "./index.html";
}
