// ============================================
// SCREENS
// ============================================
const loginScreen = document.querySelector('.log')
const signupScreen = document.querySelector('.sig')
const apCodeScreen = document.querySelector('.apcodes')
const sendCodeScreen = document.querySelector('.sencodef')
const resetCodeScreen = document.querySelector('.resetcode')
const newPasswordScreen = document.querySelector('.resnewpas')
const usernameScreen = document.querySelector('.usernameset')
const requestRevScreen = document.querySelector('.requestrev')

// ============================================
// FORMS
// ============================================
const loginForm = document.querySelector('.loginpg')
const signupForm = document.querySelector('.signpg')
const apCodeForm = document.querySelector('.apcodepg')
const sendCodeForm = document.querySelector('.sendcodepg')
const resetCodeForm = document.querySelector('.entercodepg')
const newPasswordForm = document.querySelector('.resnewpaspg')
const usernameForm = document.querySelector('.usernamesetpg')
const requestRevForm = document.querySelector('.requestrevpg')

// ============================================
// BUTTONS & LINKS
// ============================================
const toSignupBtn = document.querySelector('.s-sign')
const toLoginBtn = document.querySelector('.s-login')
const forgotPassBtn = document.querySelector('.resetpas')
const wrongEmailBtn = document.querySelector('.emailapprove')
const resendCodeBtn = document.querySelector('.coderesend')

// ============================================
// INPUTS — LOGIN
// ============================================
const userNameInput = document.querySelector('#userName')
const userPasswordInput = document.querySelector('#userPassword')

// ============================================
// INPUTS — SIGNUP
// ============================================
const newEmailInput = document.querySelector('#newemail')
const newPasswordInput = document.querySelector('#newuserPassword')
const confirmPasswordInput = document.querySelector('#pascomfirm')

// ============================================
// INPUTS — APPROVAL CODE
// ============================================
const apCodeInput = document.querySelector('#apcodei')

// ============================================
// INPUTS — SEND RESET EMAIL
// ============================================
const resetEmailInput = document.querySelector('#resetemail')

// ============================================
// INPUTS — RESET CODE
// ============================================
const resetCodeInput = document.querySelector('#resetcode')

// ============================================
// INPUTS — NEW PASSWORD
// ============================================
const newPassInput = document.querySelector('#resnewpasi')
const confirmNewPassInput = document.querySelector('#resnewpascomfirm')

// ============================================
// INPUTS — USERNAME SET
// ============================================
const usernameInput = document.querySelector('#usernameinput')
const usernameError = document.querySelector('.username-error')

// ============================================
// INPUTS — REQUEST REVIEW
// ============================================
const reviewCredInput = document.querySelector('#requestrevcred')
const reviewMessageInput = document.querySelector('#revi')

// ============================================
// HELPER — Screen switcher
// ============================================
function showScreen(screenToShow) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'))
  screenToShow.classList.add('active')
}