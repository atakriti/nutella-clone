pop.style.display = "block";
let iX = () => {
  let pop = document.getElementById("pop");
  if (pop.style.display === "block") {
      pop.style.animationName = "popA"
      pop.style.animationDuration = "2s"
      setTimeout(() => (pop.style.display = "none"),1200)
  } else {
    pop.style.display = "block";
  }
};
// ==================
// ======================== Menu Button Close ================
drop.style.display = "none";
let menuButtonClose = () => {
  let menu = document.querySelector("#drop");
  if (menu.style.display === "block") {
      menu.style.animationName = "menuClose"
      setTimeout(() => (menu.style.display = "none"),1000)
  } else {
    menu.style.display = "block";
  }
};
// =================== Menu Button Open =====================
let menuButtonOpen = () => {
  let menu = document.querySelector("#drop");
  if (menu.style.display === "none") {
    menu.style.display = "block";
      menu.style.animationName = "menuOpen"
      menu.style.animationDuration = "2s"
  } else {
     menu.style.display = "none"
  }
};
// ==========================================
info1.style.display = "none";
info2.style.display = "none";
info3.style.display = "none";
info4.style.display = "none";
let btn1 = () => {
  let info1 = document.getElementById("info1");
  let info2 = document.getElementById("info2");
  let info3 = document.getElementById("info3");
  let info4 = document.getElementById("info4");
  // =====================
  let infoOne = document.querySelector(".listA");
  let angelDown = document.querySelector(".angelDown");
  let anchorList = document.querySelector(".anchorList");
  if (info1.style.display === "none") {
    info1.style.animationName = "listDown";
    info1.style.display = "block";
    // ==================== LIST properity ==============
    infoOne.style.backgroundColor = "white";
    anchorList.style.color = "black";
    angelDown.style.color = "black";
    // ========================== Untill Here ================
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
  } else {
    info1.style.animationName = "dropUp";
    setTimeout(
      () => (infoOne.style.backgroundColor = "rgb(228, 10, 10)"),
      1000
    );
    setTimeout(() => (anchorList.style.color = "white"), 1000);
    setTimeout(() => (angelDown.style.color = "white"), 1000);
    setTimeout(() => (info1.style.display = "none"), 1000);
  }
};
// =========== btn2 =========
let btn2 = () => {
  let info1 = document.getElementById("info1");
  let info2 = document.getElementById("info2");
  let info3 = document.getElementById("info3");
  let info4 = document.getElementById("info4");
  // ====================
  let infoOne = document.querySelector(".list2");
  let angelDown = document.querySelector(".angelDown2");
  let anchorList = document.querySelector(".anchorList2");
  if (info2.style.display === "none") {
    info1.style.animationName = "drop1";
    info1.style.display = "none";
    // ==================== LIST properity ==============
    infoOne.style.backgroundColor = "white";
    anchorList.style.color = "black";
    angelDown.style.color = "black";
    // ========================== Untill Here ================
    info2.style.display = "block";
    info3.style.display = "none";
    info4.style.display = "none";
  } else {
    info2.style.animationName = "dropUp1";
    setTimeout(
      () => (infoOne.style.backgroundColor = "rgb(228, 10, 10)"),
      1000
    );
    setTimeout(() => (anchorList.style.color = "white"), 1000);
    setTimeout(() => (angelDown.style.color = "white"), 1000);
    setTimeout(() => (info2.style.display = "none"), 1000);
  }
};
// ========== btn3 ============
let btn3 = () => {
  let info1 = document.getElementById("info1");
  let info2 = document.getElementById("info2");
  let info3 = document.getElementById("info3");
  let info4 = document.getElementById("info4");
  // ====================
  let infoOne = document.querySelector(".list3");
  let angelDown = document.querySelector(".angelDown3");
  let anchorList = document.querySelector(".anchorList3");
  if (info3.style.display === "none") {
    info1.style.animationName = "listDown";
    info1.style.display = "none";
    info2.style.display = "none";
    info3.style.display = "block";
    // ==================== LIST properity ==============
    infoOne.style.backgroundColor = "white";
    anchorList.style.color = "black";
    angelDown.style.color = "black";
    // ========================== Untill Here ================
    info4.style.display = "none";
  } else {
    info3.style.animationName = "dropUp";
    setTimeout(
      () => (infoOne.style.backgroundColor = "rgb(228, 10, 10)"),
      1000
    );
    setTimeout(() => (anchorList.style.color = "white"), 1000);
    setTimeout(() => (angelDown.style.color = "white"), 1000);
    setTimeout(() => (info3.style.display = "none"), 1000);
  }
};
// =============== btn4 ==============
let btn4 = () => {
  let info1 = document.getElementById("info1");
  let info2 = document.getElementById("info2");
  let info3 = document.getElementById("info3");
  let info4 = document.getElementById("info4");
  // ====================
  let infoOne = document.querySelector(".list4");
  let angelDown = document.querySelector(".angelDown4");
  let anchorList = document.querySelector(".anchorList4");
  if (info4.style.display === "none") {
    info1.style.animationName = "listDown";
    info1.style.display = "none";
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "block";
    // ==================== LIST properity ==============
    infoOne.style.backgroundColor = "white";
    anchorList.style.color = "black";
    angelDown.style.color = "black";
    // ========================== Untill Here ================
  } else {
    info4.style.animationName = "dropUp";
    setTimeout(
      () => (infoOne.style.backgroundColor = "rgb(228, 10, 10)"),
      1000
    );
    setTimeout(() => (anchorList.style.color = "white"), 1000);
    setTimeout(() => (angelDown.style.color = "white"), 1000);
    setTimeout(() => (info4.style.display = "none"), 1000);
  }
};
