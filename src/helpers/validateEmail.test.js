const validateEmail = require("./validateEmail")
// @ponicode
describe("validateEmail.default", () => {
    test("0", () => {
        let callFunction = () => {
            validateEmail.default("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            validateEmail.default("user1+user2@mycompany.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            validateEmail.default("_@-.00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            validateEmail.default("bed-free@tutanota.de")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            validateEmail.default("TestUpperCase@Example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            validateEmail.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
