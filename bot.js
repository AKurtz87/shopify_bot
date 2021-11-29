const bot = function () {
  for (let i = 0; i < 50; i++) {
    const click1 = function () {
      document.querySelector(".postForm > h3:nth-child(1)").click();
    };

    const click2 = function () {
      document.querySelector(".tabs_btn2").click();
    };

    const click3 = function () {
      document.querySelector("button.mint-msgbox-btn:nth-child(2)").click();
    };

    function submit() {
      let start_time = 5000 + 50000 * i;
      setTimeout(function () {
        click1();
      }, start_time);
      setTimeout(function () {
        click2();
      }, start_time + 15000);
      setTimeout(function () {
        click3();
      }, start_time + 30000);
      setTimeout(function () {
        console.log("submited!");
      }, start_time + 50000);
    }

    submit();
  }
};
