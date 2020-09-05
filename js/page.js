//import Vue from 'vue'

function count() {
  var a = 10;
  var b = 20;
  var c = a + b;
  window.alert(c);
}

function greeting() {
  var myName = "kaka";
  window.alert(myName);
}

var banner = new Vue({
  el: "#banner",
  data: {
    message: "nihao",
    downloadUrl: "www.baidu.com",
    bannerImagePool: [
      {
        image: "C:\\ApplicationSet\\InvitePage\\source\\fish.jpg",
        url: "https://www.baidu.com/",
      },
      {
        image: "C:\\ApplicationSet\\InvitePage\\source\\fox.jpg",
        url: "https://www.4399.com/",
      },
      {
        image: "C:\\ApplicationSet\\InvitePage\\source\\kids.jpg",
        url: "https://ww.sina.com/",
      },
    ], //标题栏图片池
    currentIndex: 0, //默认显示图片
    timer: null, //定时器
  },

  methods: {
    //点击序号显示轮播页
    gotoPage(index) {
      this.currentIndex = index;
    },

    //定时器
    // runInv() {
    //   this.timer = setInterval(() => {
    //     this.gotoPage(this.nextIndex);
    //   }, 1000);
    // },

    startInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 3000);
    },

    //清除定时器
    clearInv() {
      clearInterval(this.timer);
    },
  },

  mounted() {
    this.timer = setInterval(() => {
      this.gotoPage(this.nextIndex);
    }, 3000);
  },

  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.bannerImagePool.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.bannerImagePool.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
  },
});

//#region 屏幕适配

// let app = new Vue({
//   el: "#ScreenManage",
//   data: {
//     screenWidth: document.body.clientWidth,
//     mounted() {
//       const that = this;
//       window.onresize = () => {
//         return (() => {
//           window.screenWidth = document.body.clientWidth;
//           that.screenWidth = window.screenWidth;
//         })();
//       };
//     },
//   },
//   watch: {
//     screenWidth(val) {
//       // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
//       if (!this.timer) {
//         // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
//         this.screenWidth = val;
//         this.timer = true;
//         let that = this;
//         setTimeout(function () {
//           // 打印screenWidth变化的值
//           console.log(that.screenWidth);
//           that.timer = false;
//         }, 400);
//       }
//     },
//   },
// });

//#endregion
