const Login = () =>{
    return(
        <>

            <div className="w-screen  h-screen flex justify-start">
            <div className="flex justify-center text-center  w-[100vw] h-screen">
                <div className="mt-[20vh]">
                    <h1 className="font-bold">Welcome to QuizHub</h1>
                    <img src="/images.jfif"/>
                </div>
            </div>


                <div className="flex  justify-center w-screen bg-[#2563EB] ">
                    <div className=" flex flex-col text-center  mt-[20vh] p-10 h-[60vh] rounded-xl bg-white">
                        <div className="flex  text-center justify-center">
                            <h1 className="font-bold text-blue-500">Quiz</h1><h1 className="text-bold">Hub</h1>

                        </div>

                            <span className="m-3 font-bold text-gray-400"> ĐĂNG NHẬP </span>
                            <input className="w-[20vw] h-[4vh] bg-gray-200 p-4 rounded-b-sm my-[1vh]" placeholder="Tên đăng nhập"/>
                            <input type={"password"} className="w-[20vw] h-[4vh] bg-gray-200 p-4 my-[2vh]" placeholder="Mật khẩu"/>

                            <button className="h-[6vh] w-[20vw] !bg-blue-600 text-white !text-xl my-4">ĐĂNG NHẬP</button>
                            <button className=" !bg-gray-100 !font-bold flex items-center justify-center h-[3.5vh]"><img src="/google.png" className="mx-[1vw]"/>Đăng nhập với Google</button>
                        <div className="my-[3vh] flex justify-between">
                            <button className="!bg-gray-100 !font-bold flex items-center justify-center h-[3.5vh] "><img src="/padlock.png" className="mr-[0.5vw]"/>Quên mật khẩu</button>
                            <button className="!bg-gray-100 !font-bold flex items-center justify-center h-[3.5vh]"><img src="/add.png" className="mr-[0.5vw]"/>Đăng Ký</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;