import {
  CodeSandboxOutlined,
  DashboardOutlined,
  FileMarkdownOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const headerList = [
  {
    title: "儀表板",
    url: "/dashboard",
    icon: <DashboardOutlined style={{ color: "white" }} />,
    description: "總覽與統計",
    children: [
      {
        title: "儀錶板",
        url: "/dashboard",
        icon: <CodeSandboxOutlined />,
        description: "總覽與統計",
      },
    ],
  },
  {
    title: "商品管理",
    url: "/products",
    icon: <CodeSandboxOutlined style={{ color: "white" }} />,
    children: [
      {
        title: "商品列表",
        url: "/products",
        icon: <CodeSandboxOutlined />,
        description: "商品庫存管理",
      },
      {
        title: "新增商品",
        url: "/products/new-settings",
        icon: <CodeSandboxOutlined />,
      },
    ],
  },
  {
    title: "訂單管理",
    url: "/orders",
    icon: <FileMarkdownOutlined style={{ color: "white" }} />,
    description: "訂單處理與追蹤",
  },
  {
    title: "商品設定",
    url: "/product-settings",
    icon: <SettingOutlined style={{ color: "white" }} />,
    description: "分類與規格設定",
  },
  {
    title: "人員管理",
    url: "/staff",
    icon: <UserOutlined style={{ color: "white" }} />,
    description: "員工權限管理",
  },
];

export default headerList;
