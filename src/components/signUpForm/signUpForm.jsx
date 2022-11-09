export const SignupForm = () => {
    return <div className="m-36">
        <form className="grid justify-center ">
        <h4 className="text-center text-2xl">Sign Up</h4>
        <div className="grid gap-3">
            <label>Email</label>
            <input type="text" name="email" className="p-2 w-96 h-9 border-black border-2"/>
            <label>Username</label>
            <input type="text" name="email" className="p-2 w-96 h-9 border-black border-2"/>
            <label>Password</label>
            <input type="password" name="password" className="p-2 w-96 h-9 border-black border-2"/>
            <button className="bg-red-700 h-10 rounded text-white">Sign Up</button>
           
        </div>
        </form>
    </div>
}