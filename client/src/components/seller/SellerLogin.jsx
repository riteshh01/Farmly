import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate, axios } = useAppContext()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const {data} = await axios.post('/api/seller/login', {email, password});
      if(data.success){
        setIsSeller(true);
        navigate('/seller')
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (isSeller) {
      navigate("/seller")
    }
  }, [isSeller, navigate])

  return !isSeller && (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-black"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88
                        rounded-2xl shadow-xl border border-gray-400">
          <p className="text-2xl text-black font-medium m-auto">
            <span className="text-primary">Seller</span> Login
          </p>

          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter Seller Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          <div className="w-full">
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter Seller Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md cursor-pointer hover:bg-primary-dull"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default SellerLogin
