export default function generateDataFromResponse(res, name) {
  return [
    { value: res.data[name].smartphone, color: res.data[name].colorPhone },
    { value: res.data[name].tablet, color: res.data[name].colorTablet }
  ];
}