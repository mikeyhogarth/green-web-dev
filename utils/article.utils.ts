export function enrichData(data: any) {
  const months = ["Jan"];
  if (data.date) {
    const date = new Date(data.date);
    const formatter = new Intl.DateTimeFormat("default", { month: "short" });
    data.formattedDate = formatter.format(date) + " " + date.getFullYear();
  }

  return data;
}
