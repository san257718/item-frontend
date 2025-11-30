"use client";
import "@ant-design/v5-patch-for-react-19";

import { login } from "@/api/dashboard";
import Button from "antd/es/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  // const [addOpen, setAddOpen] = useState<boolean>(false);

  // const setAuthenticated = useLayoutStore((state) => state.setAuthenticated);

  // const handleModalOpen = () => {
  //   setAddOpen(true);
  // };

  // const headleModalClose = () => {
  //   setAddOpen(false);
  // };

  const handleLogin = async () => {
    try {
      const response = await login("admin@ggg.com", "admin");
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-full flex justify-center items-center">
      <div className="max-w-md w-full flex justify-center bg-[#fffc] rounded-lg shadow-xl">
        <div className="w-full">
          <div className="flex flex-col text-center space-y-4 p-6">
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 bg-[#dbeafe] flex items-center justify-center rounded-full">
                {/* <ShieldIcon fontSize="large" color="action" /> */}
              </div>
            </div>
            <h3 className="tracking-tight font-bold text-2xl text-gray-800">
              庫存管理系統
            </h3>
            <p className="text-sm text-gray-600">請輸入您的帳號密碼登入系統</p>
          </div>
          <div className="flex flex-col space-y-4 p-6 pt-0">
            <div className="w-full flex justify-center items-center">
              {/* <TextField
                id="email"
                label="email"
                variant="outlined"
                size="small"
                sx={{ width: '45ch' }}
                slotProps={{
                  input: {
                    startAdornment: <PersonIcon color="action" />,
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error}
              /> */}
            </div>
            <div className="w-full flex justify-center">
              {/* <TextField
                id="password"
                label="password"
                type="password"
                variant="outlined"
                size="small"
                sx={{ width: '45ch' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error}
              /> */}
            </div>
            <div className="flex justify-center">
              <Button className="w-40" type="primary" onClick={handleLogin}>
                登入
              </Button>
              {/* <button className="flex-1" onClick={handleModalOpen}>
                新增帳號
              </button> */}
              {/* <Link
                className="flex-1"
                href={"/dashboard"}
                onChange={handleLogin}
              >
                登入
              </Link> */}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4>測試帳號</h4>
              <p>帳號: admin@gmail.com</p>
              <p>密碼: admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
