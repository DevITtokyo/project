// đăng xuất
function checkLogin() {
    const email = localStorage.getItem("userLogin");
    if (email==null) {
        // chua dang nhap
        window.location.href = "login.html" 
    } 
    // lấy số lượng khoá học
    // let studentManagementStore = localStorage.getItem("studentManagementStore")?JSON.parse(localStorage.getItem("studentManagementStore")):[]
    // let courseNumber = 0 ;
    // let classNumber = 0; 
    // let classActive = 0 ;
    // let classEnd = 0; 
    // let classWaiting = 0;
    // let studentNumber = 0;
    // let studentWaiting = 0;
    // let studentActive =0 ;
    // let studentSave = 0 ;
    // let studentGraduate = 0 ;
    // studentManagementStore.forEach (course => {
    //     courseNumber++;
    // });
    // document.getElementById("courseNumber").innerText = "Số khoá học : " + courseNumber;
    // // lấy số lượng lớp học
    // studentManagementStore.forEach (course => {
    //     course.forEach(classOfStudent => {
    //         classNumber++;
    //         classOfStudent.arrStudent.forEach(student => {
    //             studentNumber++;
    //             if (student.status == 1) {
    //                 studentWaiting++;
    //             }
    //         });
    //     })
    // });
}

function logOut() {
    // Xoá user login trong local strorage
    localStorage.removeItem("userLogin");
    window.location.href = "login.html"
}

const myModal = document.getElementById('newCourse')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
window.onload = checkLogin();