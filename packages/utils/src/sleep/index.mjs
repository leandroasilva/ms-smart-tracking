
export default function sleep(millis = 1000){
  return new Promise((resolve) => setTimeout(resolve, millis));
};

