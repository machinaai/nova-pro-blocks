export const getTotalBalance = (data: any, month: string) => {
  let totalBal: number = 0;
  let year: string = '';
  const filter = data.filter((value: any) => value.month === month);
  filter.forEach((element: any) => {
    totalBal += element.balance;
    year = element.year;
  });
  return [year, totalBal];
};

export const getLastMonth = (currentDate: string) => {
  const end = new Date(currentDate);
  end.setMonth(end.getMonth() - 1);
  end.toISOString().substring(0, 10);
  return end.toISOString().substring(0, 10);
};
export const getLastBimester = (currentDate: string) => {
  const end = new Date(currentDate);
  end.setMonth(end.getMonth() - 2);
  end.toISOString().substring(0, 10);
  return end.toISOString().substring(0, 10);
};
export const getLastTrimester = (currentDate: string) => {
  const end = new Date(currentDate);
  end.setMonth(end.getMonth() - 3);
  end.toISOString().substring(0, 10);
  return end.toISOString().substring(0, 10);
};
export const getLastSemester = (currentDate: string) => {
  const end = new Date(currentDate);
  end.setMonth(end.getMonth() - 5);
  end.toISOString().substring(0, 10);
  return end.toISOString().substring(0, 10);
};
