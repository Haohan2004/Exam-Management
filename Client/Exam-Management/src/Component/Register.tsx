import {Link} from "react-router-dom";

const Register = () =>{
    return(
        <>

            <div className="w-screen  h-screen flex justify-start">
                <div className="flex justify-center text-center  w-[100vw] h-screen">
                    <div className="mt-[10vh]">
                        <h1 className="font-bold">Welcome to QuizHub</h1>
                        <img src="/image.jpg"/>
                    </div>
                </div>


                <div className="flex  justify-center w-screen bg-[#2563EB] ">
                    <form>
                    <div className=" flex flex-col text-center  mt-[15vh] p-10 h-[65vh] rounded-xl bg-white">
                        <div className="flex  text-center justify-center">
                            <h1 className="font-bold text-blue-500">Quiz</h1><h1 className="text-bold">Hub</h1>

                        </div>

                        <span className="m-3 font-bold text-gray-400"> ĐĂNG KÝ </span>

                        <input className="w-[20vw] h-[4vh] bg-gray-200 p-4 rounded-b-sm my-[2vh] " placeholder="Tên đăng nhập"/>
                        <input type={"password"} className="w-[20vw] h-[4vh] bg-gray-200 p-4 my-[2vh]  " placeholder="Mật khẩu"/>
                        <input type={"password"} className="w-[20vw] h-[4vh] bg-gray-200 p-4 my-[2vh]  " placeholder="Nhập lại mật khẩu"/>

                        <input type={"email"} className="w-[20vw] h-[4vh] bg-gray-200 p-4 my-[2vh] " placeholder="Email"/>

                        <button className="h-[7vh] w-[20vw] !bg-blue-600 text-white !text-xl my-4">ĐĂNG KÝ</button>
                        <div className="flex justify-between">
                            <p>Bạn đã có tài khoản?</p>
                            <Link to="/auth/login" className="!text-black !font-bold">  <button className="!bg-gray-100 !font-bold flex items-center justify-center h-[3.5vh]"><img src="/user.png" className="mr-[0.5vw]"/> Đăng Nhập </button></Link>

                        </div>
                    </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Register;