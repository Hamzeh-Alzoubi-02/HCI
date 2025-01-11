import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // ربط i18next مع React
  .init({
   
    resources: {
      en: {
        translation: {
          general: {
            "accessDenied": "Access Denied. You are not authorized to view this page.",
            loading: "Loading...",
            switchLanguage: "Switch Language",
            welcome: "Welcome",
            home: "Home",
            about: "About Us",
            contact: "Contact Us",
            services: "Services",
          },
          admin: {
            title: 'Admin Dashboard',
            links: {
              manageAuditMembers: 'Manage Audit Members',
              approveRejectAuditReport: 'Approve/Reject Audit Report',
              manageAuditCriteria: 'Manage Audit Criteria',
              manageAuditees: 'Manage Auditees',
              printAuditReport: 'Print Audit Report',
            },
            members: {
              manageTitle: 'Manage Audit Members',
              nameLabel: 'Name:',
              roleLabel: 'Role:',
              namePlaceholder: 'Enter name',
              rolePlaceholder: 'Enter role',
              addButton: 'Add Member',
              updateButton: 'Update Member',
              membersListTitle: 'Members List',
              editButton: 'Edit',
              deleteButton: 'Delete',
            },
            reports: {
              approveRejectTitle: 'Approve or Reject Audit Report',
              approveButton: 'Approve',
              rejectButton: 'Reject',
              status: 'Status',
            },
            criteria: {
              manageTitle: "Manage Audit Criteria",
              addTitle: "Add New Criterion",
              existingTitle: "Existing Criteria",
              id: "ID",
              name: "Criteria Name",
              actions: "Actions",
              loading: "Loading...",
              addButton: "Add",
              namePlaceholder: "Enter new audit criterion",
              deleteButton: "Delete",
              addSuccess: "Criterion added successfully!",
              addError: "Please enter a criterion name.",
              deleteSuccess: "Criterion deleted successfully!",
              deleteError: "Error deleting criterion!",
            },
            auditees: {
              manageTitle: "Manage Auditees",
              loading: "Loading...",
              id: "ID",
              name: "Name",
              email: "Email",
              actions: "Actions",
              deleteButton: "Delete",
            },
            reports: {
              printTitle: "Print Audit Reports",
              loading: "Loading...",
              detailsTitle: "Audit Reports Details",
              auditReportId: "Audit Report ID",
              reportDetails: "Report Details",
              printButton: "Print Reports",
              approveRejectTitle: "Approve or Reject Audit Reports",
              approveButton: "Approve",
              rejectButton: "Reject",
              status: "Status",
            },
          },
           checkAuditAssignmentStatus: {
          title: "Check Audit Assignment Status",
          auditMember: "Audit Member",
          auditee: "Auditee",
          status: "Status",
        },
          auditMemberDashboard: {
            welcome: "Welcome to Audit Member Dashboard",
            manageAuditTasks: "Manage Audit Tasks",
            viewAuditSchedule: "View Audit Schedule",
            evaluateAuditeeWebsite: "Evaluate Auditee’s Website using Audit Criteria",
            submitAuditReport: "Submit Audit Report to Director of Follow Up",
            receiveAuditReportResponses: "Receive Audit Reports Responses",
            checkAuditStatus: "Check Status of Audit Assignment",
            printAuditReport: "Print Audit Report",
            receiveAuditReportResponseTitle: "Receive Audit Report’s Responses",
        receiveAuditReportResponse: "Received response from AQAC Director.",
        receiveResponse: "Receive Response",
        checkAuditAssignmentStatus: {
          title: "Check Audit Assignment Status",
          auditMember: "Audit Member",
          auditee: "Auditee",
          status: "Status",
        },
          },directorDashboard: {
            welcome: "Welcome to Director Dashboard",
            approveRejectAuditReport: "Approve/Reject Audit Report",
            forwardAuditReport: "Forward Audit Report",
            printAuditReport: "Print Audit Report",
          },   auditeeDashboard: {
            title: "Auditee Dashboard",
            viewAuditReport: "View Audit Report",
            respondToAuditReport: "Respond to Audit Report",
            receiveDecision: "Receive Decision on Audit Report’s Responses",
            checkAuditStatus: "Check Status of Audit Assignment",
            printAuditReport: "Print Audit Report",
            logout: "Logout",
            
          },
          viewAuditReport: {
            title: "View Audit Reports",
            description: "Here you can view all the audit reports assigned to you.",
            tableTitle: "Title",
            tableDescription: "Description",
            tableDate: "Date",
            noReports: "No audit reports available at the moment.",
          },respondToAuditReport: {
            title: "Respond to Audit Reports",
            description: "Select a report and provide your response below.",
            respondTo: "Respond to",
            enterResponse: "Enter your response here...",
            submitResponse: "Submit Response",
            cancel: "Cancel",
            tableTitle: "Title",
            tableDescription: "Description",
            tableStatus: "Status",
            tableActions: "Actions",
            respondButton: "Respond",
          }, receiveDecision: {
            title: "Decision Status",
            loading: "Loading...",
            message: "Your application has been {{decision}}.",
            accepted: "Accepted",
            rejected: "Rejected",
          }, studentDashboard: {
            title: "Student Dashboard",
            viewExamSchedule: "View Exam Schedule",
            viewPerformanceReports: "View Performance Reports",
            viewAssignments: "View Assignments",
            viewProfile: "View Profile",
          },viewExamSchedule: {
            title: "Exam Schedule",
            course: "Course",
            examDate: "Exam Date",
            location: "Location",
          }, viewPerformanceReports: {
            title: "Performance Reports",
            gpa: "Your current GPA is:",
            math: "Math 101",
            physics: "Physics 102",
            chemistry: "Chemistry 103",
          }, viewAssignments: {
            title: "Assignments",
            noAssignments: "No assignments available.",
          },studentProfile: {
            title: "Student Profile",
            name: "Name",
            id: "Student ID",
            department: "Department",
            email: "Email",
            phone: "Phone",
            loading: "Loading...",
          }, loginPageTitle: "Login Page",
          english: "English",
          arabic: "Arabic",
          toggleImageAlt: "Toggle Image",
          universityLogoAlt: "University of Jordan Logo",
          loginPageTitle: "Login Page",
      username: "Username",
      password: "Password",
      login: "Login",
      loading: "Loading...",
      loginSuccess: "Login successful!",
      loginFailed: "Invalid username or password. Please try again.",
      english: "English",
      arabic: "Arabic",
      toggleImageAlt: "Toggle Image",
          buttons: {
            switchLanguage: 'Switch Language',
          },
        },
      },
      ar: {
        translation: {
          general: {
             "accessDenied": "تم رفض الوصول. أنت غير مخول لعرض هذه الصفحة.",
            loading: "جاري التحميل...",
            switchLanguage: "تبديل اللغة",
            welcome: "مرحبًا بك",
            home: "الصفحة الرئيسية",
            about: "معلومات عنا",
            contact: "اتصل بنا",
            services: "الخدمات",
            
          },
          
          admin: {
            title: 'لوحة تحكم المسؤول',
            links: {
              manageAuditMembers: 'إدارة أعضاء التدقيق',
              approveRejectAuditReport: 'الموافقة/الرفض على تقرير التدقيق',
              manageAuditCriteria: 'إدارة معايير التدقيق',
              manageAuditees: 'إدارة المدققين',
              printAuditReport: 'طباعة تقرير التدقيق',
            },
            members: {
              manageTitle: 'إدارة أعضاء التدقيق',
              nameLabel: 'الاسم:',
              roleLabel: 'الدور:',
              namePlaceholder: 'أدخل الاسم',
              rolePlaceholder: 'أدخل الدور',
              addButton: 'إضافة عضو',
              updateButton: 'تحديث العضو',
              membersListTitle: 'قائمة الأعضاء',
              editButton: 'تعديل',
              deleteButton: 'حذف',
            },
            reports: {
              approveRejectTitle: 'الموافقة أو الرفض على تقرير التدقيق',
              approveButton: 'موافقة',
              rejectButton: 'رفض',
              status: 'الحالة',
            },
            criteria: {
              manageTitle: "إدارة معايير التدقيق",
              addTitle: "إضافة معيار جديد",
              existingTitle: "المعايير الحالية",
              id: "معرف",
              name: "اسم المعيار",
              actions: "الإجراءات",
              loading: "جاري التحميل...",
              addButton: "إضافة",
              namePlaceholder: "أدخل معيار التدقيق الجديد",
              deleteButton: "حذف",
              addSuccess: "تم إضافة المعيار بنجاح!",
              addError: "يرجى إدخال اسم المعيار.",
              deleteSuccess: "تم حذف المعيار بنجاح!",
              deleteError: "حدث خطأ أثناء حذف المعيار!",
            },
            auditees: {
              manageTitle: "إدارة المدققين",
              loading: "جاري التحميل...",
              id: "معرف",
              name: "الاسم",
              email: "البريد الإلكتروني",
              actions: "الإجراءات",
              deleteButton: "حذف",
            },
            reports: {
              printTitle: "طباعة تقارير التدقيق",
              loading: "جاري التحميل...",
              detailsTitle: "تفاصيل تقارير التدقيق",
              auditReportId: "معرف تقرير التدقيق",
              reportDetails: "تفاصيل التقرير",
              printButton: "طباعة التقرير",
              approveRejectTitle: "الموافقة أو الرفض على تقارير التدقيق",
              approveButton: "موافقة",
              rejectButton: "رفض",
              status: "الحالة",
            },
          },
          auditMemberDashboard: {
            welcome: "مرحبًا بك في لوحة تحكم عضو التدقيق",
            manageAuditTasks: "إدارة مهام التدقيق",
            viewAuditSchedule: "عرض جدول التدقيق",
            evaluateAuditeeWebsite: "تقييم موقع المدقق باستخدام معايير التدقيق",
            submitAuditReport: "تقديم تقرير التدقيق إلى مدير المتابعة",
            receiveAuditReportResponses: "استلام ردود تقارير التدقيق",
            checkAuditStatus: "التحقق من حالة مهمة التدقيق",
            printAuditReport: "طباعة تقرير التدقيق",
            receiveAuditReportResponseTitle: "استلام ردود تقرير التدقيق",
        receiveAuditReportResponse: "تم استلام الرد من مدير AQAC.",
        checkAuditAssignmentStatus: {
          title: "التحقق من حالة مهمة التدقيق",
          auditMember: "عضو التدقيق",
          auditee: "المدقق",
          status: "الحالة",
        },}, directorDashboard: {
          welcome: "مرحبًا بك في لوحة تحكم المدير",
          approveRejectAuditReport: "الموافقة/الرفض على تقرير التدقيق",
          forwardAuditReport: "إرسال تقرير التدقيق",
          printAuditReport: "طباعة تقرير التدقيق",
        }, auditeeDashboard: {
          title: "لوحة تحكم المدقق",
          viewAuditReport: "عرض تقرير التدقيق",
          respondToAuditReport: "الرد على تقرير التدقيق",
          receiveDecision: "استلام القرار بشأن ردود تقرير التدقيق",
          checkAuditStatus: "التحقق من حالة مهمة التدقيق",
          printAuditReport: "طباعة تقرير التدقيق",
          logout: "تسجيل الخروج",
        }, respondToAuditReport: {
          title: "الرد على تقارير التدقيق",
          description: "حدد تقريرًا وقدم ردك أدناه.",
          respondTo: "الرد على",
          enterResponse: "أدخل ردك هنا...",
          submitResponse: "إرسال الرد",
          cancel: "إلغاء",
          tableTitle: "العنوان",
          tableDescription: "الوصف",
          tableStatus: "الحالة",
          tableActions: "الإجراءات",
          respondButton: "الرد",
        }, receiveDecision: {
          title: "حالة القرار",
          loading: "جاري التحميل...",
          message: "تم قبول طلبك: {{decision}}.",
          accepted: "مقبول",
          rejected: "مرفوض",
        },studentDashboard: {
          title: "لوحة تحكم الطالب",
          viewExamSchedule: "عرض جدول الامتحانات",
          viewPerformanceReports: "عرض تقارير الأداء",
          viewAssignments: "عرض المهام",
          viewProfile: "عرض الملف الشخصي",
        }, viewExamSchedule: {
          title: "جدول الامتحانات",
          course: "المادة",
          examDate: "تاريخ الامتحان",
          location: "الموقع",
        }, viewPerformanceReports: {
          title: "تقارير الأداء",
          gpa: "متوسط ​​النقاط التراكمي الحالي هو:",
          math: "الرياضيات 101",
          physics: "الفيزياء 102",
          chemistry: "الكيمياء 103",
        }, viewAssignments: {
          title: "الواجبات",
          noAssignments: "لا توجد واجبات متاحة.",
        },studentProfile: {
          title: "الملف الشخصي للطالب",
          name: "الاسم",
          id: "رقم الطالب",
          department: "القسم",
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف",
          loading: "جاري التحميل...",
        },  translation: {
          loginPageTitle: "صفحة تسجيل الدخول",
          english: "الإنجليزية",
          arabic: "العربية",
          toggleImageAlt: "تبديل الصورة",
          universityLogoAlt: "شعار جامعة الأردن"
        },  loginPageTitle: "صفحة تسجيل الدخول",
        english: "الإنجليزية",
        arabic: "العربية",
        toggleImageAlt: "تبديل الصورة",
        universityLogoAlt: "شعار جامعة الأردن",
        loginPageTitle: "صفحة تسجيل الدخول",
        username: "اسم المستخدم",
        password: "كلمة المرور",
        login: "تسجيل الدخول",
        loading: "جارٍ التحميل...",
        loginSuccess: "تم تسجيل الدخول بنجاح!",
        loginFailed: "اسم المستخدم أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.",
        english: "الإنجليزية",
        arabic: "العربية",
        toggleImageAlt: "تبديل الصورة",
          buttons: {
            switchLanguage: 'تبديل اللغة',
          },viewAuditReport: {
            title: "عرض تقارير التدقيق",
            description: "هنا يمكنك عرض جميع تقارير التدقيق المخصصة لك.",
            tableTitle: "العنوان",
            tableDescription: "الوصف",
            tableDate: "التاريخ",
            noReports: "لا توجد تقارير تدقيق في الوقت الحالي.",
          },
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,  
    },
  });

export default i18n;
