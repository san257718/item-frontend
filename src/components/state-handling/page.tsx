interface StateHandlingProps {
  orderStatus: number;
}

export default function StateHandling({ orderStatus }: StateHandlingProps) {
  const orderStatusColor = (value: number) => {
    switch (value) {
      case 1:
        return (
          <span className="text-green-400 text-xs border border-green-600 px-2 py-1 rounded-2xl bg-green-100">
            已完成
          </span>
        );
      case 2:
        return (
          <span className="text-yellow-400 text-xs border border-yellow-600 px-2 py-1 rounded-2xl bg-yellow-100">
            處理中
          </span>
        );
      case 3:
        return (
          <span className="text-red-400 text-xs border border-red-600 px-2 py-1 rounded-2xl bg-red-100">
            待確認
          </span>
        );
      default:
        return "失敗";
    }
  };
  return (
    <div>
      <span>{orderStatusColor(orderStatus)}</span>
    </div>
  );
}
