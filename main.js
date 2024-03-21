const saveProfile = () => {
    // Only store the value in localStorage if the input field has been filled
    var hoTen = document.getElementById('NewhoTen').value;
    if (hoTen) localStorage.setItem('hoTen', hoTen);

    var gioiTinh = document.querySelector('input[name="NewgioiTinh"]:checked');
    if (gioiTinh) localStorage.setItem('gioiTinh', gioiTinh.value);

    var nganhHoc = document.getElementById('Newnganhhoc').value;
    if (nganhHoc) localStorage.setItem('nganhHoc', nganhHoc);

    var lopSinhVien = document.getElementById('NewlopSinhvien').value;
    if(lopSinhVien) localStorage.setItem('lopSinhvien', lopSinhVien)
    
    var truong = document.getElementById('Newtruong').value;
    if (truong) localStorage.setItem('truong', truong);

    var email = document.getElementById('Newemail').value;
    if (email) localStorage.setItem('email', email);

    var bacDaoTao = document.getElementById('NewbacDaoTao').value;
    if (bacDaoTao) localStorage.setItem('bacDaoTao', bacDaoTao);

    var khoaHoc = document.getElementById('NewkhoaHoc').value;
    if (khoaHoc) localStorage.setItem('khoaHoc', khoaHoc);

    var tinhTrangHoc = document.querySelector('input[name="NewtinhTrangHoc"]:checked');
    if (tinhTrangHoc) localStorage.setItem('tinhTrangHoc', tinhTrangHoc.value);

    // Redirect to index.html
    window.location.href = "./index.html";
}
