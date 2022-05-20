const baseURL = `https://capstone-devmountain-ka.herokuapp.com/profile`

const errCallback = err => console.log(err.response.data)

const profileForm = document.querySelector('#profile-form')
const firstNameInput = document.querySelector('input#first-name')
const lastNameInput = document.querySelector('input#last-name')
const phoneInput = document.querySelector('input#username')
const emailInput = document.querySelector('input#email')

const getProfile = () => axios.get(baseURL).catch(errCallback)

