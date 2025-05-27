const icon = document.querySelectorAll(".icon-arrow-light");
const navItems = document.querySelectorAll(".intro__nav--detail-item");
const answer = document.querySelectorAll(".answer");
const productBtn = document.querySelector(".product");
const companyBtn = document.querySelector(".company");
const connectBtn = document.querySelector(".connect");
const page1 = document.querySelector(".blogr__page-1--container");
const nav = document.querySelector(".intro__nav");
const body = document.querySelector("body");
const navProduct = document.querySelector(".product");
const navCompany = document.querySelector(".company");
const navConnect = document.querySelector(".connect");
const blogr = document.querySelector(".intro__nav--name");

const loginBtn = document.querySelector(".intro__nav--account-login");
const login = document.querySelector(".login");
const loginClose = document.querySelector(".login__close");
const virtual = document.querySelector(".virtual");

const signUpClose = document.querySelector(".signUp__close");
const signUpBtn = document.querySelector(".intro__nav--account-signUp");
const signUp = document.querySelector(".signUp");

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Sticky Nav

const stickyNav = () => {
  const updateUINav = () => {
    nav.style.maxHeight = "0";

    setTimeout(() => {
      nav.style.maxHeight = "7rem";
      nav.style.background = "rgba(0, 0, 0, 0.6)";
      nav.style.position = "fixed";
      nav.style.height = "8rem";
    }, 500);
  };

  const hiddenUINav = () => {
    nav.style.maxHeight = "0";

    setTimeout(() => {
      nav.style.maxHeight = "15rem";
      nav.style.background = "none";
      nav.style.position = "relative";
      nav.style.height = "8rem";
    }, 500);
  };

  const sticky = (elements) => {
    const [entry] = elements;

    if (!entry.isIntersecting) updateUINav();
    else hiddenUINav();
  };

  const pageObserver = new IntersectionObserver(sticky, {
    root: null,
    threshold: 0.5,
  });

  pageObserver.observe(page1);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

let isProductVisible = false;
let isCompanyVisible = false;
let isConnectVisible = false;

const textDecorStyle = (unAct) => {
  unAct.style.textDecoration = "none";
  unAct.style.textDecorationThickness = "0%";
};

const transforms = (active, unActive, unActive2) => {
  active.style.transform = "scale(1.15)";

  unActive.style.transform = "scale(1)";
  unActive2.style.transform = "scale(1)";

  active.style.textDecoration = "underline";
  active.style.textDecorationThickness = "10%";

  textDecorStyle(unActive);
  textDecorStyle(unActive2);
};

// Display Answer
const toggleUp = (i) => {
  answer[i].style.display = "flex";
  setTimeout(() => {
    answer[i].classList.add("visible");
    icon[i].style.transform = "rotate(-180deg)";
  }, 100);
};

// Hidden Answer
const toggleDown = (i) => {
  answer[i].classList.remove("visible");
  icon[i].style.transform = "rotate(0deg)";

  setTimeout(() => {
    answer[i].style.display = "none";
  }, 100);
};

toggleDown(0);
toggleDown(1);
toggleDown(2);

productBtn.addEventListener("click", () => {
  if (!isProductVisible) {
    // Style
    transforms(productBtn, companyBtn, connectBtn);

    // Display UI Answer
    toggleUp(0);
    toggleDown(1);
    toggleDown(2);

    // Change check var
    isConnectVisible = false;
    isCompanyVisible = false;
  } else {
    textDecorStyle(productBtn);
    productBtn.style.transform = "scale(1)";

    toggleDown(0);
  }
  isProductVisible = !isProductVisible;
});

companyBtn.addEventListener("click", () => {
  if (!isCompanyVisible) {
    // Style
    transforms(companyBtn, connectBtn, productBtn);

    // Display UI Answer
    toggleUp(1);
    toggleDown(2);
    toggleDown(0);

    // Change check var
    isConnectVisible = false;
    isProductVisible = false;
  } else {
    textDecorStyle(companyBtn);
    toggleDown(1);

    companyBtn.style.transform = "scale(1)";
  }
  isCompanyVisible = !isCompanyVisible;
});

connectBtn.addEventListener("click", () => {
  if (!isConnectVisible) {
    // Style
    transforms(connectBtn, companyBtn, productBtn);

    // Display UI Answer
    toggleUp(2);
    toggleDown(1);
    toggleDown(0);

    // Change check var
    isCompanyVisible = false;
    isProductVisible = false;
  } else {
    textDecorStyle(connectBtn);
    toggleDown(2);

    connectBtn.style.transform = "scale(1)";
  }
  isConnectVisible = !isConnectVisible;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.5,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

const hiddenDisplay = (el) => {
  setTimeout(() => {
    el.style.display = "none";
  }, 500);
};

const displayUI = (el) => {
  el.style.display = "flex";

  setTimeout(() => {
    el.classList.remove("hidden");
    virtual.classList.add("overlay");
  }, 100);
};

const displayUIHidden = (el) => {
  el.classList.add("hidden");
  virtual.classList.remove("overlay");
};

// Login status

const dataAccount = [
  {
    username: "ngothaianhhao",
    password: 12345,
  },
  {
    username: "jonas",
    password: 1111,
  },
];

const loginName = document.querySelector(".login__username");
const loginPass = document.querySelector(".login__password");
const loginSubmitBtn = document.querySelector(".login__submit");

loginBtn.addEventListener("click", () => {
  displayUI(login);

  loginClose.addEventListener("click", () => {
    displayUIHidden(login);
    hiddenDisplay(login);
  });
});

loginSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  try {
    let isValid = false;
    if (loginName.value === "" || loginPass.value === "")
      throw new Error("Invalid Password Or Username, please try again 💥💥💥");

    //Check valid account
    dataAccount.forEach((el) => {
      if (loginName.value === el.username && +loginPass.value === el.password) {
        displayUIHidden(login);
        hiddenDisplay(login);
        isValid = true;
      }
    });

    if (!isValid)
      throw new Error("Invalid Password Or Username, please try again 💥💥💥");

    // Return
    alert("Login Success 😁😁");
    displayUIHidden(login);
    hiddenDisplay(login);
    return;
  } catch (err) {
    alert(err.message);
    return;
  }
});

// Sign Up status

const signUpName = document.querySelector(".signUp__username");
const signUpPass = document.querySelector(".signUp__password");
const signUpPassAccept = document.querySelector(".signUp__password--accept");
const signUpSubmitBtn = document.querySelector(".signUp__submit");

signUpBtn.addEventListener("click", () => {
  displayUI(signUp);

  signUpClose.addEventListener("click", () => {
    displayUIHidden(signUp);
    hiddenDisplay(signUp);
  });
});

signUpSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  try {
    let isValid = true;
    if (signUpName.value === "" || signUpPass.value === "")
      throw new Error("Invalid Password Or Username, please try again 💥💥💥");

    if (signUpPass.value !== signUpPassAccept.value)
      throw new Error("Wrong Password Accept 😢😢");

    //Check different account
    dataAccount.forEach((el) => {
      if (
        signUpName.value === el.username ||
        +signUpPass.value === el.password
      ) {
        displayUIHidden(login);
        hiddenDisplay(login);
        isValid = false;
      }
    });

    if (!isValid) throw new Error("Account already exists 😢😢");

    // Push username and pass to data account
    dataAccount.push({
      username: signUpName.value,
      password: +signUpPass.value,
    });
    console.log(dataAccount);

    // Return
    alert("Sign Up Success 😁😁");
    displayUIHidden(signUp);
    hiddenDisplay(signUp);
    return;
  } catch (err) {
    alert(err.message);
    return;
  }
});

hiddenDisplay(login);
hiddenDisplay(signUp);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// if (!window.matchMedia("(max-width: 450px)").matches) {
// }
stickyNav();

const editorMobile = document.querySelector(".icon-editor__mobile-view");
const lapIconMobile = document.querySelector(".icon-laptop__mobile-view");
const closeBtn = document.querySelector(".intro__nav--detail-close");
const hambugerBtn = document.querySelector(".intro__nav--detail-img");
const account = document.querySelector(".intro__nav--account");
const detail = document.querySelector(".intro__nav--detail");

if (window.matchMedia("(max-width: 450px)").matches) {
  editorMobile.style.display = "flex";
  lapIconMobile.style.display = "flex";
  icon.forEach((el) => {
    el.src = "./icons/icon-arrow-dark.svg";

    hambugerBtn.addEventListener("click", () => {
      account.style.display = "flex";
      detail.style.display = "flex";
      closeBtn.style.display = "flex";

      setTimeout(() => {
        detail.style.opacity = "1";
      }, 200);

      hambugerBtn.style.display = "none";

      closeBtn.addEventListener("click", () => {
        account.style.display = "none";
        closeBtn.style.display = "none";

        hambugerBtn.style.display = "flex";

        detail.style.opacity = "0";
        setTimeout(() => {
          detail.style.display = "none";
        }, 200);
      });
    });
  });
} else {
  editorMobile.style.display = "none";
  lapIconMobile.style.display = "none";
  icon.forEach((el) => {
    el.src = "./icons/icon-arrow-light.svg";
  });
}
