import Sidebar from "@/components/ui/Sidebar"
import Userdata from "@/pagedata/Userdata";

const User=()=>{
   return( <div className="flex h-screen">
    
    <Sidebar />

    
    <div className="flex-1 flex flex-col">
     
    <div className="bg-gray-800 p-4 pl-10 text-white flex items-center justify-between" style={{ backgroundColor: '#365170' }}>
<h1 className="text-xl">User Profile</h1>
<div className="flex items-center space-x-6">
<i className="bx bx-bell text-2xl cursor-pointer"></i>
<i className="bx bx-cog text-2xl cursor-pointer"></i>
<i className="bx bx-user text-2xl cursor-pointer"></i>
<i className="bx bx-moon text-2xl cursor-pointer"></i> 
  </div>
</div>

      
      <div className="flex-1 p-8 bg-gray-100">
        <Userdata/>
        
      </div>
    </div>
  </div>
    )
}
export default User;