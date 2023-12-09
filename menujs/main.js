var myMenu = [
    [
      null,
      "Hệ thống",
      null,
      null,
      null,
      [
        '<img src="/img/event_icon.png" />',
        "Đổi mật khẩu",
        "form-changePass.html",
        null,
        null,
      ],
      [
        '<img src="/img/event_icon.png" />',
        "Cập nhật thông tin cá nhân",
        "form-changeProfile.html",
        null,
        null,
      ],
    ],
    _cmSplit,
    [
      null,
      "Học viện mạng",
      null,
      null,
      null,
      [
        '<img src="/img/event_icon.png" />',
        "Trang cá nhân",
        "form-page.html",
        null,
        null,
      ],
      [
        '<img src="/img/event_icon.png" />',
        "Xem học viên các lớp học",
        "form-viewClassUsers.html",
        null,
        null,
      ],
    ],
    _cmSplit,
    [
      null,
      "Nghiên cứu Phát triển",
      null,
      null,
      null,
      [
        '<img src="/img/event_icon.png" />',
        "Ý tưởng",
        "form-AdmObjectives.html",
        null,
        null,
      ],
      [
        '<img src="/img/event_icon.png" />',
        "Dự án của thành viên",
        "form-project.html",
        null,
        null,
      ],
    ],
  ];

  cmDraw(
    "myMenuID",
    myMenu,
    "hbr",
    cmThemeDefault,
    "ThemeDefault"
  );