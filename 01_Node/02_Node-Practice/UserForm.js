function userForm(req, resp) {
    resp.write(`
        <form action='/submit' method='post'>
            <input type='text' placeholder='Enter your name' required>
            <input type='password' placeholder='Enter your password' required>
            <button>Submit</button>
        </form>
    `)
}
module.exports = userForm;