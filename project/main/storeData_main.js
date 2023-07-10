let studentManagementStore = [
    {
        // khoá học
        "courseId":"RA001",
        "courseName":"JavaScript",
        "courseTime":1200,
        "status":"active",
         // lớp học
        "arrClass" : [
            {
                "classId" : "C001",
                "className":"HN-JV230508",
                "lecturer" : "QuangND",
                "description" : "Java fullstack",
                "membership" : "20",
                "status" : "Chờ lớp",
            }
         ],
        // sinh viên 
        "arrStudent" : [
            {
                "studentId" :"SV001",
                "studentName":"Nguyễn Văn A",
                "studentYear" : 2000,
                "studentAddress" : "Hàn Nội",
                "status" : "Chờ lớp",
            }
        ],
        // tài khoản
        "arrAccount" : [
            {
                "studentEmail":"any@rikkeiacademy.edu.vn",
                "password" : "123456",
                "studentName" : "Hoàng Văn A",
                "status" : "Đang hoạt động",
            }
        ]
        
    }
];
// Tạo mảng user login
let userSystem = [
    { "userId": 1, "email": "user1@gmail.com", "password": "123456", "address": "VN" },
    { "userId": 2, "email": "user2@gmail.com", "password": "234567", "address": "JP" }
];
localStorage.setItem("studentManagementStore", JSON.stringify(studentManagementStore));
localStorage.setItem("userSystem", JSON.stringify(userSystem));

