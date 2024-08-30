import {
  useBackButton,
  useClosingBehavior,
  useInitData,
  useInitDataRaw,
  useLaunchParams,
} from "@telegram-apps/sdk-react";

function App() {
  const initData = useInitData();
  const initDataRaw = useInitDataRaw();
  const param = useLaunchParams();
  const token = param.initDataRaw;
  console.log(initDataRaw, token);
  console.log("user : ", initData?.user);

  const backButton = useBackButton();
  const closingBehavior = useClosingBehavior();

  closingBehavior.enableConfirmation();
  return (
    <div>
      <button onClick={() => backButton.show()}>back button</button>
    </div>
  );
}

export default App;
