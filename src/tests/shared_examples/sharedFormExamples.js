import expect from 'expect'

const loginForm = [
  wrapper => it('Shows Login Form', () => {
    expect(wrapper.find('input').length).toEqual(3)
    expect(wrapper.find('p').at(0).text()).toEqual('Log In')
    expect(wrapper.find('p').at(1).text()).toEqual("Don't have an account? Sign Up")
    expect(wrapper.find('input').at(0).html()).toEqual('<input name=\"email\" type=\"email\" placeholder=\"Email\">')
    expect(wrapper.find('input').at(1).html()).toEqual('<input name=\"password\" type=\"password\" placeholder=\"Password\">')
    expect(wrapper.find('input').at(2).html()).toEqual('<input type=\"submit\" class=\"submit-btn\">')
  })
]

const signUpForm = [
  wrapper => it('Shows Sign Up Form', () => {
    expect(wrapper.find('input').length).toEqual(3)
    expect(wrapper.find('p').at(0).text()).toEqual('Sign Up')
    expect(wrapper.find('p').at(1).text()).toEqual("Already Signed up? Log In")
    expect(wrapper.find('input').at(0).html()).toEqual('<input name=\"email\" type=\"email\" placeholder=\"Email\">')
    expect(wrapper.find('input').at(1).html()).toEqual('<input name=\"password\" type=\"password\" placeholder=\"Password\">')
    expect(wrapper.find('input').at(2).html()).toEqual('<input type=\"submit\" class=\"submit-btn\">')
  })
]

export const itBehavesLikeLogInForm = wrapper => loginForm.forEach(example => example(wrapper))
export const itBehavesLikeSignUpForm = wrapper => signUpForm.forEach(example => example(wrapper))



