function userForm(req, resp) {
    resp.write(`
        <form action='/submit' method='post'>
            <input type='text' placeholder='Enter your name'>
            <input type='password' placeholder='Enter your password'>
            <button>Submit</button>
        </form>
    `)
}
module.exports = userForm;